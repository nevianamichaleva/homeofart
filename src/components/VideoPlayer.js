export default function VideoPlayer({ videoUrl, title = "Видео представяне" }) {
  if (!videoUrl) return null;

  // Check if it's a YouTube URL
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  // Check if it's a Vimeo URL
  const isVimeo = videoUrl.includes('vimeo.com');

  const getEmbedUrl = () => {
    if (isYouTube) {
      const videoId = videoUrl.includes('youtu.be') 
        ? videoUrl.split('youtu.be/')[1].split('?')[0]
        : videoUrl.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (isVimeo) {
      const videoId = videoUrl.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return videoUrl; // Assume it's a direct video URL
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        {title}
      </h2>
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
        {(isYouTube || isVimeo) ? (
          <iframe
            src={getEmbedUrl()}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        ) : (
          <video 
            src={videoUrl} 
            controls 
            className="w-full h-full"
          >
            Вашият браузър не поддържа видео таговете.
          </video>
        )}
      </div>
    </div>
  );
}
