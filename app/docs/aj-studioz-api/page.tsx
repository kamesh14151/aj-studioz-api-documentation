import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Code2, Globe, CheckCircle2, ArrowRight } from "lucide-react"
import { AnimatedFolder } from "@/components/3d-folder"
import { MiniChart } from "@/components/mini-chart"
import { LocationMap } from "@/components/expand-map"

export default function AjStudiozApiPage() {
  return (
    <>
      <section className="mb-20">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">AJ STUDIOZ API</p>
        <h1 className="text-5xl font-bold mb-6">Overview</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          AJ STUDIOZ Multi-Model API provides unified access to multiple state-of-the-art language models 
          through OpenAI-compatible endpoints. Switch between models seamlessly while using your existing code and tools.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">OpenAI Compatible</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Drop-in replacement for OpenAI API with identical endpoints and response formats.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Multiple Models</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Access Claude, GPT-4, Gemini, and other premium models through a single interface.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Global CDN</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Low-latency access worldwide with regional endpoints optimized for performance.
            </p>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-6">Available Models</h2>
        
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <AnimatedFolder
              title="AI Models Collection"
              projects={[
                {
                  id: "claude",
                  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
                  title: "Claude 3.5 Sonnet"
                },
                {
                  id: "gpt4",
                  image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=300&fit=crop", 
                  title: "GPT-4 Turbo"
                },
                {
                  id: "gemini",
                  image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop",
                  title: "Gemini Pro"
                },
                {
                  id: "kimi",
                  image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
                  title: "Moonshot Kimi"
                }
              ]}
            />
          </div>
          <div>
            <MiniChart />
          </div>
        </div>
        
        <div className="space-y-6 mb-12">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Claude 3.5 Sonnet</h3>
                <Badge>claude-3.5-sonnet</Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Anthropic's latest model with enhanced reasoning, coding, and analysis capabilities.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>200K context • Advanced reasoning • Code generation</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">GPT-4 Turbo</h3>
                <Badge>gpt-4-turbo</Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                OpenAI's most capable model with broad knowledge and strong performance across domains.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>128K context • Multimodal • JSON mode</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Gemini Pro</h3>
                <Badge>gemini-pro</Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Google's advanced model optimized for complex reasoning and multilingual tasks.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>32K context • Multilingual • Fast inference</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Moonshot Kimi</h3>
                <Badge>kimi</Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                High-performance model with excellent Chinese language support and long context.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>128K context • Chinese + English • Cost-effective</span>
              </div>
            </Card>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-6">API Endpoints</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Base URL</h3>
            <div className="bg-muted/50 border rounded-lg p-4">
              <code className="text-sm">https://api.ajstudioz.dev/api</code>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Chat Completions</h3>
            <p className="text-muted-foreground mb-4">
              Create chat completions using any available model with OpenAI-compatible format.
            </p>
            <CodeBlock
              language="bash"
              code={`POST /chat/completions

curl -X POST "https://api.ajstudioz.dev/api/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: your-api-key" \\
  -d '{
    "model": "claude-3.5-sonnet",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Explain quantum computing"}
    ],
    "max_tokens": 1000,
    "temperature": 0.7
  }'`}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">List Models</h3>
            <p className="text-muted-foreground mb-4">
              Get a list of all available models and their capabilities.
            </p>
            <CodeBlock
              language="bash"
              code={`GET /models

curl -X GET "https://api.ajstudioz.dev/api/models" \\
  -H "X-API-Key: your-api-key"

# Response
{
  "data": [
    {
      "id": "claude-3.5-sonnet",
      "object": "model",
      "owned_by": "anthropic",
      "context_length": 200000
    },
    {
      "id": "gpt-4-turbo", 
      "object": "model",
      "owned_by": "openai",
      "context_length": 128000
    }
  ]
}`}
            />
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-6 mt-16">Global Infrastructure</h2>
        
        <div className="mb-12">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            AJ STUDIOZ operates from multiple regions worldwide to ensure low-latency access and high availability 
            for users across the globe. Our infrastructure is designed for performance and reliability.
          </p>
          <LocationMap 
            locations={[
              { name: "US East", coordinates: [40.7128, -74.0060], color: "#3b82f6" },
              { name: "US West", coordinates: [37.7749, -122.4194], color: "#10b981" },
              { name: "Europe", coordinates: [51.5074, -0.1278], color: "#8b5cf6" },
              { name: "Asia Pacific", coordinates: [35.6762, 139.6503], color: "#f59e0b" }
            ]}
          />
        </div>

        <h2 className="text-3xl font-semibold mb-6">Quick Start Example</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Python with OpenAI SDK</h3>
            <CodeBlock
              language="python"
              code={`from openai import OpenAI

# Initialize client
client = OpenAI(
    api_key="aj-demo123456789abcdef",  # Use demo key for testing
    base_url="https://api.ajstudioz.dev/api"
)

# Chat with Claude
response = client.chat.completions.create(
    model="claude-3.5-sonnet",
    messages=[
        {"role": "system", "content": "You are a coding assistant."},
        {"role": "user", "content": "Write a Python function to calculate fibonacci"}
    ],
    max_tokens=500
)

print(response.choices[0].message.content)

# Switch to GPT-4 with the same code
response = client.chat.completions.create(
    model="gpt-4-turbo",  # Just change the model name
    messages=[
        {"role": "user", "content": "Explain the code above"}
    ]
)

print(response.choices[0].message.content)`}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">JavaScript/TypeScript</h3>
            <CodeBlock
              language="javascript"
              code={`import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'aj-demo123456789abcdef',
  baseURL: 'https://api.ajstudioz.dev/api',
});

async function chatWithAI() {
  // Try different models easily
  const models = ['claude-3.5-sonnet', 'gpt-4-turbo', 'gemini-pro'];
  
  for (const model of models) {
    console.log(\`\\n--- Testing \${model} ---\`);
    
    const response = await openai.chat.completions.create({
      model: model,
      messages: [
        { role: 'user', content: 'Write a haiku about programming' }
      ],
      max_tokens: 100
    });
    
    console.log(response.choices[0].message.content);
  }
}

chatWithAI().catch(console.error);`}
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Card className="p-6 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold">Explore Models</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Learn about each model's capabilities, context limits, and best use cases.
            </p>
            <a 
              href="/docs/aj-studioz-api/models" 
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View Available Models →
            </a>
          </Card>

          <Card className="p-6 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5 text-green-600 dark:text-green-400" />
              <h3 className="text-lg font-semibold">API Reference</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Complete API documentation with endpoints, parameters, and response formats.
            </p>
            <a 
              href="/docs/aj-studioz-api/endpoints" 
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              API Endpoints →
            </a>
          </Card>
        </div>
      </section>
    </>
  )
}