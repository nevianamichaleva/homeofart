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

export default function Quiz({ title, questions }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [optionOrder, setOptionOrder] = useState(() => shuffle([0, 1, 2]));
  const [answered, setAnswered] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const opts = [questions[index]?.correct, questions[index]?.wrong1, questions[index]?.wrong2];
  const orderedOpts = optionOrder.map((i) => opts[i]);

  const handleNext = () => {
    if (answered) {
      if (index + 1 >= questions.length) {
        setShowSummary(true);
        return;
      }
      setIndex((i) => i + 1);
      const nextQ = questions[index + 1];
      const nextOpts = [nextQ.correct, nextQ.wrong1, nextQ.wrong2];
      setOptionOrder(shuffle([0, 1, 2]));
      setAnswered(false);
      return;
    }
    const selected = document.querySelector('input[name="opt"]:checked');
    if (!selected) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = selected.value;
      return next;
    });
    setAnswered(true);
    if (index + 1 >= questions.length) {
      document.querySelector('#quiz-next')?.focus();
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
      setAnswered(false);
      setOptionOrder(shuffle([0, 1, 2]));
    }
  };

  if (showSummary) {
    const correctCount = answers.filter((a, i) => a === questions[i].correct).length;
    const percent = (100 * correctCount) / questions.length;
    const percentRounded = Math.round(percent);
    // Оценка 2–6: 2 + (верни/общо) * 4, закръглена до 0.5
    const gradeRaw = 2 + (correctCount / questions.length) * 4;
    const grade = Math.round(gradeRaw * 2) / 2;
    const gradeLabel =
      grade >= 5.5 ? 'Отличен' : grade >= 4.5 ? 'Много добър' : grade >= 3.5 ? 'Добър' : grade >= 2.5 ? 'Среден' : 'Слаб';
    return (
      <div className="mt-8 p-6 bg-white rounded-xl shadow-md max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#1a3a52] mb-4">Край на теста</h2>
        <p className="text-lg font-medium text-gray-700 mb-2">
          Верни отговори: {correctCount} от {questions.length} ({percentRounded}%).
        </p>
        <p className="text-lg font-semibold text-[#1a3a52]">
          Оценка: <span className="text-2xl">{grade}</span> ({gradeLabel})
        </p>
      </div>
    );
  }

  const q = questions[index];
  if (!q) return null;

  return (
    <div id="quiz" className="max-w-xl mx-auto">
      <p className="text-lg font-semibold text-gray-800 mb-4 leading-snug">
        {index + 1}. {q.q}
      </p>
      <div className="flex flex-col gap-2">
        {orderedOpts.map((text, i) => {
          const isCorrect = text === q.correct;
          const isWrong = answered && text !== q.correct && answers[index] === text;
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
                name="opt"
                value={text}
                disabled={answered}
                className="mt-1 flex-shrink-0"
              />
              <span>{text}</span>
            </label>
          );
        })}
      </div>
      {answered && (
        <div
          className={`mt-4 p-4 rounded-lg font-medium ${
            answers[index] === q.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {answers[index] === q.correct
            ? 'Верен отговор.'
            : `Грешен отговор. Верен: ${q.correct}`}
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
          Въпрос {index + 1} от {questions.length}
        </span>
        <button
          id="quiz-next"
          type="button"
          onClick={handleNext}
          className="px-4 py-2 rounded-lg font-semibold bg-[#1a3a52] text-white hover:bg-[#244a62]"
        >
          {answered
            ? index + 1 >= questions.length
              ? 'Край на теста'
              : 'Напред →'
            : 'Отговор и напред →'}
        </button>
      </div>
    </div>
  );
}
