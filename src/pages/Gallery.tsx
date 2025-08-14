import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import LibraryBanner from '../images/Library_Banner.jpeg';
import ComfortableChair from '../images/11zon_comfortable_chair.jpeg';
import LibraryArea from '../images/library_area.jpeg';
import ChargingPoints from '../images/11zon_charging_points.jpg';
import CalmAtmosphere from '../images/calm_atmosphere.jpg';
import TableLight from '../images/tablelight_withextraspace.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Real library photos
  const images = [
    {
      id: 1,
      src: LibraryBanner,
      alt: 'Library Banner - Main Entrance',
      category: 'Facilities'
    },
    {
      id: 2,
      src: ComfortableChair,
      alt: 'Comfortable Study Chairs',
      category: 'Study Areas'
    },
    {
      id: 3,
      src: LibraryArea,
      alt: 'Main Library Study Area',
      category: 'Study Areas'
    },
    {
      id: 4,
      src: ChargingPoints,
      alt: 'Charging Points for Devices',
      category: 'Facilities'
    },
    {
      id: 5,
      src: CalmAtmosphere,
      alt: 'Calm and Peaceful Atmosphere',
      category: 'Environment'
    },
    {
      id: 6,
      src: TableLight,
      alt: 'Well-Lit Study Tables with Extra Space',
      category: 'Study Areas'
    }
  ];

  const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Photo Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Take a virtual tour of our modern, clean, and comfortable study environment
          </p>
        </div>
      </section>

      {/* 360° Virtual Tour */}
      <section className="py-16 bg-gradient-to-br from-white via-primary-50 to-secondary-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
              360° Virtual Tour
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Experience our library from the comfort of your home
            </p>
          </div>
          
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-primary-100 dark:border-gray-700">
            <div className="aspect-video">
              <iframe 
                //src="https://www.google.com/maps/embed?pb=!4v1690829831926!6m8!1m7!1sCAoSLEFGMVFpcE9yU3NPY3pSQnp0SWRLUk9hWXlvZTUxVnZibHRXcVJiVWtGWmdq!2m2!1d22.6013!2d75.3006!3f0!4f0!5f0.7820865974627469"
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">360° View</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
              Library Photos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Browse through our facilities and study areas
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 dark:hover:from-primary-900 dark:hover:to-secondary-900 hover:text-primary-600 dark:hover:text-primary-400 border border-primary-100 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-primary-100 dark:border-gray-600"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="text-white text-center">
                    <Eye className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-medium text-sm">{image.alt}</p>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  <span className="text-xs font-medium text-gray-800 dark:text-gray-200">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors shadow-lg"
            >
              <X size={24} />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <p className="text-sm font-medium text-gray-900">
                {filteredImages[selectedImage].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;