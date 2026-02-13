export default function Features() {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
      <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Какво включва всяка секция
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-6">
          <div className="text-5xl mb-4">👤</div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Представяне
          </h4>
          <p className="text-gray-600">
            Всяко дете има своя страница с кратко представяне и информация за него
          </p>
        </div>
        <div className="text-center p-6">
          <div className="text-5xl mb-4">🎬</div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Видео
          </h4>
          <p className="text-gray-600">
            Кратки видеа, които показват творческия процес и работата на детето
          </p>
        </div>
        <div className="text-center p-6">
          <div className="text-5xl mb-4">🖼️</div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Творби
          </h4>
          <p className="text-gray-600">
            Галерия с всички творби и произведения на детето
          </p>
        </div>
      </div>
    </div>
  );
}
