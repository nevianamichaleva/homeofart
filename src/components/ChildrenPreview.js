import ChildCard from './ChildCard';

export default function ChildrenPreview({ children }) {
  return (
    <div className="mb-12">
      <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Нашите млади артисти
      </h3>
      {children.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {children.map((child) => (
            <ChildCard key={child.id} child={child} />
          ))}
        </div>
      ) : (
        <div className="bg-white/60 rounded-xl shadow-md overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
          <p className="text-gray-500 text-center p-6">
            Добавете информация за децата в src/data/children.js
          </p>
        </div>
      )}
    </div>
  );
}
