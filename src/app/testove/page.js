import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllTests } from '@/data/tests';
import Link from 'next/link';

const SUBJECT_LABELS = {
  geografia: 'География',
  matematika: 'Математика',
  istoriya: 'История',
  bg: 'Български език',
  // добави други предмети при нужда
};

export default function TestovePage() {
  const tests = getAllTests();

  const byClass = tests.reduce((acc, t) => {
    if (!acc[t.classNum]) acc[t.classNum] = [];
    acc[t.classNum].push(t);
    return acc;
  }, {});

  const sortedClasses = Object.keys(byClass).sort((a, b) => Number(a) - Number(b));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex flex-col">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Тестове</h1>
        <p className="text-gray-600 mb-8">
          Изберете клас и тест, за да започнете.
        </p>

        {tests.length === 0 ? (
          <p className="text-gray-600">Няма налични тестове.</p>
        ) : (
          <div className="space-y-10">
            {sortedClasses.map((classNum) => (
              <section key={classNum} className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-[#1a3a52] mb-4">
                  {classNum}. клас
                </h2>
                <ul className="space-y-3">
                  {byClass[classNum].map((test) => (
                    <li key={`${test.classNum}|${test.subject}|${test.slug}`}>
                      <Link
                        href={`/testove/${test.classNum}/${test.subject}/${test.slug}`}
                        className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 bg-white hover:border-[#1a3a52] hover:bg-gray-50 transition-colors group"
                      >
                        <div>
                          <span className="font-medium text-gray-800 group-hover:text-[#1a3a52]">
                            {test.title}
                          </span>
                          <span className="ml-2 text-sm text-gray-500">
                            ({SUBJECT_LABELS[test.subject] ?? test.subject})
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 flex-shrink-0 ml-2">
                          {test.questionCount} въпроса
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
