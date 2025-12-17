import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, ExternalLink, AlertTriangle } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function Qwen3LocalModelPage() {
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
            src="/qwen-icon-seeklogo.png" 
            alt="Qwen logo" 
            className="w-16 h-16 object-contain"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">Qwen3 Local</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                8K Context
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                Local-Hosted
              </Badge>
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                Variable Availability
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
                Qwen3 Local is a locally-hosted version of Alibaba's Qwen 2.5 model, providing cost-effective access 
                to advanced language capabilities. While running on local infrastructure, it offers the same core 
                functionality as the cloud version but with potential availability variations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Features</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cost-effective local hosting</li>
                    <li>• Multilingual capabilities</li>
                    <li>• Code generation support</li>
                    <li>• Mathematical reasoning</li>
                    <li>• Cultural context awareness</li>
                    <li>• Privacy-focused deployment</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Best Use Cases</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Development and testing</li>
                    <li>• Cost-sensitive applications</li>
                    <li>• Chinese language tasks</li>
                    <li>• Educational projects</li>
                    <li>• Prototyping and experimentation</li>
                    <li>• Local data processing</li>
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
    "model": "qwen3-local",
    "messages": [
      {
        "role": "system", 
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Write a Python function to calculate factorial"
      }
    ],
    "max_tokens": 1024,
    "temperature": 0.7
  }'`}
              />
              
              <h3 className="text-lg font-semibold mt-6">Chinese Language Example</h3>
              <CodeBlock
                language="bash"
                code={`curl -X POST "https://api.ajstudioz.dev/api/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: your-api-key" \\
  -d '{
    "model": "qwen3-local",
    "messages": [
      {
        "role": "user",
        "content": "用中文解释什么是人工智能"
      }
    ],
    "temperature": 0.5
  }'`}
              />
            </div>
          </Card>

          {/* Availability Notice */}
          <Card className="p-6 border-yellow-200 bg-yellow-50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Local Hosting Notice</h3>
                <p className="text-sm text-yellow-700 mb-3">
                  This model runs on local infrastructure and may have variable availability based on server load 
                  and maintenance schedules. Response times may be slower during peak usage.
                </p>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Availability: 90-95% uptime</li>
                  <li>• Response time: 2-10 seconds</li>
                  <li>• Queue times possible during peak hours</li>
                  <li>• Automatic failover to cloud backup when available</li>
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
                <code className="bg-muted px-2 py-1 rounded">qwen3-local</code>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Provider</span>
                <span>Alibaba Cloud (Local)</span>
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
                <span className="text-muted-foreground">Availability</span>
                <span className="text-yellow-600">Variable</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Response Time</span>
                <span className="text-yellow-600">2-10s</span>
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
                Check Status
              </Button>
            </div>
          </Card>

          {/* Pricing */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Pricing</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Input</span>
                <span>$0.0002 / 1K tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Output</span>
                <span>$0.0004 / 1K tokens</span>
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