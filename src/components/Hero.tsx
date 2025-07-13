
import { ArrowRight, Download, ExternalLink, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleInstallClick = () => {
    window.open('https://www.nuget.org/packages/HubDocs', '_blank');
  };

  const handleViewDemoClick = () => {
    window.open('https://github.com/mberrishdev/HubDocs#-live-demo', '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pt-20 pb-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-blue-400 text-sm font-medium">🧭</span>
            <span className="text-gray-300 text-sm">Developer-Friendly SignalR Documentation</span>
            <div className="flex items-center space-x-1 ml-4 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
              <Tag className="h-3 w-3 text-green-400" />
              <span className="text-green-400 text-xs font-medium">v1.0.0</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            HubDocs
            <span className="block text-3xl md:text-4xl font-normal text-gray-300 mt-4">
              Swagger for SignalR Hubs
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Auto-discover your hubs, explore methods, invoke calls, and preview live client messages. 
            The developer-friendly UI tool that makes SignalR development a breeze.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              onClick={handleInstallClick}
            >
              <Download className="h-5 w-5 mr-2" />
              Install via NuGet
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-600 hover:bg-gray-800 px-8 py-4 text-lg"
              onClick={handleViewDemoClick}
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              View Demo
            </Button>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 max-w-2xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm">Terminal</span>
            </div>
            <code className="text-green-400 text-lg">dotnet add package HubDocs</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
