import About from '@/components/About';
import ChildrenPreview from '@/components/ChildrenPreview';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { getAllChildren } from '@/data/children';

export default function Home() {
  const children = getAllChildren();
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <About />
        <ChildrenPreview children={children} />
        <Features />
      </main>

      <Footer />
    </div>
  );
}
