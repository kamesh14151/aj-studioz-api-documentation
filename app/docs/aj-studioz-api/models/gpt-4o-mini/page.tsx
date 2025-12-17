import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, ExternalLink } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function GPT4OMiniModelPage() {
  return (
    <>
      <div className="mb-8">
        <a 
          href="/docs/aj-studioz-api/models" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Models
        </a>
        
        <div className="flex items-center gap-4 mb-6">
          <img 
            src="/OpenAI_Logo.svg.png" 
            alt="OpenAI logo" 
            className="w-16 h-16 object-contain"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">GPT-4o Mini</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                128K Context
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Cloud Model
              </Badge>
              <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                Fast & Efficient
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {/* Model Overview */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Model Overview</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                GPT-4o Mini is OpenAI's most cost-efficient small model that's smarter and cheaper than GPT-3.5 Turbo. 
                It's designed to handle a wide range of tasks with excellent performance while being incredibly fast and affordable. 
                Perfect for applications requiring quick responses and high throughput.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Features</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Extremely cost-effective</li>
                    <li>• Fast response times</li>
                    <li>• High intelligence</li>
                    <li>• 128K context window</li>
                    <li>• Multimodal capabilities</li>
                    <li>• Function calling support</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Best Use Cases</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Chatbots and customer service</li>
                    <li>• Text generation and editing</li>
                    <li>• Summarization</li>
                    <li>• Code generation and debugging</li>
                    <li>• Data extraction and analysis</li>
                    <li>• High-volume applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* API Usage */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">API Usage</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Request</h3>
              <CodeBlock
                language="bash"
                code={`curl -X POST "https://api.ajstudioz.dev/api/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: your-api-key" \\
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      {
        "role": "system", 
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Write a brief summary of AI trends in 2024"
      }
    ],
    "max_tokens": 1000,
    "temperature": 0.7
  }'`}
              />
              
              <h3 className="text-lg font-semibold mt-6">Function Calling Example</h3>
              <CodeBlock
                language="bash"
                code={`curl -X POST "https://api.ajstudioz.dev/api/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: your-api-key" \\
  -d '{
    "model": "gpt-4o-mini",
    "messages": [{"role": "user", "content": "What\\'s the weather like?"}],
    "functions": [
      {
        "name": "get_weather",
        "description": "Get weather information",
        "parameters": {
          "type": "object",
          "properties": {
            "location": {"type": "string"}
          }
        }
      }
    ]
  }'`}
              />
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Model Specifications */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Model ID</span>
                <code className="bg-muted px-2 py-1 rounded">gpt-4o-mini</code>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Provider</span>
                <span>OpenAI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Context Window</span>
                <span>128,000 tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Max Output</span>
                <span>16,384 tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type</span>
                <span>Cloud-Hosted</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Multimodal</span>
                <span className="text-green-600">Yes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Availability</span>
                <span className="text-green-600">99.9%</span>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Button className="w-full" variant="default">
                <Copy className="h-4 w-4 mr-2" />
                Copy Model ID
              </Button>
              <Button className="w-full" variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                View OpenAI Docs
              </Button>
            </div>
          </Card>

          {/* Pricing */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Pricing</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Input</span>
                <span>$0.00015 / 1K tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Output</span>
                <span>$0.0006 / 1K tokens</span>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between font-semibold">
                  <span>Estimated Cost</span>
                  <span className="text-green-600">~$0.001 / request</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}