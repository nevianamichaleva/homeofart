export default function About() {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 mb-12">
      <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Когато детето твори, светът става по-добър
      </h3>
      <div className="grid md:grid-cols-2 gap-8 text-gray-700">
        <div>
          <h4 className="text-xl font-semibold mb-4 text-purple-700">
            💛 Изкуство с мисия
          </h4>
          <div className="space-y-4 leading-relaxed">
            <p className="text-gray-700">
              Всяка творба в „Дом на изкуството" може да бъде закупена.
            </p>
            <p className="text-gray-700">
              С покупката си не просто подкрепяте млад талант – вие ставате част от добра кауза.
            </p>
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-gray-800 font-medium mb-2">Разпределение на средствата:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• <span className="font-semibold">70%</span> – за благотворителни инициативи</li>
                <li>• <span className="font-semibold">30%</span> – при малкия художник</li>
              </ul>
            </div>
            <p className="text-gray-700 italic">
              Така всяка картина носи двойна светлина – тази на детското творчество и тази на доброто.
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-pink-700">
            ✨ Какво ще намерите
          </h4>
          <div className="space-y-4 leading-relaxed">
            <p className="text-gray-700">
              Всяко дете има своя собствена страница – малка лична галерия.
            </p>
            <p className="text-gray-700">
              Там ще намерите неговите творби, кратко представяне и моменти от творческия процес – защото зад всяка картина стои история.
            </p>
            <p className="text-gray-700 font-medium">
              Това е място за вдъхновение, подкрепа и вяра в детския талант.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
