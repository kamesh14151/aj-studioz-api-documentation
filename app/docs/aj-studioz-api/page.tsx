import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Code2, Globe, CheckCircle2, ArrowRight, Server, Cpu } from "lucide-react"
import { AnimatedFolder } from "@/components/3d-folder"
import { MiniChart } from "@/components/mini-chart"
import { LocationMap } from "@/components/expand-map"
import { GradientCard } from "@/components/gradient-card"

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
        
        {/* Cloud-Hosted Models Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Server className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="text-2xl font-semibold">Cloud-Hosted Models (24/7)</h3>
              <p className="text-muted-foreground">Our cloud infrastructure hosts the following models with guaranteed uptime</p>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <GradientCard
              gradient="purple"
              badgeText="262K Context"
              badgeColor="#8b5cf6"
              title="Moonshot Kimi"
              description="Ultra-long context model with 16,384 max completion tokens"
              ctaText="Use Model"
              ctaHref="#kimi"
              imageUrl="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
            />
            
            <GradientCard
              gradient="orange"
              badgeText="131K Context"
              badgeColor="#f59e0b"
              title="Qwen3"
              description="Advanced multilingual model with 40,960 max tokens"
              ctaText="Use Model"
              ctaHref="#qwen3"
              imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop"
            />
            
            <GradientCard
              gradient="green"
              badgeText="131K Context"
              badgeColor="#10b981"
              title="Llama-4"
              description="Latest Llama generation with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#llama4"
              imageUrl="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop"
            />
            
            <GradientCard
              gradient="gray"
              badgeText="131K Context"
              badgeColor="#6b7280"
              title="GPT-OSS"
              description="Open-source GPT variant with 65,536 max tokens"
              ctaText="Use Model"
              ctaHref="#gpt-oss"
              imageUrl="https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=300&fit=crop"
            />
            
            <GradientCard
              gradient="purple"
              badgeText="131K Context"
              badgeColor="#8b5cf6"
              title="GPT-OSS-120B"
              description="Large parameter GPT variant with 65,536 max tokens"
              ctaText="Use Model"
              ctaHref="#gpt-oss-120b"
              imageUrl="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop"
            />
            
            <GradientCard
              gradient="green"
              badgeText="131K Context"
              badgeColor="#10b981"
              title="GLM-4.5-Air"
              description="Efficient GLM model with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#glm-4.5-air"
              imageUrl="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=300&fit=crop"
            />
            
            <GradientCard
              gradient="orange"
              badgeText="131K Context"
              badgeColor="#f59e0b"
              title="ZAI-GLM-4.6"
              description="Enhanced GLM model with 40,960 max tokens"
              ctaText="Use Model"
              ctaHref="#zai-glm-4.6"
              imageUrl="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop"
            />
            
            <GradientCard
              gradient="purple"
              badgeText="131K Context"
              badgeColor="#8b5cf6"
              title="DeepSeek-R1"
              description="Reasoning-optimized model with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#deepseek-r1"
              imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
            />
            
            <GradientCard
              gradient="green"
              badgeText="131K Context"
              badgeColor="#10b981"
              title="Qwen3-Coder"
              description="Code-specialized model with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#qwen3-coder"
              imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop"
            />
            
            <GradientCard
              gradient="gray"
              badgeText="131K Context"
              badgeColor="#6b7280"
              title="Mistral-Small-24B"
              description="Efficient Mistral variant with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#mistral-small-24b"
              imageUrl="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop"
            />
          </div>
        </div>

        {/* Local-Hosted Models Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="h-6 w-6 text-purple-600" />
            <div>
              <h3 className="text-2xl font-semibold">Local-Hosted Models</h3>
              <p className="text-muted-foreground">These models run on local infrastructure and may have variable availability</p>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GradientCard
              gradient="orange"
              badgeText="8K Context"
              badgeColor="#f59e0b"
              title="Qwen3-Local"
              description="Alibaba Cloud model with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#qwen3-local"
              imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop"
            />
            
            <GradientCard
              gradient="purple"
              badgeText="8K Context"
              badgeColor="#8b5cf6"
              title="GLM-4.6"
              description="Zhipu AI model with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#glm-4.6"
              imageUrl="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=300&fit=crop"
            />
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

        <h2 className="text-3xl font-semibold mb-6">What's Next?</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

          <Card className="p-6 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <h3 className="text-lg font-semibold">Code Examples</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Ready-to-use code examples in Python, JavaScript, and more.
            </p>
            <a 
              href="/docs/aj-studioz-api/examples" 
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              View Examples →
            </a>
          </Card>

          <Card className="p-6 border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <h3 className="text-lg font-semibold">Global Infrastructure</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Learn about our worldwide hosting infrastructure and regional availability.
            </p>
            <a 
              href="/docs/aj-studioz-api/hosting" 
              className="text-orange-600 hover:text-orange-700 text-sm font-medium"
            >
              Where is Hosted →
            </a>
          </Card>
        </div>
      </section>
    </>
  )
}