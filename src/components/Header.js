'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isTestSection = pathname?.startsWith('/test-pilot') ?? false;

  const brandTitle = isTestSection ? 'Test Pilot' : 'Дом на изкуството';
  const brandLogo = isTestSection ? '/test-pilot.png' : '/images/homeofart-logo.png';
  const brandHref = isTestSection ? '/test-pilot' : '/';

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href={brandHref} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <Image 
            src={brandLogo} 
            alt={brandTitle} 
            width={60} 
            height={60}
            className="object-contain"
          />
          <h1 className="text-3xl font-bold text-gray-800">{brandTitle}</h1>
        </Link>
        <nav className="flex items-center gap-6">
          {pathname !== '/' && (
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Дом на изкуството
            </Link>
          )}
          {!isTestSection && (
            <Link href="/test-pilot" className="text-gray-700 hover:text-gray-900 font-medium">
              Тестове
            </Link>
          )}
          {pathname !== '/test-pilot/7-nvo' && (
            <Link href="/test-pilot/7-nvo" className="text-gray-700 hover:text-gray-900 font-medium">
              7. клас НВО
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
