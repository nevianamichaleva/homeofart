export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Дом на изкуството. Всички права запазени.
          </p>
          <div className="text-right">
            <p className="text-sm mb-1">За връзка и заявка на интерес: </p>
            <a 
              href="mailto:homeofart@gmail.com"
              className="text-purple-600 hover:text-purple-700 underline font-medium"
            >
              homeofart@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
