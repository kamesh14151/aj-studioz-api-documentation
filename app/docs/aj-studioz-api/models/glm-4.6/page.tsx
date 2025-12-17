import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, ExternalLink, AlertTriangle } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function GLM46ModelPage() {
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
            src="/z-ai-logo-hd.png" 
            alt="Zhipu AI logo" 
            className="w-16 h-16 object-contain"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">GLM-4.6</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                8K Context
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Local-Hosted
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Zhipu AI
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
                GLM-4.6 is Zhipu AI's locally-hosted large language model based on the General Language Model architecture. 
                This model excels in Chinese language understanding and generation while maintaining strong performance 
                in English and other languages. It's optimized for conversational AI and content generation tasks.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Features</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Superior Chinese language processing</li>
                    <li>• Conversational AI capabilities</li>
                    <li>• Content generation and editing</li>
                    <li>• Code understanding and generation</li>
                    <li>• Cultural context awareness</li>
                    <li>• Local hosting for privacy</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Best Use Cases</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Chinese chatbots and assistants</li>
                    <li>• Content creation and writing</li>
                    <li>• Educational applications</li>
                    <li>• Business communications</li>
                    <li>• Translation services</li>
                    <li>• Programming assistance</li>
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
    "model": "glm-4.6",
    "messages": [
      {
        "role": "system", 
        "content": "You are a helpful assistant proficient in Chinese and English."
      },
      {
        "role": "user",
        "content": "Help me write a professional email in Chinese"
      }
    ],
    "max_tokens": 1024,
    "temperature": 0.8
  }'`}
              />
              
              <h3 className="text-lg font-semibold mt-6">Code Generation Example</h3>
              <CodeBlock
                language="bash"
                code={`curl -X POST "https://api.ajstudioz.dev/api/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: your-api-key" \\
  -d '{
    "model": "glm-4.6",
    "messages": [
      {
        "role": "user",
        "content": "Create a Python function to validate Chinese phone numbers"
      }
    ],
    "temperature": 0.3
  }'`}
              />
            </div>
          </Card>

          {/* Local Hosting Benefits */}
          <Card className="p-6 border-blue-200 bg-blue-50">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <AlertTriangle className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Local Hosting Benefits</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Enhanced data privacy and security</li>
                  <li>• Reduced latency for regional users</li>
                  <li>• Cost-effective for high-volume usage</li>
                  <li>• Customizable deployment options</li>
                  <li>• Direct control over model access</li>
                </ul>
              </div>
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
                <code className="bg-muted px-2 py-1 rounded">glm-4.6</code>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Provider</span>
                <span>Zhipu AI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Context Window</span>
                <span>8,192 tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Max Output</span>
                <span>8,192 tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type</span>
                <span>Local-Hosted</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Languages</span>
                <span className="text-green-600">Chinese+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Availability</span>
                <span className="text-yellow-600">90-95%</span>
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
                View Zhipu Docs
              </Button>
            </div>
          </Card>

          {/* Pricing */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Pricing</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Input</span>
                <span>$0.0003 / 1K tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Output</span>
                <span>$0.0006 / 1K tokens</span>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between font-semibold">
                  <span>Estimated Cost</span>
                  <span className="text-green-600">~$0.002 / request</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}