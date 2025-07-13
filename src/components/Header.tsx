
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/mberrishdev/HubDocs', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">HD</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">HubDocs</h1>
              <p className="text-xs text-gray-400">SignalR Documentation Tool</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-gray-300">
                <Star className="h-4 w-4" />
                <span>GitHub stars</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-300">
                <GitFork className="h-4 w-4" />
                <span>Forks</span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="border-gray-600 bg-transparent hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
              onClick={handleGitHubClick}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
