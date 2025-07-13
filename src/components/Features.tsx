
import { Search, FileText, Palette, Zap, Package, Activity } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "Automatic Hub Discovery",
    description: "Automatically finds all SignalR hubs in your application without any manual configuration."
  },
  {
    icon: FileText,
    title: "Method Documentation",
    description: "Shows method signatures, parameters, and return types with beautiful syntax highlighting."
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description: "Swagger-inspired dark theme interface that developers love to use."
  },
  {
    icon: Zap,
    title: "Easy Integration",
    description: "Simple setup with just a few lines of code in your ASP.NET Core application."
  },
  {
    icon: Package,
    title: "NuGet Package",
    description: "Easy to install and use in any ASP.NET Core project via NuGet package manager."
  },
  {
    icon: Activity,
    title: "Live Client Logging",
    description: "Displays real-time messages sent from server to clients via strongly-typed interfaces."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to document, explore, and test your SignalR hubs in one beautiful interface.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/70"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400 group-hover:bg-blue-600/30 transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
