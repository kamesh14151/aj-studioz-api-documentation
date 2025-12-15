import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Zap, Shield, Globe, Code2, Brain } from "lucide-react"

export function DocsContent() {
  return (
    <div className="flex-1 py-12 max-w-3xl">
      {/* Introduction */}
      <section id="introduction" className="mb-20 scroll-mt-24">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Getting started</p>
        <h1 className="text-5xl font-bold mb-6 text-balance">Welcome</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Welcome to the AJ STUDIOZ developer docs! Our API makes it easy to harness cutting-edge AI intelligence in
          your projects. Access multiple state-of-the-art language models through unified, OpenAI-compatible interfaces.
        </p>

        <div className="mt-10 space-y-3">
          <h2 id="jump-right-in" className="text-2xl font-semibold mb-6">Jump right in</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border-2 group-hover:border-foreground transition-colors">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">Quickstart</h3>
              <p className="text-sm text-muted-foreground mb-3">Create an API Key and make your first request.</p>
              <span className="text-sm font-medium group-hover:underline">Learn more →</span>
            </Card>
            <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border-2 group-hover:border-foreground transition-colors">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">Tool Use</h3>
              <p className="text-sm text-muted-foreground mb-3">Let AI perform actions and look up information.</p>
              <span className="text-sm font-medium group-hover:underline">Learn more →</span>
            </Card>
            <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border-2 group-hover:border-foreground transition-colors">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">Images</h3>
              <p className="text-sm text-muted-foreground mb-3">Use AI to analyze images or perform OCR.</p>
              <span className="text-sm font-medium group-hover:underline">Learn more →</span>
            </Card>
          </div>
        </div>

        <div className="mt-12 p-4 rounded-lg bg-muted/50 border text-sm">
          <p className="text-muted-foreground italic">
            Are you a non-developer or simply looking for our consumer services? Visit{" "}
            <a href="#" className="font-medium underline">
              AJStudioz.com
            </a>{" "}
            or download one of the{" "}
            <a href="#" className="font-medium underline">
              iOS
            </a>{" "}
            or{" "}
            <a href="#" className="font-medium underline">
              Android
            </a>{" "}
            apps. See our{" "}
            <a href="#" className="font-medium underline">
              Comparison Table
            </a>{" "}
            for the differences.
          </p>
        </div>

        <div className="mt-12">
          <h2 id="questions-feedback" className="text-2xl font-semibold mb-6">Questions and feedback</h2>
          <p className="text-muted-foreground">
            If you have any questions or feedback, feel free to email us at{" "}
            <a href="mailto:support@ajstudioz.dev" className="font-medium underline">
              support@ajstudioz.dev
            </a>
            .
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quick-start" className="mb-20 scroll-mt-24">
        <h2 className="text-3xl font-semibold mb-6">Quick Start</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Get started with AJ STUDIOZ APIs in minutes. Choose your platform and start building.
        </p>

        <div className="space-y-8">
          <div>
            <h3 id="test-aj-studioz" className="text-xl font-semibold mb-4">Test AJ STUDIOZ Multi-Model</h3>
            <CodeBlock
              language="bash"
              code={`# Check available models
curl -X GET "https://api.ajstudioz.dev/api/models" \\
  -H "X-API-Key: aj-demo123456789abcdef"

# Test chat completion
curl -X POST "https://api.ajstudioz.dev/api/chat" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: aj-demo123456789abcdef" \\
  -d '{"model": "kimi", "messages": [{"role": "user", "content": "Hello!"}]}'`}
            />
          </div>

          <div>
            <h3 id="test-nexariq" className="text-xl font-semibold mb-4">Test NEXARIQ Lynxa Pro</h3>
            <CodeBlock
              language="bash"
              code={`# Generate API key
curl -X POST "https://lynxa-pro-backend.vercel.app/api/keys/generate" \\
  -H "Content-Type: application/json" \\
  -d '{"email": "test@example.com"}'

# Test chat (replace YOUR_API_KEY)
curl -X POST "https://lynxa-pro-backend.vercel.app/api/lynxa" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{"model": "lynxa-pro", "messages": [{"role": "user", "content": "Hello!"}]}'`}
            />
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section id="authentication" className="mb-20 scroll-mt-24">
        <h2 className="text-3xl font-semibold mb-6">Authentication</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">AJ STUDIOZ Multi-Model</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              All API requests require authentication using an API key in the request headers:
            </p>
            <CodeBlock
              language="bash"
              code={`X-API-Key: your-api-key-here

# Demo API Key: aj-demo123456789abcdef`}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">NEXARIQ Lynxa Pro</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              NEXARIQ uses Bearer token authentication. All keys start with <code>nxq_</code>
            </p>
            <CodeBlock language="bash" code={`Authorization: Bearer YOUR_API_KEY`} />
          </div>
        </div>
      </section>

      {/* AJ STUDIOZ API */}
      <section id="aj-overview" className="mb-20 scroll-mt-24">
        <h2 className="text-3xl font-semibold mb-6">AJ STUDIOZ Multi-Model API</h2>
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
          Access multiple AI providers through unified OpenAI-compatible interfaces.
        </p>

        <div className="space-y-3 mb-8">
          <Card className="p-5">
            <div className="flex items-start gap-4">
              <Badge variant="outline" className="mt-1 font-mono text-xs">
                Cloud
              </Badge>
              <div className="flex-1">
                <p className="font-mono text-sm mb-1">https://api.ajstudioz.dev</p>
                <p className="text-sm text-muted-foreground">24/7 availability for cloud-hosted models</p>
              </div>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-start gap-4">
              <Badge variant="outline" className="mt-1 font-mono text-xs">
                Local
              </Badge>
              <div className="flex-1">
                <p className="font-mono text-sm mb-1">https://local-api.ajstudioz.dev</p>
                <p className="text-sm text-muted-foreground">Variable availability for local infrastructure</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Available Models */}
      <section id="available-models" className="mb-20 scroll-mt-24">
        <h2 id="available-models-heading" className="text-2xl font-semibold mb-6">Available Models</h2>

        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4 text-muted-foreground">Cloud-Hosted Models (24/7)</h4>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Model ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Provider</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Context</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Max Tokens</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y">
                <tr className="hover:bg-muted/30">
                  <td className="py-3 px-4 font-mono">kimi</td>
                  <td className="py-3 px-4">Moonshot AI</td>
                  <td className="py-3 px-4 text-muted-foreground">262,144</td>
                  <td className="py-3 px-4 text-muted-foreground">16,384</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="py-3 px-4 font-mono">qwen3</td>
                  <td className="py-3 px-4">Alibaba Cloud</td>
                  <td className="py-3 px-4 text-muted-foreground">131,072</td>
                  <td className="py-3 px-4 text-muted-foreground">40,960</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="py-3 px-4 font-mono">llama-4</td>
                  <td className="py-3 px-4">Meta</td>
                  <td className="py-3 px-4 text-muted-foreground">131,072</td>
                  <td className="py-3 px-4 text-muted-foreground">8,192</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="py-3 px-4 font-mono">gpt-oss</td>
                  <td className="py-3 px-4">OpenAI</td>
                  <td className="py-3 px-4 text-muted-foreground">131,072</td>
                  <td className="py-3 px-4 text-muted-foreground">65,536</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="py-3 px-4 font-mono">qwen3-coder</td>
                  <td className="py-3 px-4">Alibaba Cloud</td>
                  <td className="py-3 px-4 text-muted-foreground">131,072</td>
                  <td className="py-3 px-4 text-muted-foreground">8,192</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Showing 5 of 13+ available models</p>
        </div>
      </section>

      {/* AJ Endpoints */}
      <section id="aj-endpoints" className="mb-20 scroll-mt-24">
        <h2 id="api-endpoints-heading" className="text-2xl font-semibold mb-6">API Endpoints</h2>

        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="font-mono text-xs">
                GET
              </Badge>
              <code className="text-sm font-mono">/api/models</code>
            </div>
            <p className="text-muted-foreground mb-4">List all available models</p>
            <CodeBlock
              language="bash"
              code={`curl -X GET "https://api.ajstudioz.dev/api/models" \\
  -H "X-API-Key: aj-demo123456789abcdef"`}
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="font-mono text-xs">
                POST
              </Badge>
              <code className="text-sm font-mono">/api/chat</code>
            </div>
            <p className="text-muted-foreground mb-4">Create a chat completion</p>
            <CodeBlock
              language="bash"
              code={`curl -X POST "https://api.ajstudioz.dev/api/chat" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: aj-demo123456789abcdef" \\
  -d '{
    "model": "kimi",
    "messages": [{"role": "user", "content": "Hello!"}],
    "stream": false,
    "temperature": 0.7,
    "max_tokens": 500
  }'`}
            />
          </div>
        </div>
      </section>

      {/* AJ Examples */}
      <section id="aj-examples" className="mb-20 scroll-mt-24">
        <h2 id="code-examples-heading" className="text-2xl font-bold tracking-tight mb-6">Code Examples</h2>

        <div className="space-y-6">
          <div>
            <h4 id="javascript-example" className="text-lg font-semibold mb-3">JavaScript</h4>
            <CodeBlock
              language="javascript"
              code={`const response = await fetch('https://api.ajstudioz.dev/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'aj-demo123456789abcdef'
  },
  body: JSON.stringify({
    model: 'kimi',
    messages: [{ role: 'user', content: 'Hello from Vercel!' }],
    stream: false
  })
});

const data = await response.json();
console.log(data);`}
            />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Python</h4>
            <CodeBlock
              language="python"
              code={`import requests

response = requests.post(
    'https://api.ajstudioz.dev/api/chat',
    headers={
        'Content-Type': 'application/json',
        'X-API-Key': 'aj-demo123456789abcdef'
    },
    json={
        'model': 'qwen3',
        'messages': [{'role': 'user', 'content': 'Hello from Python!'}],
        'stream': False
    }
)

print(response.json())`}
            />
          </div>
        </div>
      </section>

      {/* NEXARIQ Overview */}
      <section id="nexariq-overview" className="mb-20 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight mb-6">NEXARIQ Lynxa Pro API</h2>
        <p className="text-muted-foreground mb-6">
          NEXARIQ is AJ STUDIOZ's proprietary AI platform featuring Lynxa Pro - an enterprise-grade language model built
          for performance and reliability.
        </p>

        <Card className="p-4 mb-6">
          <div className="font-mono text-sm">https://lynxa-pro-backend.vercel.app</div>
        </Card>
      </section>

      {/* Model Specs */}
      <section id="model-specs" className="mb-20 scroll-mt-24">
        <h2 id="specifications-heading" className="text-2xl font-bold tracking-tight mb-6">Specifications</h2>

        <div className="grid gap-4 sm:grid-cols-2 mb-6">
          <Card className="p-4">
            <div className="text-sm text-muted-foreground mb-1">Context Length</div>
            <div className="text-2xl font-bold">32,768 tokens</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground mb-1">Max Tokens</div>
            <div className="text-2xl font-bold">4,096</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground mb-1">Temperature</div>
            <div className="text-2xl font-bold">0.7</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground mb-1">Streaming</div>
            <div className="text-2xl font-bold flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-green-500" /> Supported
            </div>
          </Card>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Key Features</h4>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <div className="font-medium">Fast Response Times</div>
                <div className="text-sm text-muted-foreground">Optimized for low-latency inference</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <div className="font-medium">Enterprise-Grade Performance</div>
                <div className="text-sm text-muted-foreground">Built for production workloads</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Brain className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <div className="font-medium">Natural Language Understanding</div>
                <div className="text-sm text-muted-foreground">Advanced comprehension capabilities</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Code2 className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <div className="font-medium">Code Generation & Analysis</div>
                <div className="text-sm text-muted-foreground">Programming-aware model</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <div className="font-medium">Multi-Language Support</div>
                <div className="text-sm text-muted-foreground">Global language coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXARIQ Endpoints */}
      <section id="nexariq-endpoints" className="mb-20 scroll-mt-24">
        <h3 className="text-2xl font-bold tracking-tight mb-6">API Endpoints</h3>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge className="font-mono">GET</Badge>
              <code className="text-sm">/api/health</code>
            </div>
            <p className="text-muted-foreground mb-3">Check API operational status</p>
            <CodeBlock language="bash" code={`curl -X GET "https://lynxa-pro-backend.vercel.app/api/health"`} />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge className="font-mono">GET</Badge>
              <code className="text-sm">/api/info</code>
            </div>
            <p className="text-muted-foreground mb-3">Get API version and capabilities</p>
            <CodeBlock language="bash" code={`curl -X GET "https://lynxa-pro-backend.vercel.app/api/info"`} />
          </div>
        </div>
      </section>

      {/* Generate Key */}
      <section id="generate-key" className="mb-20 scroll-mt-24">
        <h2 id="generate-api-key" className="text-2xl font-bold tracking-tight mb-6">Generate API Key</h2>
        <p className="text-muted-foreground mb-4">
          Create a new API key for authentication. All NEXARIQ keys start with{" "}
          <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">nxq_</code>
        </p>

        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="secondary" className="font-mono">
                POST
              </Badge>
              <code className="text-sm">/api/keys/generate</code>
            </div>
            <CodeBlock
              language="bash"
              code={`curl -X POST "https://lynxa-pro-backend.vercel.app/api/keys/generate" \\
  -H "Content-Type: application/json" \\
  -d '{"email": "your-email@example.com"}'`}
            />
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Response</h4>
            <CodeBlock
              language="json"
              code={`{
  "success": true,
  "key": "nxq_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "expires": "2026-12-12T13:18:01.529Z",
  "tier": "free"
}`}
            />
          </div>
        </div>
      </section>

      {/* NEXARIQ Examples */}
      <section id="nexariq-examples" className="mb-20 scroll-mt-24">
        <h2 id="usage-examples" className="text-2xl font-bold tracking-tight mb-6">Usage Examples</h2>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3">Basic Conversation</h4>
            <CodeBlock
              language="bash"
              code={`curl -X POST "https://lynxa-pro-backend.vercel.app/api/lynxa" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer nxq_your_api_key_here" \\
  -d '{
    "model": "lynxa-pro",
    "messages": [
      {"role": "user", "content": "Hello, who are you?"}
    ],
    "max_tokens": 150
  }'`}
            />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">JavaScript (Node.js)</h4>
            <CodeBlock
              language="javascript"
              code={`// Generate API Key
async function generateApiKey() {
  const response = await fetch(
    'https://lynxa-pro-backend.vercel.app/api/keys/generate',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'your-email@example.com' })
    }
  );
  const data = await response.json();
  return data.key;
}

// Chat with Lynxa Pro
async function chatWithLynxa(apiKey, message) {
  const response = await fetch(
    'https://lynxa-pro-backend.vercel.app/api/lynxa',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${apiKey}\`
      },
      body: JSON.stringify({
        model: 'lynxa-pro',
        messages: [{ role: 'user', content: message }],
        max_tokens: 500
      })
    }
  );
  
  return await response.json();
}

// Usage
const apiKey = await generateApiKey();
const response = await chatWithLynxa(apiKey, 'Hello, Lynxa!');
console.log(response);`}
            />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Python</h4>
            <CodeBlock
              language="python"
              code={`import requests

# Generate API Key
def generate_api_key(email):
    response = requests.post(
        'https://lynxa-pro-backend.vercel.app/api/keys/generate',
        json={'email': email}
    )
    return response.json()['key']

# Chat with Lynxa Pro
def chat_with_lynxa(api_key, message):
    response = requests.post(
        'https://lynxa-pro-backend.vercel.app/api/lynxa',
        headers={
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}'
        },
        json={
            'model': 'lynxa-pro',
            'messages': [{'role': 'user', 'content': message}],
            'max_tokens': 500
        }
    )
    return response.json()

# Usage
api_key = generate_api_key('your-email@example.com')
response = chat_with_lynxa(api_key, 'Hello, Lynxa!')
print(response)`}
            />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="mb-20 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Comparison Guide</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">When to Use AJ STUDIOZ Multi-Model</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Access to multiple AI providers (OpenAI, Meta, Alibaba, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Ultra-long context requirements (up to 262K tokens with Kimi)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Specialized tasks (coding with qwen3-coder, reasoning with DeepSeek)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>High token output needs (up to 65K with gpt-oss)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">When to Use NEXARIQ Lynxa Pro</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Enterprise-grade reliability and support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Consistent performance and response quality</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Fast response times with moderate context (32K tokens)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>General-purpose conversational AI</span>
              </li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold">Feature</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">AJ STUDIOZ</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">NEXARIQ</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium">Models Available</td>
                  <td className="py-3 px-4">13+ models</td>
                  <td className="py-3 px-4">1 proprietary model</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium">Max Context</td>
                  <td className="py-3 px-4">Up to 262K tokens</td>
                  <td className="py-3 px-4">32K tokens</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium">Max Output</td>
                  <td className="py-3 px-4">Up to 65K tokens</td>
                  <td className="py-3 px-4">4K tokens</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium">Authentication</td>
                  <td className="py-3 px-4">API Key (X-API-Key)</td>
                  <td className="py-3 px-4">Bearer Token</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium">Streaming</td>
                  <td className="py-3 px-4">✅ Yes</td>
                  <td className="py-3 px-4">✅ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="mb-20 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Best Practices</h2>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">General Guidelines</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <span>Always implement error handling with retry logic</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <span>Use streaming for better UX with long responses</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <span>Monitor token usage to optimize costs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <span>Cache responses when appropriate</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <span>Implement rate limiting on your end</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="text-lg font-semibold mb-3">Security</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span>⚠️ Never expose API keys in client-side code</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <span>Use environment variables for keys</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <span>Rotate keys periodically</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <span>Monitor API usage for anomalies</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Performance Optimization</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <span>Use appropriate max_tokens limits</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <span>Adjust temperature: 0.0-0.3 for factual, 0.7-0.9 for creative, 1.0-2.0 for highly creative</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <span>Enable streaming for real-time applications</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Error Codes */}
      <section id="error-codes" className="mb-20 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Error Codes</h2>
        <p className="text-muted-foreground mb-6">Common HTTP status codes returned by both APIs</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold">Status Code</th>
                <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-mono">200</td>
                <td className="py-3 px-4">Success</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-mono">400</td>
                <td className="py-3 px-4">Bad request - invalid parameters</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-mono">401</td>
                <td className="py-3 px-4">Invalid or missing authentication</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-mono">403</td>
                <td className="py-3 px-4">Forbidden - insufficient permissions</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-mono">404</td>
                <td className="py-3 px-4">Endpoint or model not found</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-mono">429</td>
                <td className="py-3 px-4">Rate limit exceeded</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-mono">500</td>
                <td className="py-3 px-4">Internal server error</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-mono">503</td>
                <td className="py-3 px-4">Service temporarily unavailable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border pt-8 mt-16">
        <p className="text-sm text-muted-foreground text-center">
          Powered by AJ STUDIOZ - Your Complete AI Infrastructure Provider
        </p>
        <p className="text-xs text-muted-foreground text-center mt-2">
          AJ STUDIOZ Multi-Model Platform | NEXARIQ by AJ STUDIOZ
        </p>
      </footer>
    </div>
  )
}
