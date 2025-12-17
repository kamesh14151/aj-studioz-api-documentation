import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, ExternalLink } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function Qwen3ModelPage() {
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
            src="/alibaba-logo.png" 
            alt="Alibaba Cloud logo" 
            className="w-16 h-16 object-contain"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">Qwen 2.5</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                32K Context
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Cloud Model
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                Multilingual
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
                Qwen 2.5 is Alibaba Cloud's advanced language model that excels in multilingual understanding and generation. 
                Built with state-of-the-art architecture, it provides exceptional performance in Chinese and English while 
                supporting various other languages. The model is particularly strong in reasoning, coding, and mathematical tasks.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Features</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Superior Chinese understanding</li>
                    <li>• Strong multilingual capabilities</li>
                    <li>• Advanced reasoning skills</li>
                    <li>• Code generation and analysis</li>
                    <li>• Mathematical problem solving</li>
                    <li>• Cultural context awareness</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Best Use Cases</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Chinese language applications</li>
                    <li>• Cross-lingual translation</li>
                    <li>• Educational content</li>
                    <li>• Programming assistance</li>
                    <li>• Business communications</li>
                    <li>• Content localization</li>
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
    "model": "qwen3",
    "messages": [
      {
        "role": "system", 
        "content": "You are a helpful assistant proficient in multiple languages."
      },
      {
        "role": "user",
        "content": "请帮我写一个Python函数来计算斐波那契数列"
      }
    ],
    "max_tokens": 2048,
    "temperature": 0.7
  }'`}
              />
              
              <h3 className="text-lg font-semibold mt-6">Multilingual Example</h3>
              <CodeBlock
                language="bash"
                code={`curl -X POST "https://api.ajstudioz.dev/api/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: your-api-key" \\
  -d '{
    "model": "qwen3",
    "messages": [
      {
        "role": "user",
        "content": "Translate this sentence to Chinese: Hello, how are you today?"
      }
    ],
    "temperature": 0.3
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
                <code className="bg-muted px-2 py-1 rounded">qwen3</code>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Provider</span>
                <span>Alibaba Cloud</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Context Window</span>
                <span>32,768 tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Max Output</span>
                <span>8,192 tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type</span>
                <span>Cloud-Hosted</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Languages</span>
                <span className="text-green-600">100+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Availability</span>
                <span className="text-green-600">99.5%</span>
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
                View Alibaba Docs
              </Button>
            </div>
          </Card>

          {/* Pricing */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Pricing</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Input</span>
                <span>$0.0008 / 1K tokens</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Output</span>
                <span>$0.0012 / 1K tokens</span>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between font-semibold">
                  <span>Estimated Cost</span>
                  <span className="text-green-600">~$0.003 / request</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}