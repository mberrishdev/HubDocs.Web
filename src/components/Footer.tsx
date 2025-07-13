
import { Github, ExternalLink, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const links = {
    project: [
      { name: 'Documentation', href: '#' },
      { name: 'GitHub Repository', href: '#' },
      { name: 'NuGet Package', href: '#' },
      { name: 'Release Notes', href: '#' }
    ],
    community: [
      { name: 'Issues', href: '#' },
      { name: 'Discussions', href: '#' },
      { name: 'Contributing', href: '#' },
      { name: 'Code of Conduct', href: '#' }
    ],
    resources: [
      { name: 'ASP.NET Core Docs', href: '#' },
      { name: 'SignalR Documentation', href: '#' },
      { name: 'Swagger UI', href: '#' },
      { name: 'Examples', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">HD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">HubDocs</h3>
                <p className="text-sm text-gray-400">SignalR Documentation</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The developer-friendly UI tool for exploring and documenting SignalR hubs. 
              Built with love for the .NET community.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Project</h4>
            <ul className="space-y-3">
              {links.project.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-3">
              {links.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>by</span>
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                Mikheil Berishvili
              </a>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© 2024 HubDocs</span>
              <a href="#" className="hover:text-white">MIT License</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
