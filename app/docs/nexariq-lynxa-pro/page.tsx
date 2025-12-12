import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Target, Shield, ArrowRight, CheckCircle2 } from "lucide-react"

export default function NexariqPage() {
  return (
    <>
      <section className="mb-20">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">NEXARIQ Lynxa Pro</p>
        <h1 className="text-5xl font-bold mb-6">Overview</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          NEXARIQ Lynxa Pro is our specialized AI platform featuring custom-trained models optimized for complex reasoning, 
          analysis, and professional workflows. Built for users who need advanced AI capabilities with enhanced performance.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-base font-semibold">Advanced Reasoning</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Enhanced logical reasoning and problem-solving capabilities for complex tasks.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-base font-semibold">Specialized Training</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Custom-trained on high-quality datasets for professional and academic use cases.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-base font-semibold">Optimized Performance</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Engineered for high-quality outputs with consistent performance across domains.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/20">
                <Shield className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-base font-semibold">Enterprise Security</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Built with enterprise-grade security and compliance features from the ground up.
            </p>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-6">Lynxa Pro Model</h2>
        
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="space-y-6">
            <Card className="p-6 border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  lynxa-pro
                </Badge>
                <span className="text-sm text-muted-foreground">Custom Architecture</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Model Specifications</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Advanced transformer architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Enhanced context understanding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Specialized reasoning modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Multi-domain expertise</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Key Capabilities</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Complex problem decomposition and analysis</li>
                <li>• Advanced mathematical and scientific reasoning</li>
                <li>• Detailed code analysis and generation</li>
                <li>• Research and academic writing assistance</li>
                <li>• Strategic planning and decision support</li>
                <li>• Multi-step logical reasoning chains</li>
              </ul>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
            <div className="space-y-4">
              <Card className="p-4 border-l-4 border-l-blue-500">
                <h4 className="font-semibold mb-2">Research & Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Complex data analysis, literature reviews, hypothesis generation, and research methodology design.
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-l-green-500">
                <h4 className="font-semibold mb-2">Software Development</h4>
                <p className="text-sm text-muted-foreground">
                  Architecture design, code review, debugging, algorithm optimization, and technical documentation.
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-l-purple-500">
                <h4 className="font-semibold mb-2">Business Intelligence</h4>
                <p className="text-sm text-muted-foreground">
                  Strategic planning, market analysis, risk assessment, and decision support systems.
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-l-orange-500">
                <h4 className="font-semibold mb-2">Education & Training</h4>
                <p className="text-sm text-muted-foreground">
                  Curriculum design, personalized tutoring, assessment creation, and learning path optimization.
                </p>
              </Card>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-6">Getting Started</h2>
        
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white text-sm font-semibold">1</div>
              <h3 className="text-xl font-semibold">Generate API Key</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              NEXARIQ uses email-based API key generation for secure access control and usage tracking.
            </p>
            <CodeBlock
              language="bash"
              code={`curl -X POST "https://lynxa-pro-backend.vercel.app/api/keys/generate" \\
  -H "Content-Type: application/json" \\
  -d '{"email": "your-email@example.com"}'

# Response
{
  "success": true,
  "apiKey": "nxq_1234567890abcdef1234567890abcdef"
}`}
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white text-sm font-semibold">2</div>
              <h3 className="text-xl font-semibold">Make Your First Request</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Test the Lynxa Pro model with a complex reasoning task to see its capabilities.
            </p>
            <CodeBlock
              language="bash"
              code={`curl -X POST "https://lynxa-pro-backend.vercel.app/api/lynxa" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-api-key-here" \\
  -d '{
    "model": "lynxa-pro",
    "messages": [
      {
        "role": "user", 
        "content": "Analyze the pros and cons of implementing a microservices architecture for a mid-sized e-commerce platform. Consider scalability, maintenance, team structure, and cost implications."
      }
    ],
    "max_tokens": 2000,
    "temperature": 0.7
  }'`}
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white text-sm font-semibold">3</div>
              <h3 className="text-xl font-semibold">Integrate with Your Application</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Use standard HTTP clients or OpenAI-compatible libraries with custom base URL.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-medium mb-2">Python Example</h4>
                <CodeBlock
                  language="python"
                  code={`import requests

api_key = "nxq_your_key_here"
url = "https://lynxa-pro-backend.vercel.app/api/lynxa"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

data = {
    "model": "lynxa-pro",
    "messages": [
        {"role": "user", "content": "Your question here"}
    ]
}

response = requests.post(url, json=data, headers=headers)
result = response.json()
print(result["choices"][0]["message"]["content"])`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">JavaScript Example</h4>
                <CodeBook
                  language="javascript"
                  code={`const apiKey = 'nxq_your_key_here';
const url = 'https://lynxa-pro-backend.vercel.app/api/lynxa';

const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': \`Bearer \${apiKey}\`
  },
  body: JSON.stringify({
    model: 'lynxa-pro',
    messages: [
      { role: 'user', content: 'Your question here' }
    ]
  })
});

const result = await response.json();
console.log(result.choices[0].message.content);`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Card className="p-6 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <h3 className="text-lg font-semibold">Model Details</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Deep dive into Lynxa Pro's architecture, training, and performance characteristics.
            </p>
            <a 
              href="/docs/nexariq-lynxa-pro/specifications" 
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              View Specifications →
            </a>
          </Card>

          <Card className="p-6 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold">API Reference</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Complete API documentation with endpoints, authentication, and examples.
            </p>
            <a 
              href="/docs/nexariq-lynxa-pro/endpoints" 
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              API Endpoints →
            </a>
          </Card>

          <Card className="p-6 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5 text-green-600 dark:text-green-400" />
              <h3 className="text-lg font-semibold">Usage Examples</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Practical examples and best practices for different use cases and scenarios.
            </p>
            <a 
              href="/docs/nexariq-lynxa-pro/examples" 
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              See Examples →
            </a>
          </Card>
        </div>
      </section>
    </>
  )
}