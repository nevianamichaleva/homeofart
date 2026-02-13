'use client';

import { useEffect } from 'react';

export default function ArtworkModal({ artwork, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !artwork) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl max-h-[95vh] w-full bg-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
          aria-label="Затвори"
        >
          <svg 
            className="w-6 h-6 text-gray-800" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full bg-gray-100 flex items-center justify-center min-h-[50vh]">
          {artwork.image ? (
            <img 
              src={artwork.image} 
              alt={artwork.title}
              className="max-h-[90vh] max-w-full w-auto object-contain"
            />
          ) : (
            <div className="h-96 flex items-center justify-center">
              <span className="text-8xl">🖼️</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
