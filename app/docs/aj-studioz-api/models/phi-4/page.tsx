import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, ExternalLink } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function Phi4ModelPage() {
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
            src="/Microsoft_Logo_512px.png" 
            alt="Microsoft logo" 
            className="w-16 h-16 object-contain"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">Phi-4</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                High Tier
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Microsoft Model
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                Advanced Reasoning
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
                Phi-4 is Microsoft's latest advancement in the Phi family of small language models, designed to deliver 
                exceptional performance while maintaining efficiency. Despite its smaller size, Phi-4 demonstrates 
                remarkable capabilities in reasoning, code generation, and general language understanding tasks.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Features</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Efficient small model architecture</li>
                    <li>• Advanced reasoning capabilities</li>
                    <li>• Strong code generation skills</li>
                    <li>• Fast inference speeds</li>
                    <li>• Cost-effective deployment</li>
                    <li>• Microsoft enterprise integration</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Best Use Cases</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Code assistance and debugging</li>
                    <li>• Educational content generation</li>
                    <li>• Business process automation</li>
                    <li>• Technical documentation</li>
                    <li>• Data analysis and insights</li>
                    <li>• Enterprise applications</li>
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
    "model": "phi-4",
    "messages": [
      {
        "role": "system", 
        "content": "You are a helpful assistant specialized in coding and reasoning."
      },
      {
        "role": "user",
        "content": "Explain the concept of recursion with a Python example"
      }
    ],
    "max_tokens": 2048,
    "temperature": 0.7
  }'`}
              />
              
              <h3 className="text-lg font-semibold mt-6">Code Generation Example</h3>
              <CodeBlock
                language="bash"
                code={`curl -X POST "https://api.ajstudioz.dev/api/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: your-api-key" \\
  -d '{
    "model": "phi-4",
    "messages": [
      {
        "role": "user",
        "content": "Create a Python class for managing a simple inventory system"
      }
    ],
    "temperature": 0.3
  }'`}
              />
            </div>
          </Card>

          {/* Microsoft Integration */}
          <Card className="p-6 border-blue-200 bg-blue-50">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Microsoft Ecosystem</h2>
            <div className="space-y-4 text-blue-700">
              <p>
                Phi-4 is designed to integrate seamlessly with Microsoft's enterprise ecosystem, 
                including Azure AI services, Office 365, and Teams applications.
              </p>
              <ul className="space-y-2">
                <li>• Native Azure integration</li>
                <li>• Office 365 Copilot compatibility</li>
                <li>• Teams bot development</li>
                <li>• Power Platform integration</li>
              </ul>
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
                <code className="bg-muted px-2 py-1 rounded">phi-4</code>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Provider</span>
                <span>Microsoft</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Context Window</span>
                <span>16,384 tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Max Output</span>
                <span>4,096 tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type</span>
                <span>Cloud-Hosted</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Model Size</span>
                <span className="text-green-600">Small</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tier</span>
                <span className="text-green-600">High</span>
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
                View Microsoft Docs
              </Button>
            </div>
          </Card>

          {/* Pricing */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Pricing</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Input</span>
                <span>$0.001 / 1K tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Output</span>
                <span>$0.003 / 1K tokens</span>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between font-semibold">
                  <span>Estimated Cost</span>
                  <span className="text-green-600">~$0.008 / request</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}