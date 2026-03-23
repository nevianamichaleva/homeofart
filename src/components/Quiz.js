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

/** Кратък текст на дадения от потребителя отговор за резюмето. */
function formatUserAnswerDisplay(question, userAnswer) {
  if (userAnswer == null || userAnswer === '') return '—';
  if (isTextQuestion(question)) return String(userAnswer);
  if (isMatchingQuestion(question)) {
    if (!Array.isArray(userAnswer)) return '—';
    return userAnswer.map(([a, b]) => `${a} → ${b}`).join('; ');
  }
  if (isOrderingQuestion(question)) {
    if (!Array.isArray(userAnswer)) return '—';
    return userAnswer.map((item, i) => `${i + 1}. ${item}`).join(' ');
  }
  return String(userAnswer);
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
  const [showSummary, setShowSummary] = useState(false);
  /** При показване на обобщение: { correctCount, total, grade, gradeLabel, resultSaved?, perQuestion } */
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
    const saved = answers[index];

    if (isTextQuestion(q)) {
      setTypedAnswer(typeof saved === 'string' ? saved : '');
      setSelectedOption(null);
      return;
    }
    if (isMatchingQuestion(q)) {
      setTypedAnswer('');
      setSelectedOption(null);
      const rightLabels = matchingCache?.[index] ?? q.pairs.map(([, r]) => r);
      const leftLabels = q.pairs.map(([l]) => l);
      if (Array.isArray(saved) && saved.length > 0) {
        const sel = {};
        leftLabels.forEach((left, i) => {
          const pair = saved.find(([l]) => l === left);
          if (pair) {
            const ri = rightLabels.indexOf(pair[1]);
            if (ri >= 0) sel[i] = ri;
          }
        });
        setMatchingSelections(sel);
      } else {
        setMatchingSelections({});
      }
      return;
    }
    if (isOrderingQuestion(q)) {
      setTypedAnswer('');
      setSelectedOption(null);
      if (orderingCache?.[index]) {
        setOrderingItems(
          Array.isArray(saved) && saved.length === q.items.length ? saved : orderingCache[index],
        );
      }
      return;
    }
    setTypedAnswer('');
    setSelectedOption(saved ?? null);
  }, [index, orderingCache, matchingCache, shuffledQuestions, answers]);

  const finishTest = (finalAnswers) => {
    const correctCount = finalAnswers.filter((a, i) => isCorrectAnswer(shuffledQuestions[i], a)).length;
    const total = shuffledQuestions.length;
    const gradeRaw = 2 + (correctCount / total) * 4;
    const grade = Math.round(gradeRaw * 2) / 2;
    const gradeLabel =
      grade >= 5.5 ? 'Отличен' : grade >= 4.5 ? 'Много добър' : grade >= 3.5 ? 'Добър' : grade >= 2.5 ? 'Среден' : 'Слаб';
    const perQuestion = shuffledQuestions.map((question, i) => {
      const ua = finalAnswers[i];
      const ok = isCorrectAnswer(question, ua);
      return {
        n: i + 1,
        questionText: question.q,
        userDisplay: formatUserAnswerDisplay(question, ua),
        correctDisplay: getCorrectDisplay(question),
        ok,
      };
    });
    setSummaryResult({ correctCount, total, grade, gradeLabel, perQuestion });
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
  };

  const handleNext = () => {
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

    const nextAnswers = [...answers];
    nextAnswers[index] = valueToStore;
    setAnswers(nextAnswers);

    if (index + 1 >= shuffledQuestions.length) {
      finishTest(nextAnswers);
      return;
    }
    setIndex((i) => i + 1);
    setSelectedOption(null);
    setTypedAnswer('');
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
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
    const { correctCount, total, grade, gradeLabel, resultSaved, perQuestion } = summaryResult;
    const percentRounded = Math.round((100 * correctCount) / total);
    const displayName = userName.trim() || 'Анонимен';
    const isExcellent = grade >= 5;
    return (
      <div className="mt-8 p-6 bg-white rounded-xl shadow-md max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#1a3a52] mb-4">Край на теста</h2>
        <p className="text-lg font-medium text-gray-700 mb-2">
          Верни отговори: {correctCount} от {total} ({percentRounded}%).
        </p>
        <p className="text-lg font-semibold text-[#1a3a52] mb-6">
          Оценка: <span className="text-2xl">{grade}</span> ({gradeLabel})
        </p>
        {Array.isArray(perQuestion) && perQuestion.length > 0 && (
          <div className="mb-6 border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Преглед по въпроси</h3>
            <ul className="space-y-4 max-h-[min(60vh,28rem)] overflow-y-auto pr-1">
              {perQuestion.map((row) => (
                <li
                  key={row.n}
                  className={`rounded-lg border-2 p-3 text-sm ${
                    row.ok ? 'border-green-200 bg-green-50/80' : 'border-red-200 bg-red-50/80'
                  }`}
                >
                  <p className="font-semibold text-gray-900 mb-1">
                    {row.n}. {row.questionText}{' '}
                    <span className={row.ok ? 'text-green-700' : 'text-red-700'}>
                      ({row.ok ? 'верен' : 'грешен'})
                    </span>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium text-gray-600">Ваш отговор:</span> {row.userDisplay}
                  </p>
                  {!row.ok && (
                    <p className="text-gray-800 mt-1">
                      <span className="font-medium text-gray-600">Верен отговор:</span> {row.correctDisplay}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
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
            placeholder="..."
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:border-[#1a3a52] focus:ring-2 focus:ring-[#1a3a52]/20"
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
                  className="flex-1 min-w-[200px] px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[#1a3a52]"
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
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {orderedOpts.map((text, i) => (
            <label
              key={i}
              className="flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors border-gray-200 bg-white hover:border-[#1a3a52] hover:bg-gray-50"
            >
              <input
                type="radio"
                name={`opt-${index}`}
                value={text}
                checked={selectedOption === text}
                onChange={() => setSelectedOption(text)}
                className="mt-1 flex-shrink-0"
              />
              <span>{text}</span>
            </label>
          ))}
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
          {index + 1 >= shuffledQuestions.length ? 'Завърши теста' : 'Напред →'}
        </button>
      </div>
    </div>
  );
}
