import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllTests } from '@/data/tests';
import Link from 'next/link';

const SUBJECT_LABELS = {
  english: 'Английски език',
  geografia: 'География',
  istoriya: 'История',
  matematika: 'Математика',
  bg: 'Български език',
};

/** Ред на предметите: първо English, после География, после История, останалите по азбучен ред. */
const SUBJECT_ORDER = ['english', 'geografia', 'istoriya'];

export default function TestovePage() {
  const tests = getAllTests();

  const bySubject = tests.reduce((acc, t) => {
    if (!acc[t.subject]) acc[t.subject] = [];
    acc[t.subject].push(t);
    return acc;
  }, {});

  const sortedSubjects = [
    ...SUBJECT_ORDER.filter((s) => bySubject[s]?.length),
    ...Object.keys(bySubject).filter((s) => !SUBJECT_ORDER.includes(s)).sort(),
  ];

  const getClassesInSubject = (subjectTests) => {
    const byClass = subjectTests.reduce((acc, t) => {
      if (!acc[t.classNum]) acc[t.classNum] = [];
      acc[t.classNum].push(t);
      return acc;
    }, {});
    return Object.keys(byClass).sort((a, b) => Number(a) - Number(b));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex flex-col">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Тестове</h1>
        <p className="text-gray-600 mb-8">
          Изберете предмет, клас и тест, за да започнете.
        </p>

        {tests.length === 0 ? (
          <p className="text-gray-600">Няма налични тестове.</p>
        ) : (
          <div className="space-y-10">
            {sortedSubjects.map((subject) => {
              const subjectTests = bySubject[subject];
              const sortedClasses = getClassesInSubject(subjectTests);
              return (
                <section key={subject} className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-[#1a3a52] mb-4 border-b border-[#1a3a52]/20 pb-2">
                    {SUBJECT_LABELS[subject] ?? subject}
                  </h2>
                  <div className="space-y-6">
                    {sortedClasses.map((classNum) => {
                      const classTests = subjectTests.filter((t) => t.classNum === classNum);
                      return (
                        <div key={`${subject}-${classNum}`}>
                          <h3 className="text-lg font-medium text-gray-700 mb-3">
                            {classNum}. клас
                          </h3>
                          <ul className="space-y-2">
                            {classTests.map((test) => (
                              <li key={`${test.classNum}|${test.subject}|${test.slug}`}>
                                <Link
                                  href={`/testove/${test.classNum}/${test.subject}/${test.slug}`}
                                  className="flex items-center justify-between p-3 rounded-xl border-2 border-gray-200 bg-white hover:border-[#1a3a52] hover:bg-gray-50 transition-colors group"
                                >
                                  <span className="font-medium text-gray-800 group-hover:text-[#1a3a52]">
                                    {test.title}
                                  </span>
                                  <span className="text-sm text-gray-500 flex-shrink-0 ml-2">
                                    {test.questionCount} въпроса
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
