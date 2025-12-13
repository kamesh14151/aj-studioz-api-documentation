import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code, Terminal, FileText } from "lucide-react"

export default function CodeExamplesPage() {
  return (
    <>
      <section>
        <div className="mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">AJ STUDIOZ API</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Code Examples</h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Complete code examples to get you started with the AJ STUDIOZ API in multiple programming languages.
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Quick Start Example</h2>
        
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
              <Code className="h-5 w-5 sm:h-6 sm:w-6" />
              Python with OpenAI SDK
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              The easiest way to get started is using the official OpenAI Python library. Just change the base URL and you're ready to go!
            </p>
            <CodeBlock
              language="python"
              code={`from openai import OpenAI

# Initialize client
client = OpenAI(
    api_key="aj-demo123456789abcdef",  # Use demo key for testing
    base_url="https://api.ajstudioz.dev/api"
)

# Chat with Claude
response = client.chat.completions.create(
    model="claude-3.5-sonnet",
    messages=[
        {"role": "system", "content": "You are a coding assistant."},
        {"role": "user", "content": "Write a Python function to calculate fibonacci"}
    ],
    max_tokens=500
)

print(response.choices[0].message.content)

# Switch to GPT-4 with the same code
response = client.chat.completions.create(
    model="gpt-4-turbo",  # Just change the model name
    messages=[
        {"role": "user", "content": "Explain the code above"}
    ]
)

print(response.choices[0].message.content)`}
            />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
              <Terminal className="h-5 w-5 sm:h-6 sm:w-6" />
              JavaScript/TypeScript
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Works seamlessly with Node.js, React, Next.js, and other JavaScript frameworks.
            </p>
            <CodeBlock
              language="javascript"
              code={`import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'aj-demo123456789abcdef',
  baseURL: 'https://api.ajstudioz.dev/api',
});

async function chatWithAI() {
  // Try different models easily
  const models = ['claude-3.5-sonnet', 'gpt-4-turbo', 'gemini-pro'];
  
  for (const model of models) {
    console.log(\`\\n--- Testing \${model} ---\`);
    
    const response = await openai.chat.completions.create({
      model: model,
      messages: [
        { role: 'user', content: 'Write a haiku about programming' }
      ],
      max_tokens: 100
    });
    
    console.log(response.choices[0].message.content);
  }
}

chatWithAI().catch(console.error);`}
            />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
              cURL Example
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Direct HTTP requests using cURL for testing or shell scripting.
            </p>
            <CodeBlock
              language="bash"
              code={`curl -X POST https://api.ajstudioz.dev/api/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer aj-demo123456789abcdef" \\
  -d '{
    "model": "claude-3.5-sonnet",
    "messages": [
      {
        "role": "user",
        "content": "Hello, how are you?"
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'`}
            />
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 mt-8 sm:mt-12">Advanced Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Streaming Responses</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Get real-time streaming responses for better user experience in chat applications.
            </p>
            <CodeBlock
              language="python"
              code={`from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.ajstudioz.dev/api"
)

# Streaming chat completion
stream = client.chat.completions.create(
    model="claude-3.5-sonnet",
    messages=[
        {"role": "user", "content": "Tell me a story about AI"}
    ],
    stream=True,
    max_tokens=500
)

for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="")

print("\\n")  # New line after streaming is complete`}
            />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Error Handling</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Robust error handling for production applications.
            </p>
            <CodeBlock
              language="python"
              code={`from openai import OpenAI
import time
from typing import Optional

def chat_with_retry(
    client: OpenAI,
    model: str,
    messages: list,
    max_retries: int = 3
) -> Optional[str]:
    """Chat with automatic retry on rate limits and temporary failures."""
    
    for attempt in range(max_retries):
        try:
            response = client.chat.completions.create(
                model=model,
                messages=messages,
                max_tokens=500
            )
            return response.choices[0].message.content
            
        except Exception as e:
            if "rate_limit" in str(e).lower() and attempt < max_retries - 1:
                # Exponential backoff for rate limits
                wait_time = 2 ** attempt
                print(f"Rate limited, waiting {wait_time}s...")
                time.sleep(wait_time)
                continue
            elif attempt == max_retries - 1:
                print(f"Failed after {max_retries} attempts: {e}")
                return None
            else:
                print(f"Attempt {attempt + 1} failed: {e}")
                time.sleep(1)
    
    return None

# Usage
client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.ajstudioz.dev/api"
)

result = chat_with_retry(
    client,
    "claude-3.5-sonnet",
    [{"role": "user", "content": "Hello!"}]
)

if result:
    print(result)
else:
    print("Failed to get response")`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Model Comparison</h3>
            <p className="text-muted-foreground mb-4">
              Compare responses from different models for the same prompt.
            </p>
            <CodeBlock
              language="javascript"
              code={`import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.ajstudioz.dev/api',
});

async function compareModels(prompt) {
  const models = [
    'claude-3.5-sonnet',
    'gpt-4-turbo',
    'gemini-pro'
  ];

  const results = await Promise.allSettled(
    models.map(async (model) => {
      const response = await openai.chat.completions.create({
        model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 200,
        temperature: 0.7
      });
      
      return {
        model,
        response: response.choices[0].message.content,
        usage: response.usage
      };
    })
  );

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(\`\\n--- \${result.value.model} ---\`);
      console.log(result.value.response);
      console.log(\`Tokens used: \${result.value.usage.total_tokens}\`);
    } else {
      console.log(\`\\n--- \${models[index]} (Failed) ---\`);
      console.log('Error:', result.reason);
    }
  });
}

// Usage
compareModels("Explain quantum computing in simple terms");`}
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Card className="p-6 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold">Available Models</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Explore all available AI models and their specific capabilities.
            </p>
            <a 
              href="/docs/aj-studioz-api/models" 
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View Models →
            </a>
          </Card>

          <Card className="p-6 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5 text-green-600 dark:text-green-400" />
              <h3 className="text-lg font-semibold">API Reference</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Complete API documentation with all endpoints and parameters.
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
              <h3 className="text-lg font-semibold">Get Started</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Learn the basics and get your first API call working.
            </p>
            <a 
              href="/docs/aj-studioz-api" 
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Overview →
            </a>
          </Card>
        </div>
      </section>
    </>
  )
}