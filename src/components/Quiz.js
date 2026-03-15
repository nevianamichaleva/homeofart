'use client';

import { db } from '@/lib/firebase';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState, useEffect } from 'react';

function shuffle(arr) {
  const b = [...arr];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

/** Дали въпросът е с написване на отговор (не избор от 3). */
function isTextQuestion(q) {
  return q && q.type === 'text';
}

/** Дали въпросът е за свързване на двойки. */
function isMatchingQuestion(q) {
  return q && q.type === 'matching' && Array.isArray(q.pairs) && q.pairs.length > 0;
}

/** Дали въпросът е за подреждане по ред. */
function isOrderingQuestion(q) {
  return q && q.type === 'ordering' && Array.isArray(q.items) && q.items.length > 0;
}

/** Нормализира отговор за сравнение: trim, малки букви, излишни интервали. */
function normalizeAnswer(s) {
  if (s == null || typeof s !== 'string') return '';
  return s.trim().toLowerCase().replace(/\s+/g, ' ');
}

/** Дали потребителският отговор съвпада с верния (или с някой от acceptedAnswers). */
function isCorrectAnswer(question, userAnswer) {
  if (isTextQuestion(question)) {
    const normalized = normalizeAnswer(userAnswer);
    const accepted = question.acceptedAnswers
      ? question.acceptedAnswers.map(normalizeAnswer)
      : [normalizeAnswer(question.correct)];
    return accepted.some((a) => a === normalized);
  }
  if (isMatchingQuestion(question)) {
    if (!Array.isArray(userAnswer) || userAnswer.length !== question.pairs.length) return false;
    const correctSet = new Set(question.pairs.map(([a, b]) => `${a}|${b}`));
    const userSet = new Set(userAnswer.map(([a, b]) => `${a}|${b}`));
    if (correctSet.size !== userSet.size) return false;
    for (const p of userSet) if (!correctSet.has(p)) return false;
    return true;
  }
  if (isOrderingQuestion(question)) {
    if (!Array.isArray(userAnswer) || userAnswer.length !== question.items.length) return false;
    return question.items.every((item, i) => item === userAnswer[i]);
  }
  return userAnswer === question.correct;
}

/** Верен отговор за показване (при текст въпрос – основният вариант). */
function getCorrectDisplay(question) {
  if (question.acceptedAnswers && question.acceptedAnswers.length > 0) {
    return question.acceptedAnswers[0];
  }
  if (isMatchingQuestion(question)) {
    return question.pairs.map(([a, b]) => `${a} → ${b}`).join('; ');
  }
  if (isOrderingQuestion(question)) {
    return question.items.map((item, i) => `${i + 1}. ${item}`).join(' ');
  }
  return question.correct;
}

export default function Quiz({ title, questions, testId = '', testTitle = '' }) {
  /** Име на участника и дали е започнал теста */
  const [userName, setUserName] = useState('');
  const [started, setStarted] = useState(false);
  /** Разбъркан ред на въпросите – фиксиран при зареждане на страницата */
  const [shuffledQuestions] = useState(() => shuffle([...questions]));
  /** Разбъркан ред на отговорите за всеки въпрос – фиксиран при стартиране на теста */
  const [optionOrders, setOptionOrders] = useState(null);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  /** При показване на обобщение: { correctCount, total, grade, gradeLabel, resultSaved } */
  const [summaryResult, setSummaryResult] = useState(null);
  /** Избраният отговор за текущия въпрос (null = нищо не е избрано) */
  const [selectedOption, setSelectedOption] = useState(null);
  /** За въпроси тип "текст" – написаният отговор */
  const [typedAnswer, setTypedAnswer] = useState('');
  /** За matching: разбъркан ред на дясната колона по индекс на въпрос */
  const [matchingCache, setMatchingCache] = useState(null);
  /** За ordering: разбъркан ред на елементите по индекс на въпрос */
  const [orderingCache, setOrderingCache] = useState(null);
  /** За matching: избрани дясни индекси за всяка лява позиция { 0: 1, 1: 3, ... } */
  const [matchingSelections, setMatchingSelections] = useState({});
  /** За ordering: текущ ред на елементите (масив от низове) */
  const [orderingItems, setOrderingItems] = useState([]);

  const qCurrent = shuffledQuestions[index];
  const isMatching = isMatchingQuestion(qCurrent);
  const isOrdering = isOrderingQuestion(qCurrent);
  const isText = isTextQuestion(qCurrent);
  const opts = (qCurrent?.options && qCurrent.options.length > 0)
    ? qCurrent.options
    : [
        qCurrent?.correct,
        qCurrent?.wrong1,
        qCurrent?.wrong2,
        qCurrent?.wrong3,
      ].filter(Boolean);
  const orderForQuestion = optionOrders?.[index];
  const orderedOpts = orderForQuestion != null && orderForQuestion.length > 0
    ? orderForQuestion.map((i) => opts[i]).filter(Boolean)
    : opts;

  useEffect(() => {
    const q = shuffledQuestions[index];
    if (!q) return;
    if (isOrderingQuestion(q) && orderingCache?.[index]) {
      setOrderingItems(orderingCache[index]);
    }
    if (isMatchingQuestion(q)) {
      setMatchingSelections({});
    }
  }, [index, orderingCache]);

  const handleNext = () => {
    if (answered) {
      if (index + 1 >= shuffledQuestions.length) {
        const correctCount = answers.filter((a, i) => isCorrectAnswer(shuffledQuestions[i], a)).length;
        const total = shuffledQuestions.length;
        const gradeRaw = 2 + (correctCount / total) * 4;
        const grade = Math.round(gradeRaw * 2) / 2;
        const gradeLabel =
          grade >= 5.5 ? 'Отличен' : grade >= 4.5 ? 'Много добър' : grade >= 3.5 ? 'Добър' : grade >= 2.5 ? 'Среден' : 'Слаб';
        setSummaryResult({ correctCount, total, grade, gradeLabel });
        setShowSummary(true);
        const points = `${correctCount}/${total}`;
        const assessment = `${grade} (${gradeLabel})`;
        const test = testId || title || '';
        (async () => {
          try {
            await addDoc(collection(db, 'results'), {
              name: userName.trim() || 'Анонимен',
              points,
              assessment,
              test,
              testTitle: testTitle || test,
              createdAt: serverTimestamp(),
            });
            setSummaryResult((prev) => (prev ? { ...prev, resultSaved: true } : null));
          } catch (err) {
            console.warn('Неуспешен запис на резултат:', err?.message);
          }
        })();
        return;
      }
      setIndex((i) => i + 1);
      setAnswered(false);
      setSelectedOption(null);
      setTypedAnswer('');
      return;
    }
    let valueToStore;
    if (isText) valueToStore = typedAnswer;
    else if (isMatching) {
      const leftLabels = qCurrent.pairs.map(([l]) => l);
      const rightLabels = matchingCache?.[index] ?? qCurrent.pairs.map(([, r]) => r);
      const pairs = leftLabels.map((left, i) => {
        const ri = matchingSelections[i];
        return ri != null ? [left, rightLabels[ri]] : null;
      });
      if (pairs.some((p) => p == null)) return;
      valueToStore = pairs;
    } else if (isOrdering) valueToStore = orderingItems;
    else valueToStore = selectedOption;

    if (isText && normalizeAnswer(typedAnswer) === '') return;
    if (!isText && !isMatching && !isOrdering && selectedOption == null) return;
    if (isOrdering && orderingItems.length !== (qCurrent?.items?.length ?? 0)) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = valueToStore;
      return next;
    });
    setAnswered(true);
    if (index + 1 >= shuffledQuestions.length) {
      document.querySelector('#quiz-next')?.focus();
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      const prevIdx = index - 1;
      setIndex(prevIdx);
      setAnswered(false);
      setSelectedOption(null);
      setTypedAnswer('');
      const prevQ = shuffledQuestions[prevIdx];
      if (isOrderingQuestion(prevQ) && orderingCache?.[prevIdx]) setOrderingItems(orderingCache[prevIdx]);
      if (isMatchingQuestion(prevQ)) setMatchingSelections({});
    }
  };

  const handleStart = () => {
    if (!userName.trim()) return;
    const orders = shuffledQuestions.map((q) => {
      if (isMatchingQuestion(q) || isOrderingQuestion(q)) return [];
      const optsForQ = (q?.options && q.options.length > 0) ? q.options : [q?.correct, q?.wrong1, q?.wrong2, q?.wrong3].filter(Boolean);
      const n = optsForQ.length;
      return n ? shuffle(Array.from({ length: n }, (_, i) => i)) : [];
    });
    setOptionOrders(orders);
    const matchCache = {};
    const orderCache = {};
    shuffledQuestions.forEach((q, i) => {
      if (isMatchingQuestion(q)) matchCache[i] = shuffle(q.pairs.map(([, r]) => r));
      if (isOrderingQuestion(q)) orderCache[i] = shuffle([...q.items]);
    });
    setMatchingCache(matchCache);
    setOrderingCache(orderCache);
    setStarted(true);
    const firstQ = shuffledQuestions[0];
    if (isOrderingQuestion(firstQ) && orderCache[0]) setOrderingItems(orderCache[0]);
  };

  if (!started) {
    return (
      <div className="max-w-xl mx-auto p-6 bg-white/80 rounded-xl border-2 border-[#1a3a52]/20">
        {title && (
          <h1 className="text-2xl font-bold text-[#1a3a52] mb-4">{title}</h1>
        )}
        <h2 className="text-xl font-semibold text-[#1a3a52] mb-4">Въведете вашето име</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value.trim())}
            placeholder="Име"
            className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1a3a52] focus:ring-2 focus:ring-[#1a3a52]/20"
            onKeyDown={(e) => e.key === 'Enter' && handleStart()}
          />
          <button
            type="button"
            onClick={handleStart}
            disabled={!userName.trim()}
            className="px-6 py-3 rounded-lg font-semibold bg-[#1a3a52] text-white hover:bg-[#244a62] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Започни теста
          </button>
        </div>
      </div>
    );
  }

  if (showSummary && summaryResult) {
    const { correctCount, total, grade, gradeLabel, resultSaved } = summaryResult;
    const percentRounded = Math.round((100 * correctCount) / total);
    const displayName = userName.trim() || 'Анонимен';
    const isExcellent = grade >= 5;
    return (
      <div className="mt-8 p-6 bg-white rounded-xl shadow-md max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#1a3a52] mb-4">Край на теста</h2>
        <p className="text-lg font-medium text-gray-700 mb-2">
          Верни отговори: {correctCount} от {total} ({percentRounded}%).
        </p>
        <p className="text-lg font-semibold text-[#1a3a52]">
          Оценка: <span className="text-2xl">{grade}</span> ({gradeLabel})
        </p>
        {isExcellent ? (
          <div className="flex justify-center my-4">
            <DotLottieReact
              src="https://lottie.host/c7773dc6-1d8c-4949-ad1c-a58479232a48/nyai3vgIb2.lottie"
              loop
              autoplay
              style={{ width: 120, height: 120 }}
            />
          </div>
        ) :
          <div className="flex justify-center my-4">
            <DotLottieReact
              src="https://lottie.host/48d3778f-60a4-44fc-b003-0e4abb8264b0/GARsHkTWnC.lottie"
              loop
              autoplay
              style={{ width: 120, height: 120 }}
            />
          </div>
        }
        <p className={`mt-4 text-xl font-semibold ${isExcellent ? 'text-amber-700' : 'text-[#1a3a52]'}`}>
          {isExcellent
            ? `Отличен резултат, ${displayName}! Гордея се с теб!`
            : `Браво, ${displayName}! Положи още малко за отлични резултати.`}
        </p>
        {resultSaved && (
          <p className="mt-4 text-sm text-gray-500">Резултатът е записан.</p>
        )}
      </div>
    );
  }

  const q = shuffledQuestions[index];
  if (!q) return null;

  const userAnswer = answers[index];
  const correctDisplay = getCorrectDisplay(q);
  const isUserCorrect = answered && isCorrectAnswer(q, userAnswer);

  const leftLabels = isMatching ? q.pairs.map(([l]) => l) : [];
  const rightLabels = (isMatching && matchingCache?.[index]) || (isMatching ? q.pairs.map(([, r]) => r) : []);

  return (
    <div id="quiz" className="max-w-xl mx-auto">
      <p className="text-lg font-semibold text-gray-800 mb-4 leading-snug">
        {index + 1}. {q.q}
      </p>
      {isText ? (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600 mb-1">Напишете отговора:</label>
          <input
            type="text"
            value={typedAnswer}
            onChange={(e) => setTypedAnswer(e.target.value)}
            disabled={answered}
            placeholder="..."
            className={`w-full px-4 py-3 rounded-lg border-2 text-gray-800 placeholder-gray-400 ${
              answered
                ? isUserCorrect
                  ? 'border-green-500 bg-green-50'
                  : 'border-red-400 bg-red-50'
                : 'border-gray-200 bg-white focus:border-[#1a3a52] focus:ring-2 focus:ring-[#1a3a52]/20'
            }`}
          />
        </div>
      ) : isMatching ? (
        <div className="space-y-3">
          <p className="text-sm text-gray-600 mb-2">Свържи всяка позиция отляво с подходящата отдясно.</p>
          <div className="flex flex-col gap-2">
            {leftLabels.map((left, i) => (
              <div key={i} className="flex flex-wrap items-center gap-2">
                <span className="font-medium text-gray-800 min-w-[120px]">{left}</span>
                <span className="text-gray-400">→</span>
                <select
                  value={matchingSelections[i] ?? ''}
                  onChange={(e) => setMatchingSelections((prev) => ({ ...prev, [i]: Number(e.target.value) }))}
                  disabled={answered}
                  className={`flex-1 min-w-[200px] px-3 py-2 rounded-lg border-2 ${
                    answered
                      ? isUserCorrect
                        ? 'border-green-500 bg-green-50'
                        : 'border-red-400 bg-red-50'
                      : 'border-gray-200 focus:border-[#1a3a52]'
                  }`}
                >
                  <option value="">— избери —</option>
                  {rightLabels.map((right, j) => {
                    const usedElsewhere = Object.entries(matchingSelections).some(([k, v]) => Number(k) !== i && v === j);
                    return (
                      <option key={j} value={j} disabled={usedElsewhere && (matchingSelections[i] !== j)}>
                        {right}
                      </option>
                    );
                  })}
                </select>
              </div>
            ))}
          </div>
        </div>
      ) : isOrdering ? (
        <div className="space-y-2">
          <p className="text-sm text-gray-600 mb-2">Подреди отгоре надолу (първо най-ранното).</p>
          <ul className="space-y-2">
            {orderingItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#1a3a52]/10 text-[#1a3a52] font-semibold text-sm">
                  {i + 1}
                </span>
                <span className="flex-1 px-3 py-2 rounded-lg border-2 border-gray-200 bg-white">{item}</span>
                {!answered && (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        if (i === 0) return;
                        setOrderingItems((prev) => {
                          const next = [...prev];
                          [next[i - 1], next[i]] = [next[i], next[i - 1]];
                          return next;
                        });
                      }}
                      disabled={i === 0}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                      aria-label="Нагоре"
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (i === orderingItems.length - 1) return;
                        setOrderingItems((prev) => {
                          const next = [...prev];
                          [next[i], next[i + 1]] = [next[i + 1], next[i]];
                          return next;
                        });
                      }}
                      disabled={i === orderingItems.length - 1}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                      aria-label="Надолу"
                    >
                      ↓
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {orderedOpts.map((text, i) => {
            const isCorrect = text === q.correct;
            const isWrong = answered && text !== q.correct && userAnswer === text;
            const showCorrect = answered && isCorrect;
            const showWrong = answered && isWrong;
            return (
              <label
                key={i}
                className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                  showCorrect
                    ? 'border-green-500 bg-green-50'
                    : showWrong
                      ? 'border-red-400 bg-red-50'
                      : 'border-gray-200 bg-white hover:border-[#1a3a52] hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name={`opt-${index}`}
                  value={text}
                  checked={selectedOption === text}
                  onChange={() => setSelectedOption(text)}
                  disabled={answered}
                  className="mt-1 flex-shrink-0"
                />
                <span>{text}</span>
              </label>
            );
          })}
        </div>
      )}
      {answered && (
        <div
          className={`mt-4 p-4 rounded-lg font-medium ${
            isUserCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {isUserCorrect
            ? 'Верен отговор.'
            : `Грешен отговор. Верен: ${correctDisplay}`}
        </div>
      )}
      <div className="flex justify-between items-center flex-wrap gap-3 mt-6">
        <button
          type="button"
          onClick={handlePrev}
          className="px-4 py-2 rounded-lg font-semibold border-2 border-[#1a3a52] text-[#1a3a52] bg-white hover:bg-gray-50"
          style={{ visibility: index === 0 ? 'hidden' : 'visible' }}
        >
          ← Предишен
        </button>
        <span className="font-semibold text-[#1a3a52]">
          Въпрос {index + 1} от {shuffledQuestions.length}
        </span>
        <button
          id="quiz-next"
          type="button"
          onClick={handleNext}
          className="px-4 py-2 rounded-lg font-semibold bg-[#1a3a52] text-white hover:bg-[#244a62]"
        >
          {answered
            ? index + 1 >= shuffledQuestions.length
              ? 'Край на теста'
              : 'Напред →'
            : 'Отговор и напред →'}
        </button>
      </div>
    </div>
  );
}
