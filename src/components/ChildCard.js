import Link from 'next/link';

export default function ChildCard({ child }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-108 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
        {child.avatar ? (
          <img 
            src={child.avatar} 
            alt={child.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-6xl">👤</span>
        )}
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          {child.name}
        </h4>
        {child.age && (
          <p className="text-sm text-gray-500 mb-2">
            {child.age} години
          </p>
        )}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {child.shortBio || child.bio || "Младо талантливо дете с уникални творчески способности."}
        </p>
        <Link 
          href={`/children/${child.slug || child.name.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Виж повече →
        </Link>
      </div>
    </div>
  );
}
