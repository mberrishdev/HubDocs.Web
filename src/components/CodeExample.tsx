
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const CodeExample = () => {
  const [copied, setCopied] = useState(false);

  const codeExample = `public interface IChatClient
{
    Task ReceiveMessage(string user, string message);
    Task Connected(string connectionId);
}

public class ChatHub : Hub<IChatClient>
{
    public async Task SendMessage(string user, string message)
    {
        await Clients.All.ReceiveMessage(user, message);
    }

    public override async Task OnConnectedAsync()
    {
        await Clients.Caller.Connected(Context.ConnectionId);
    }
}`;

  const setupCode = `using HubDocs;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Configure and register hub
app.MapHubAndRegister<ChatHub>("/hub");

// Configure HubDocs middleware
app.AddHubDocs();

app.Run();`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quick Start
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get up and running with HubDocs in minutes. Simple setup, powerful results.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <span className="text-gray-300 font-medium">1. Install Package</span>
              </div>
              <div className="p-6">
                <div className="bg-gray-900 rounded-lg p-4 relative">
                  <code className="text-green-400 text-lg font-mono">
                    dotnet add package HubDocs
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard('dotnet add package HubDocs')}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <span className="text-gray-300 font-medium">2. Configure Application</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(setupCode)}
                  className="text-gray-400 hover:text-white"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <div className="p-6">
                <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-gray-300">
                    <span className="text-blue-400">using</span> <span className="text-yellow-300">HubDocs</span>;
                    {'\n\n'}
                    <span className="text-blue-400">var</span> builder = <span className="text-yellow-300">WebApplication</span>.<span className="text-green-400">CreateBuilder</span>(args);
                    {'\n'}
                    <span className="text-blue-400">var</span> app = builder.<span className="text-green-400">Build</span>();
                    {'\n\n'}
                    <span className="text-gray-500">// Configure and register hub</span>
                    {'\n'}
                    app.<span className="text-green-400">MapHubAndRegister</span>&lt;<span className="text-yellow-300">ChatHub</span>&gt;(<span className="text-red-400">"/hub"</span>);
                    {'\n\n'}
                    <span className="text-gray-500">// Configure HubDocs middleware</span>
                    {'\n'}
                    app.<span className="text-green-400">AddHubDocs</span>();
                    {'\n\n'}
                    app.<span className="text-green-400">Run</span>();
                  </code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <span className="text-gray-300 font-medium">3. Create Your Hub</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(codeExample)}
                className="text-gray-400 hover:text-white"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <div className="p-6">
              <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
                <code className="text-gray-300">
                  <span className="text-blue-400">public interface</span> <span className="text-yellow-300">IChatClient</span>
                  {'\n'}{'{'}
                  {'\n'}    <span className="text-yellow-300">Task</span> <span className="text-green-400">ReceiveMessage</span>(<span className="text-blue-400">string</span> user, <span className="text-blue-400">string</span> message);
                  {'\n'}    <span className="text-yellow-300">Task</span> <span className="text-green-400">Connected</span>(<span className="text-blue-400">string</span> connectionId);
                  {'\n'}{'}'}
                  {'\n\n'}
                  <span className="text-blue-400">public class</span> <span className="text-yellow-300">ChatHub</span> : <span className="text-yellow-300">Hub</span>&lt;<span className="text-yellow-300">IChatClient</span>&gt;
                  {'\n'}{'{'}
                  {'\n'}    <span className="text-blue-400">public async</span> <span className="text-yellow-300">Task</span> <span className="text-green-400">SendMessage</span>(<span className="text-blue-400">string</span> user, <span className="text-blue-400">string</span> message)
                  {'\n'}    {'{'}
                  {'\n'}        <span className="text-blue-400">await</span> Clients.All.<span className="text-green-400">ReceiveMessage</span>(user, message);
                  {'\n'}    {'}'}
                  {'\n'}
                  {'\n'}    <span className="text-blue-400">public override async</span> <span className="text-yellow-300">Task</span> <span className="text-green-400">OnConnectedAsync</span>()
                  {'\n'}    {'{'}
                  {'\n'}        <span className="text-blue-400">await</span> Clients.Caller.<span className="text-green-400">Connected</span>(Context.ConnectionId);
                  {'\n'}    {'}'}
                  {'\n'}{'}'}
                </code>
              </pre>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">That's it! 🎉</h3>
            <p className="text-gray-300 text-lg">
              Access the HubDocs UI at <code className="bg-gray-800 px-3 py-1 rounded text-blue-400">/hubdocs/</code> in your browser
              and start exploring your SignalR hubs with the beautiful, interactive interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
