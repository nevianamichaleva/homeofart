'use client';

import { useState } from 'react';

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
  return userAnswer === question.correct;
}

/** Верен отговор за показване (при текст въпрос – основният вариант). */
function getCorrectDisplay(question) {
  if (question.acceptedAnswers && question.acceptedAnswers.length > 0) {
    return question.acceptedAnswers[0];
  }
  return question.correct;
}

export default function Quiz({ title, questions }) {
  /** Разбъркан ред на въпросите – фиксиран при стартиране на теста */
  const [shuffledQuestions] = useState(() => shuffle([...questions]));
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [optionOrder, setOptionOrder] = useState(() => shuffle([0, 1, 2]));
  const [answered, setAnswered] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  /** Избраният отговор за текущия въпрос (null = нищо не е избрано) */
  const [selectedOption, setSelectedOption] = useState(null);
  /** За въпроси тип "текст" – написаният отговор */
  const [typedAnswer, setTypedAnswer] = useState('');

  const qCurrent = shuffledQuestions[index];
  const opts = [
    qCurrent?.correct,
    qCurrent?.wrong1,
    qCurrent?.wrong2,
  ].filter(Boolean);
  const orderedOpts = optionOrder.map((i) => opts[i]).filter((_, i) => opts[i] != null);
  const isText = isTextQuestion(qCurrent);

  const handleNext = () => {
    if (answered) {
      if (index + 1 >= shuffledQuestions.length) {
        setShowSummary(true);
        return;
      }
      setIndex((i) => i + 1);
      setOptionOrder(shuffle([0, 1, 2]));
      setAnswered(false);
      setSelectedOption(null);
      setTypedAnswer('');
      return;
    }
    const valueToStore = isText ? typedAnswer : selectedOption;
    if (isText && normalizeAnswer(typedAnswer) === '') return;
    if (!isText && selectedOption == null) return;
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
      setIndex((i) => i - 1);
      setAnswered(false);
      setOptionOrder(shuffle([0, 1, 2]));
      setSelectedOption(null);
      setTypedAnswer('');
    }
  };

  if (showSummary) {
    const correctCount = answers.filter((a, i) => isCorrectAnswer(shuffledQuestions[i], a)).length;
    const percent = (100 * correctCount) / shuffledQuestions.length;
    const percentRounded = Math.round(percent);
    // Оценка 2–6: 2 + (верни/общо) * 4, закръглена до 0.5
    const gradeRaw = 2 + (correctCount / shuffledQuestions.length) * 4;
    const grade = Math.round(gradeRaw * 2) / 2;
    const gradeLabel =
      grade >= 5.5 ? 'Отличен' : grade >= 4.5 ? 'Много добър' : grade >= 3.5 ? 'Добър' : grade >= 2.5 ? 'Среден' : 'Слаб';
    return (
      <div className="mt-8 p-6 bg-white rounded-xl shadow-md max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#1a3a52] mb-4">Край на теста</h2>
        <p className="text-lg font-medium text-gray-700 mb-2">
          Верни отговори: {correctCount} от {shuffledQuestions.length} ({percentRounded}%).
        </p>
        <p className="text-lg font-semibold text-[#1a3a52]">
          Оценка: <span className="text-2xl">{grade}</span> ({gradeLabel})
        </p>
      </div>
    );
  }

  const q = shuffledQuestions[index];
  if (!q) return null;

  const userAnswer = answers[index];
  const correctDisplay = getCorrectDisplay(q);
  const isUserCorrect = answered && isCorrectAnswer(q, userAnswer);

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
