import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Code2, Key, PlayCircle } from "lucide-react"

export default function QuickStartPage() {
  return (
    <>
      <section className="mb-12 sm:mb-16 lg:mb-20 overflow-x-hidden">
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Getting Started</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">The Hitchhiker's Guide</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
          Get started with AJ STUDIOZ APIs in minutes. Choose your platform and start building with cutting-edge AI models.
        </p>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 mb-8 sm:mb-10 lg:mb-12">
          <Card className="p-4 sm:p-6 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">AJ STUDIOZ Multi-Model</h3>
                <Badge variant="secondary" className="mt-1">Recommended</Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Access multiple AI models through OpenAI-compatible endpoints. Perfect for most use cases.
            </p>
          </Card>

          <Card className="p-4 sm:p-6 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                <Code2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">NEXARIQ Lynxa Pro</h3>
                <Badge variant="outline" className="mt-1">Specialized</Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Custom AI models with enhanced reasoning capabilities for complex tasks.
            </p>
          </Card>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Quick Start: AJ STUDIOZ Multi-Model</h2>
        
        <div className="space-y-6 sm:space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold">1</div>
              <h3 className="text-lg sm:text-xl font-semibold">Test with Demo Key</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Try our API immediately with the demo key. Perfect for testing and prototyping.
            </p>
            <div className="overflow-x-auto">
              <CodeBlock
                language="bash"
                code={`# Check available models
curl -X GET "https://api.ajstudioz.dev/api/models" \\
  -H "X-API-Key: aj-demo123456789abcdef"

# Test chat completion
curl -X POST "https://api.ajstudioz.dev/api/chat" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: aj-demo123456789abcdef" \\
  -d '{
    "model": "kimi", 
    "messages": [{"role": "user", "content": "Hello! How are you?"}]
  }'`}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold">2</div>
              <h3 className="text-lg sm:text-xl font-semibold">Get Your API Key</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Ready for production? Get your personal API key for full access and billing control.
            </p>
            <div className="bg-muted/50 border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <Key className="inline h-4 w-4 mr-2" />
                Contact our team to get your production API key with custom rate limits and billing.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold">3</div>
              <h3 className="text-lg sm:text-xl font-semibold">Use with OpenAI Libraries</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Drop-in replacement for OpenAI API. Use your existing code and libraries.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Python with OpenAI SDK</h4>
                <div className="overflow-x-auto">
                  <CodeBlock
                    language="python"
                    code={`from openai import OpenAI

client = OpenAI(
    api_key="aj-demo123456789abcdef",
    base_url="https://api.ajstudioz.dev/api"
)

response = client.chat.completions.create(
    model="kimi",
    messages=[{"role": "user", "content": "Hello!"}]
)

print(response.choices[0].message.content)`}
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">JavaScript/TypeScript</h4>
                <div className="overflow-x-auto">
                  <CodeBlock
                    language="javascript"
                    code={`import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'aj-demo123456789abcdef',
  baseURL: 'https://api.ajstudioz.dev/api',
});

const response = await openai.chat.completions.create({
  model: 'kimi',
  messages: [{ role: 'user', content: 'Hello!' }],
});

console.log(response.choices[0].message.content);`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 mt-12 sm:mt-16">Quick Start: NEXARIQ Lynxa Pro</h2>
        
        <div className="space-y-6 sm:space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-600 text-white text-xs sm:text-sm font-semibold">1</div>
              <h3 className="text-lg sm:text-xl font-semibold">Generate API Key</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              NEXARIQ requires email-based API key generation for access control.
            </p>
            <div className="overflow-x-auto">
              <CodeBlock
                language="bash"
                code={`# Generate API key
curl -X POST "https://lynxa-pro-backend.vercel.app/api/keys/generate" \\
  -H "Content-Type: application/json" \\
  -d '{"email": "your-email@example.com"}'

# Response includes your API key
# {"success": true, "apiKey": "nxq_..."}`}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-600 text-white text-xs sm:text-sm font-semibold">2</div>
              <h3 className="text-lg sm:text-xl font-semibold">Test Chat Completion</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Make your first request to the Lynxa Pro model.
            </p>
            <div className="overflow-x-auto">
              <CodeBlock
                language="bash"
                code={`# Test chat (replace YOUR_API_KEY with your actual key)
curl -X POST "https://lynxa-pro-backend.vercel.app/api/lynxa" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "lynxa-pro", 
    "messages": [{"role": "user", "content": "Explain quantum computing"}]
  }'`}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 p-4 sm:p-6 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-3">
            <PlayCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
            <h3 className="text-base sm:text-lg font-semibold text-green-900 dark:text-green-100">You're all set!</h3>
          </div>
          <p className="text-green-800 dark:text-green-200 mb-4">
            Congratulations! You've made your first API calls. Now explore our comprehensive guides and documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="/docs/aj-studioz-api" 
              className="inline-flex items-center justify-center px-3 sm:px-4 py-2 text-sm sm:text-base bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Explore AJ STUDIOZ API →
            </a>
            <a 
              href="/docs/nexariq-lynxa-pro" 
              className="inline-flex items-center justify-center px-3 sm:px-4 py-2 text-sm sm:text-base border border-green-600 text-green-600 rounded-md hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
            >
              Learn about NEXARIQ →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}