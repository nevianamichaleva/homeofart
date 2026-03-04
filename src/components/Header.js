import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <Image 
            src="/images/homeofart-logo.png" 
            alt="Дом на изкуството" 
            width={60} 
            height={60}
            className="object-contain"
          />
          <h1 className="text-3xl font-bold text-gray-800">Дом на изкуството</h1>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
            Начало
          </Link>
          <Link href="/testove" className="text-gray-700 hover:text-gray-900 font-medium">
            Тестове
          </Link>
        </nav>
      </div>
    </header>
  );
}
