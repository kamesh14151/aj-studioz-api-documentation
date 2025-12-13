import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ApiEndpointsPage() {
  return (
    <>
      <section className="mb-12 sm:mb-16 lg:mb-20 overflow-x-hidden max-w-full w-full">
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">AJ STUDIOZ API</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">API Endpoints</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
          Complete reference for all AJ STUDIOZ API endpoints. Our API is fully OpenAI-compatible, 
          making it easy to integrate with existing tools and libraries.
        </p>

        <div className="space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Base URL</h2>
            <div className="bg-muted/50 border rounded-lg p-3 sm:p-4 overflow-x-auto">
              <code className="text-xs sm:text-sm whitespace-nowrap">https://api.ajstudioz.dev/api</code>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Authentication</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              All API requests require authentication using your API key in the request headers.
            </p>
            <div className="overflow-x-auto">
              <CodeBlock
                language="bash"
                code={`# Include your API key in the request headers
curl -H "X-API-Key: your-api-key-here" \\
     -H "Authorization: Bearer your-api-key-here"  # Alternative format`}
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Chat Completions</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Create chat completions using any available model with OpenAI-compatible format.
            </p>
            <div className="overflow-x-auto">
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

            <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Request Parameters</h3>
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="space-y-4">
                    <div className="hidden md:grid grid-cols-3 gap-2 sm:gap-4 font-medium text-xs sm:text-sm border-b pb-2">
                      <span>Parameter</span>
                      <span>Type</span>
                      <span>Description</span>
                    </div>
                    
                    {/* Mobile: Stack layout, Desktop: Grid layout */}
                    <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 text-sm">
                      <div className="md:contents">
                        <div className="mb-2 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Parameter: </span>
                          <code className="text-blue-600">model</code>
                        </div>
                        <div className="mb-2 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Type: </span>
                          <span>string</span>
                        </div>
                        <div className="mb-4 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Description: </span>
                          <span>Model to use for completion (e.g., "claude-3.5-sonnet")</span>
                        </div>
                      </div>
                      
                      <div className="md:contents">
                        <div className="mb-2 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Parameter: </span>
                          <code className="text-blue-600">messages</code>
                        </div>
                        <div className="mb-2 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Type: </span>
                          <span>array</span>
                        </div>
                        <div className="mb-4 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Description: </span>
                          <span>Array of message objects with role and content</span>
                        </div>
                      </div>
                      
                      <div className="md:contents">
                        <div className="mb-2 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Parameter: </span>
                          <code className="text-blue-600">max_tokens</code>
                        </div>
                        <div className="mb-2 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Type: </span>
                          <span>integer</span>
                        </div>
                        <div className="mb-4 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Description: </span>
                          <span>Maximum tokens to generate (optional)</span>
                        </div>
                      </div>
                      
                      <div className="md:contents">
                        <div className="mb-2 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Parameter: </span>
                          <code className="text-blue-600">temperature</code>
                        </div>
                        <div className="mb-2 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Type: </span>
                          <span>float</span>
                        </div>
                        <div className="mb-4 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Description: </span>
                          <span>Sampling temperature between 0 and 1 (optional)</span>
                        </div>
                      </div>
                      
                      <div className="md:contents">
                        <div className="mb-2 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Parameter: </span>
                          <code className="text-blue-600">stream</code>
                        </div>
                        <div className="mb-2 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Type: </span>
                          <span>boolean</span>
                        </div>
                        <div className="mb-4 md:mb-0">
                          <span className="text-xs text-muted-foreground md:hidden">Description: </span>
                          <span>Enable streaming response (optional)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">List Models</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Get a list of all available models and their capabilities.
            </p>
            <div className="overflow-x-auto">
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
    },
    {
      "id": "kimi",
      "object": "model", 
      "owned_by": "moonshot",
      "context_length": 262144
    }
  ]
}`}
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Response Format</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              All responses follow OpenAI's standard format for maximum compatibility.
            </p>
            <div className="overflow-x-auto">
              <CodeBlock
                language="json"
                code={`{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "claude-3.5-sonnet",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! I'm Claude, an AI assistant created by Anthropic..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 15,
    "total_tokens": 25
  }
}`}
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Error Handling</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              The API uses standard HTTP response codes to indicate success or failure.
            </p>
            <div className="space-y-4">
              <Card className="p-4">
                <div className="space-y-4">
                  <div className="hidden sm:grid grid-cols-3 gap-4 font-medium text-sm border-b pb-2">
                    <span>Status Code</span>
                    <span>Error Type</span>
                    <span>Description</span>
                  </div>
                  
                  {/* Mobile: Card layout, Desktop: Grid layout */}
                  <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 text-sm">
                    <div className="flex flex-col space-y-1 sm:contents">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground sm:hidden">Status:</span>
                        <Badge variant="outline">200</Badge>
                      </div>
                      <div className="flex items-center gap-2 sm:block">
                        <span className="text-xs text-muted-foreground sm:hidden">Type:</span>
                        <span>Success</span>
                      </div>
                      <div className="flex items-start gap-2 sm:block">
                        <span className="text-xs text-muted-foreground sm:hidden">Description:</span>
                        <span>Request completed successfully</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-1 sm:contents">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground sm:hidden">Status:</span>
                        <Badge variant="destructive">400</Badge>
                      </div>
                      <div className="flex items-center gap-2 sm:block">
                        <span className="text-xs text-muted-foreground sm:hidden">Type:</span>
                        <span>Bad Request</span>
                      </div>
                      <div className="flex items-start gap-2 sm:block">
                        <span className="text-xs text-muted-foreground sm:hidden">Description:</span>
                        <span>Invalid request parameters</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-1 sm:contents">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground sm:hidden">Status:</span>
                        <Badge variant="destructive">401</Badge>
                      </div>
                      <div className="flex items-center gap-2 sm:block">
                        <span className="text-xs text-muted-foreground sm:hidden">Type:</span>
                        <span>Unauthorized</span>
                      </div>
                      <div className="flex items-start gap-2 sm:block">
                        <span className="text-xs text-muted-foreground sm:hidden">Description:</span>
                        <span>Invalid or missing API key</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-1 sm:contents">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground sm:hidden">Status:</span>
                        <Badge variant="destructive">429</Badge>
                      </div>
                      <div className="flex items-center gap-2 sm:block">
                        <span className="text-xs text-muted-foreground sm:hidden">Type:</span>
                        <span>Rate Limited</span>
                      </div>
                      <div className="flex items-start gap-2 sm:block">
                        <span className="text-xs text-muted-foreground sm:hidden">Description:</span>
                        <span>Too many requests</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-1 sm:contents">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground sm:hidden">Status:</span>
                        <Badge variant="destructive">500</Badge>
                      </div>
                      <div className="flex items-center gap-2 sm:block">
                        <span className="text-xs text-muted-foreground sm:hidden">Type:</span>
                        <span>Server Error</span>
                      </div>
                      <div className="flex items-start gap-2 sm:block">
                        <span className="text-xs text-muted-foreground sm:hidden">Description:</span>
                        <span>Internal server error</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}