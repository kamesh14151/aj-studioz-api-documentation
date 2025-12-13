import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Key, Shield, Eye, EyeOff } from "lucide-react"

export default function AuthenticationPage() {
  return (
    <>
      <section className="mb-12 sm:mb-16 lg:mb-20 overflow-x-hidden">
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Key Information</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Authentication</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
          Secure access to AJ STUDIOZ APIs using API keys. Our platforms use different authentication methods 
          optimized for their specific use cases and security requirements.
        </p>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 mb-8 sm:mb-10 lg:mb-12">
          <Card className="p-4 sm:p-6 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Key className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">AJ STUDIOZ Multi-Model</h3>
                <Badge variant="secondary" className="mt-1">X-API-Key Header</Badge>
              </div>
            </div>
            <p className="text-muted-foreground">
              Simple API key authentication using custom headers. Keys start with <code>aj-</code>
            </p>
          </Card>

          <Card className="p-4 sm:p-6 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">NEXARIQ Lynxa Pro</h3>
                <Badge variant="outline" className="mt-1">Bearer Token</Badge>
              </div>
            </div>
            <p className="text-muted-foreground">
              OAuth 2.0 Bearer token authentication. Keys start with <code>nxq_</code>
            </p>
          </Card>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">AJ STUDIOZ Multi-Model Authentication</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">API Key Format</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              All API requests to AJ STUDIOZ Multi-Model require authentication using an API key in the request headers. 
              Keys follow a specific format for easy identification and security.
            </p>
            
            <div className="bg-muted/50 border rounded-lg p-4 mb-4">
              <code className="text-sm">aj-[random-string-of-16-characters]</code>
              <p className="text-xs text-muted-foreground mt-2">
                Example: <code>aj-demo123456789abcdef</code>
              </p>
            </div>

            <CodeBlock
              language="bash"
              code={`# Include the API key in the X-API-Key header
curl -X POST "https://api.ajstudioz.dev/api/chat" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: your-api-key-here" \\
  -d '{
    "model": "kimi",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`}
            />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Demo API Key</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              For testing and development, you can use our demo API key with limited rate limits:
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Key className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-blue-900 dark:text-blue-100">Demo Key</span>
              </div>
              <code className="text-sm text-blue-800 dark:text-blue-200">aj-demo123456789abcdef</code>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
                Rate limit: 10 requests per minute • No billing required
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Production Keys</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              For production usage, contact our team to get your personal API key with:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
              <li>Custom rate limits based on your needs</li>
              <li>Usage analytics and monitoring</li>
              <li>Priority support and SLA</li>
              <li>Advanced features and model access</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">SDK Integration</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Use with OpenAI-compatible libraries by setting the base URL and API key:
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Python</h4>
                <CodeBlock
                  language="python"
                  code={`from openai import OpenAI

# Initialize client with AJ STUDIOZ endpoint
client = OpenAI(
    api_key="your-api-key-here",  # Replace with your API key
    base_url="https://api.ajstudioz.dev/api"
)

# The API key is automatically included in headers`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">JavaScript/Node.js</h4>
                <CodeBlock
                  language="javascript"
                  code={`import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'your-api-key-here',  // Replace with your API key
  baseURL: 'https://api.ajstudioz.dev/api',
});

// Authentication is handled automatically`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">cURL</h4>
                <CodeBlock
                  language="bash"
                  code={`# Manual header specification
curl -X POST "https://api.ajstudioz.dev/api/chat" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: your-api-key-here" \\
  -d '{"model": "kimi", "messages": [...]}'`}
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 mt-12 sm:mt-16">NEXARIQ Lynxa Pro Authentication</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Bearer Token Authentication</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              NEXARIQ uses standard OAuth 2.0 Bearer token authentication. All API keys start with <code>nxq_</code> 
              for easy identification and security validation.
            </p>
            
            <CodeBlock
              language="bash"
              code={`# Include the API key as a Bearer token
Authorization: Bearer YOUR_API_KEY

# Example request
curl -X POST "https://lynxa-pro-backend.vercel.app/api/lynxa" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer nxq_your_key_here" \\
  -d '{"model": "lynxa-pro", "messages": [...]}'`}
            />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Key Generation</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              NEXARIQ requires email-based API key generation for access control and usage tracking:
            </p>
            
            <CodeBlock
              language="bash"
              code={`# Generate new API key
curl -X POST "https://lynxa-pro-backend.vercel.app/api/keys/generate" \\
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
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Key Management</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Each email address can have one active API key. Generating a new key will invalidate the previous one:
            </p>
            
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
              <li>One key per email address</li>
              <li>Keys don't expire but can be regenerated</li>
              <li>Immediate activation after generation</li>
              <li>Usage tracked per key for analytics</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 p-4 sm:p-6 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-amber-900 dark:text-amber-100 mb-2">Security Best Practices</h3>
              <ul className="text-amber-800 dark:text-amber-200 space-y-1 text-sm">
                <li>• Never expose API keys in client-side code or public repositories</li>
                <li>• Use environment variables to store API keys in production</li>
                <li>• Implement proper key rotation policies for enhanced security</li>
                <li>• Monitor API usage regularly for unauthorized access</li>
                <li>• Use HTTPS for all API requests to protect keys in transit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}