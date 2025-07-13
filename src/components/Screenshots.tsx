
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const screenshots = [
  {
    url: "https://raw.githubusercontent.com/mberrishdev/HubDocs/main/docs/screenshots/screenshot1.png",
    title: "SignalR Hub List",
    description: "📌 Comprehensive overview of all your registered SignalR hubs"
  },
  {
    url: "https://raw.githubusercontent.com/mberrishdev/HubDocs/main/docs/screenshots/screenshot2.png",
    title: "Interactive Method Testing",
    description: "🔍 Interactive method parameter inputs with \"Try it\" support"
  },
  {
    url: "https://raw.githubusercontent.com/mberrishdev/HubDocs/main/docs/screenshots/screenshot4.png",
    title: "Live Client Logging",
    description: "📡 Live client method logging with JSON preview"
  },
  {
    url: "https://raw.githubusercontent.com/mberrishdev/HubDocs/main/docs/screenshots/screenshot3.png",
    title: "Helpful Guidance",
    description: "📭 Clear instructions when hubs are registered without routes"
  }
];

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the beautiful interface and powerful features that make SignalR development enjoyable.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden">
            <div className="flex items-center space-x-2 p-4 border-b border-gray-700">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm ml-4">HubDocs - {screenshots[currentIndex].title}</span>
            </div>
            
            <div className="relative">
              <img
                src={screenshots[currentIndex].url}
                alt={screenshots[currentIndex].title}
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23374151"/><text x="400" y="300" text-anchor="middle" fill="%23D1D5DB" font-size="24" font-family="sans-serif">Screenshot Preview</text></svg>';
                }}
              />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full p-2"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full p-2"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="p-6 bg-gray-800/30">
              <h3 className="text-lg font-semibold text-white mb-2">
                {screenshots[currentIndex].title}
              </h3>
              <p className="text-gray-300">{screenshots[currentIndex].description}</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
