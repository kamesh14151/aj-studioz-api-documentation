import { CodeBlock } from "@/components/code-block"

export default function ChatbotPage() {
  return (
    <>
      <section>
        <div className="mb-8">
          <h1 id="chatbot-overview" className="text-4xl font-bold mb-4">AI Chatbot for Beginners</h1>
          <p className="text-xl text-muted-foreground">
            Get started quickly with our ready-to-use HTML AI chatbot powered by AJ STUDIOZ API. 
            Perfect for beginners who want to integrate AI chat functionality into their projects.
          </p>
        </div>

        <h2 id="quick-start" className="text-3xl font-semibold mb-6">Quick Start</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🚀</span> Try it instantly with NPX
          </h3>
          <CodeBlock
            language="bash"
            code="npx aj-studioz-chatbot"
          />
          <p className="text-sm text-muted-foreground">
            This command will start a local server and open the chatbot in your browser automatically!
          </p>
        </div>

        <h2 id="what-you-get" className="text-3xl font-semibold mb-6">What You Get</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="p-6 border rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold mb-2">Beautiful Interface</h3>
            <p className="text-sm text-muted-foreground">
              Modern gradient design with smooth animations and responsive layout that works on all devices.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/50 dark:to-teal-950/50">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Easy Setup</h3>
            <p className="text-sm text-muted-foreground">
              Just replace your API key and endpoint - no complex configuration required!
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-semibold mb-2">AI Ready</h3>
            <p className="text-sm text-muted-foreground">
              Pre-configured for AJ STUDIOZ API with intelligent responses and error handling.
            </p>
          </div>
        </div>

        <h2 id="live-demo" className="text-3xl font-semibold mb-6">Live Demo</h2>
        
        <div className="mb-8 p-6 border rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Interactive Chatbot Preview</h3>
            <a 
              href="/chatbot/aj-studioz-chatbot.html" 
              target="_blank" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              <span>Open Full Screen</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
            <iframe 
              src="/chatbot/aj-studioz-chatbot.html" 
              className="w-full h-96"
              title="AJ STUDIOZ Chatbot Demo"
            ></iframe>
          </div>
        </div>

        <h2 id="api-testing" className="text-3xl font-semibold mb-6">Test the API First</h2>
        
        <div className="mb-8 p-6 border rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">⚙️</span> Test with cURL
          </h3>
          <p className="text-muted-foreground mb-4">
            Before using the chatbot, test the AJ STUDIOZ API directly with this cURL command:
          </p>
          <CodeBlock
            language="bash"
            code={`curl -X POST "https://api.ajstudioz.dev/api/chat" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: aj-demo123456789abcdef" \\
  -d '{
    "model": "kimi", 
    "messages": [{"role": "user", "content": "Hello! How are you?"}]
  }'`}
          />
          <p className="text-sm text-muted-foreground mt-4">
            ⚠️ Replace <code>aj-demo123456789abcdef</code> with your actual API key from the AJ STUDIOZ dashboard.
          </p>
        </div>

        <h2 id="setup-guide" className="text-3xl font-semibold mb-6">Setup Guide</h2>
        
        <div className="space-y-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <h3 className="text-xl font-semibold">Get Your API Key</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Get your AJ STUDIOZ API key from your dashboard. The key format should be similar to: <code>aj-demo123456789abcdef</code>
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                📝 <strong>Demo Key Available:</strong> You can test with <code>aj-demo123456789abcdef</code> for initial testing.
              </p>
            </div>
            <a href="/docs/key-information/authentication" className="text-blue-600 hover:text-blue-800 font-medium">
              → Authentication Guide
            </a>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <h3 className="text-xl font-semibold">Download the Chatbot</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              You can use NPX for instant setup or download the files manually:
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-3">Option 1: NPX (Recommended)</p>
                <CodeBlock
                  language="bash"
                  code="npx aj-studioz-chatbot"
                />
              </div>
              <div>
                <p className="text-sm font-medium mb-3">Option 2: Manual Download</p>
                <CodeBlock
                  language="bash"
                  code="git clone https://github.com/kamesh14151/aj-studioz-api-documentation.git"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <h3 className="text-xl font-semibold">Configure the API</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Open <code>aj-studioz-chatbot.html</code> and update the AJ_STUDIOZ_CONFIG:
            </p>
            <CodeBlock
              language="javascript"
              code={`const AJ_STUDIOZ_CONFIG = {
    endpoint: 'https://api.ajstudioz.dev/api/chat',
    apiKey: 'your-actual-api-key-here',
    model: 'kimi',
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': 'your-actual-api-key-here'
    }
};`}
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <h3 className="text-xl font-semibold">Test & Deploy</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Open the HTML file in your browser or start the server and test your chatbot!
            </p>
            <CodeBlock
              language="bash"
              code="npm start"
            />
          </div>
        </div>

        <h2 id="api-format" className="text-3xl font-semibold mb-6">API Request Format</h2>
        
        <div className="mb-8 p-6 border rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50">
          <h3 className="text-xl font-semibold mb-4">Request Structure</h3>
          <p className="text-muted-foreground mb-4">
            The chatbot sends requests to AJ STUDIOZ API in this format:
          </p>
          <CodeBlock
            language="http"
            code={`POST https://api.ajstudioz.dev/api/chat
Content-Type: application/json
X-API-Key: your-api-key

{
  "model": "kimi",
  "messages": [
    {"role": "user", "content": "Your message here"}
  ]
}`}
          />
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="font-medium text-sm mb-2">Available Models</p>
              <p className="text-muted-foreground text-sm">• <code>kimi</code> - Default conversational AI model</p>
            </div>
            <div>
              <p className="font-medium text-sm mb-2">Headers Required</p>
              <p className="text-muted-foreground text-sm">• <code>Content-Type: application/json</code><br/>• <code>X-API-Key: your-api-key</code></p>
            </div>
          </div>
        </div>

        <h2 id="customization" className="text-3xl font-semibold mb-6">Customization Options</h2>
        
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-3">🎨 Styling</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Change gradient colors and themes</li>
              <li>• Modify chat bubble styles</li>
              <li>• Customize typography and spacing</li>
              <li>• Add your brand colors and logo</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">🤖 AI Behavior</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Customize the system message</li>
              <li>• Adjust response length and style</li>
              <li>• Set temperature and creativity</li>
              <li>• Add specific instructions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">⚙️ Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Add file upload capabilities</li>
              <li>• Implement chat history</li>
              <li>• Create custom commands</li>
              <li>• Add voice input/output</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">🚀 Deployment</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Deploy to Vercel, Netlify, or GitHub Pages</li>
              <li>• Use with any static site generator</li>
              <li>• Embed in existing websites</li>
              <li>• Create mobile apps with WebView</li>
            </ul>
          </div>
        </div>

        <h2 id="troubleshooting" className="text-3xl font-semibold mb-6">Troubleshooting</h2>
        
        <div className="space-y-6 mb-12">
          <div>
            <h4 className="font-semibold mb-2">❓ Chatbot shows "demo version" message</h4>
            <p className="text-sm text-muted-foreground">
              This means the API key hasn't been configured yet. Replace "your-aj-studioz-api-key-here" with your actual API key.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">🚫 API errors or no responses</h4>
            <p className="text-sm text-muted-foreground">
              Check your API endpoint URL and ensure your API key has the correct permissions. See the authentication guide for details.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">📱 Mobile display issues</h4>
            <p className="text-sm text-muted-foreground">
              The chatbot is responsive by default. If you have issues, check your viewport meta tag and CSS media queries.
            </p>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border border-green-200 dark:border-green-800 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🎉</span>
            <h3 className="text-xl font-semibold">Ready to Get Started?</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            The AJ STUDIOZ AI Chatbot is perfect for beginners who want to add AI chat functionality to their projects without complex setup.
          </p>
          <div className="flex gap-3">
            <a 
              href="/chatbot/aj-studioz-chatbot.html" 
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
            >
              <span>Try Demo</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-9v.01M9 9v.01" />
              </svg>
            </a>
            <a 
              href="/docs/key-information/authentication"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <span>Get API Key</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v-2H7v-2H5v-2l3.257-3.257A6 6 0 0115 7z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}