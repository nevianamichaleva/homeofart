'use client';

import { useState } from 'react';
import ArtworkModal from './ArtworkModal';

export default function ArtworkCard({ artwork }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div 
          className="h-64 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center relative cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
        >
          {artwork.image ? (
            <>
              <img 
                src={artwork.image} 
                alt={artwork.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                  <svg 
                    className="w-8 h-8 text-gray-800" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
                    />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <span className="text-6xl">🖼️</span>
          )}
        </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800 flex-1">
            {artwork.title}
          </h3>
          {artwork.code && (
            <span className="ml-2 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-mono font-semibold rounded-full border border-purple-300 whitespace-nowrap">
              {artwork.code}
            </span>
          )}
        </div>
        {artwork.year && (
          <p className="text-sm text-gray-500 mb-2">
            {artwork.year}
          </p>
        )}
        {artwork.description && (
          <p className="text-gray-600 mb-3">
            {artwork.description}
          </p>
        )}
        {artwork.code && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              <span className="font-semibold">Код за запитване:</span>{' '}
              <span className="font-mono text-purple-600">{artwork.code}</span>
            </p>
          </div>
        )}
      </div>
      </div>
      
      <ArtworkModal 
        artwork={artwork} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
