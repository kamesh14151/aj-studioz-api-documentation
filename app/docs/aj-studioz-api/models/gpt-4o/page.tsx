import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, ExternalLink } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function GPT4oModelPage() {
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
            src="/open-ai-seeklogo.png" 
            alt="OpenAI logo" 
            className="w-16 h-16 object-contain"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">GPT-4o</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                🎓 FREE
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Premium Model
              </Badge>
              <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                Multimodal
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
                GPT-4o (GPT-4 Omni) is OpenAI's most advanced multimodal model, capable of processing text, images, audio, 
                and video. It delivers GPT-4 level intelligence but is much faster and 50% cheaper. Available FREE for 
                students through the GitHub Student Pack with unlimited usage.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Features</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Multimodal capabilities (text, image, audio)</li>
                    <li>• Advanced reasoning and analysis</li>
                    <li>• Real-time conversation support</li>
                    <li>• Superior code generation</li>
                    <li>• Complex problem solving</li>
                    <li>• Creative writing excellence</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Best Use Cases</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Advanced AI applications</li>
                    <li>• Image analysis and generation</li>
                    <li>• Complex coding projects</li>
                    <li>• Research and analysis</li>
                    <li>• Educational content creation</li>
                    <li>• Business automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* API Usage */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">API Usage</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Text Request</h3>
              <CodeBlock
                language="bash"
                code={`curl -X POST "https://api.ajstudioz.dev/api/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: your-api-key" \\
  -d '{
    "model": "gpt-4o",
    "messages": [
      {
        "role": "system", 
        "content": "You are a helpful assistant with advanced reasoning capabilities."
      },
      {
        "role": "user",
        "content": "Explain quantum computing in simple terms"
      }
    ],
    "max_tokens": 2048,
    "temperature": 0.7
  }'`}
              />
              
              <h3 className="text-lg font-semibold mt-6">Vision Capabilities Example</h3>
              <CodeBlock
                language="bash"
                code={`curl -X POST "https://api.ajstudioz.dev/api/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: your-api-key" \\
  -d '{
    "model": "gpt-4o",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "What\\'s in this image?"
          },
          {
            "type": "image_url",
            "image_url": {
              "url": "https://example.com/image.jpg"
            }
          }
        ]
      }
    ]
  }'`}
              />
            </div>
          </Card>

          {/* Student Benefits */}
          <Card className="p-6 border-green-200 bg-green-50">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Student Benefits 🎓</h2>
            <div className="space-y-4 text-green-700">
              <p>
                GPT-4o is completely FREE for students with unlimited usage through the GitHub Student Pack!
              </p>
              <ul className="space-y-2">
                <li>• No rate limits or usage caps</li>
                <li>• Full access to premium features</li>
                <li>• Multimodal capabilities included</li>
                <li>• No credit card required</li>
              </ul>
              <div className="mt-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Get GitHub Student Pack
                </Button>
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
                <code className="bg-muted px-2 py-1 rounded">gpt-4o</code>
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
                <span>GitHub Models</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Multimodal</span>
                <span className="text-green-600">Yes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Student Access</span>
                <span className="text-green-600">FREE</span>
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
                <span className="text-muted-foreground">Students</span>
                <span className="text-green-600 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Regular Input</span>
                <span>$0.0025 / 1K tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Regular Output</span>
                <span>$0.01 / 1K tokens</span>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between font-semibold">
                  <span>Student Cost</span>
                  <span className="text-green-600">$0.00</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}