import ArtworkCard from '@/components/ArtworkCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import VideoPlayer from '@/components/VideoPlayer';
import { getChildBySlug } from '@/data/children';
import Link from 'next/link';

export default async function ChildPage({ params }) {
  const resolvedParams = await params;
  const childSlug = decodeURIComponent(resolvedParams.name || '');
  const childData = getChildBySlug(childSlug);

  // If child not found, show 404
  if (!childData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Дете с това име не е намерено</p>
          <Link 
            href="/"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Обратно към началната страница
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Child Profile Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0 overflow-hidden">
              {childData.avatar ? (
                <img 
                  src={childData.avatar} 
                  alt={childData.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-8xl">👤</span>
              )}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {childData.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Възраст: {childData.age} години
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {childData.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        {childData.videoUrl && (
          <div className="mb-12">
            <VideoPlayer videoUrl={childData.videoUrl} />
          </div>
        )}

        {/* Artworks Gallery */}
        {childData.artworks && childData.artworks.length > 0 && (
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Творби
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {childData.artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
