"use client"

import { Cloud, Cpu } from "lucide-react"
import { GradientCard } from "@/components/gradient-card"

export default function ModelsPage() {
  return (
    <>
      <section className="mb-12 sm:mb-16 lg:mb-20 overflow-x-hidden max-w-full w-full">
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">AJ STUDIOZ API</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Available Models</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
          Access a comprehensive collection of state-of-the-art AI models through our unified API. 
          Choose from cloud-hosted models with guaranteed uptime or local-hosted models for specialized needs.
        </p>
        
        {/* Cloud-Hosted Models Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">Cloud-Hosted Models (24/7)</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Our cloud infrastructure hosts the following models with guaranteed uptime</p>
            </div>
          </div>
          
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <GradientCard
              gradient="purple"
              badgeText="262K Context"
              badgeColor="#8b5cf6"
              title="Kimi"
              description="Ultra-long context model with 16,384 max completion tokens"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/kimi"
              imageUrl="/images (1) (1).png"
            />
            
            <GradientCard
              gradient="orange"
              badgeText="131K Context"
              badgeColor="#f59e0b"
              title="Qwen3"
              description="Advanced multilingual model with 40,960 max completion tokens"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/qwen3"
              imageUrl="/qwen-icon-seeklogo.png"
            />
            
            <GradientCard
              gradient="green"
              badgeText="131K Context"
              badgeColor="#10b981"
              title="Llama-4"
              description="Latest Llama generation with 8,192 max completion tokens"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/llama-4"
              imageUrl="/meta-color.svg"
            />
            
            <GradientCard
              gradient="gray"
              badgeText="131K Context"
              badgeColor="#6b7280"
              title="GPT-OSS"
              description="Open-source GPT variant with 65,536 max completion tokens"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/gpt-oss"
              imageUrl="/open-ai-seeklogo.png"
            />
            
            <GradientCard
              gradient="purple"
              badgeText="131K Context"
              badgeColor="#8b5cf6"
              title="GPT-OSS-120B"
              description="Large parameter GPT variant with 65,536 max completion tokens"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/gpt-oss-120b"
              imageUrl="/open-ai-seeklogo.png"
            />
            
            <GradientCard
              gradient="green"
              badgeText="131K Context"
              badgeColor="#10b981"
              title="GLM-4.5-Air"
              description="Efficient GLM model with 8,192 max completion tokens"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/glm-4.5-air"
              imageUrl="/z-ai-logo-hd.png"
            />
            
            <GradientCard
              gradient="orange"
              badgeText="131K Context"
              badgeColor="#f59e0b"
              title="ZAI-GLM-4.6"
              description="Enhanced GLM model with 40,960 max completion tokens"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/zai-glm-4.6"
              imageUrl="/z-ai-logo-hd.png"
            />
            
            <GradientCard
              gradient="purple"
              badgeText="131K Context"
              badgeColor="#8b5cf6"
              title="DeepSeek-R1-Qwen3-8B"
              description="Reasoning-optimized model with 8,192 max completion tokens"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/deepseek-r1-qwen3-8b"
              imageUrl="/deepseek-ai-icon-seeklogo.png"
            />
            
            <GradientCard
              gradient="green"
              badgeText="131K Context"
              badgeColor="#10b981"
              title="Qwen3-Coder"
              description="Code-specialized model with 8,192 max completion tokens"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/qwen3-coder"
              imageUrl="/qwen-icon-seeklogo.png"
            />
            
            <GradientCard
              gradient="gray"
              badgeText="131K Context"
              badgeColor="#6b7280"
              title="Mistral-Small-24B"
              description="Efficient Mistral variant with 8,192 max completion tokens"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/mistral-small-24b"
              imageUrl="/mistral-ai-icon-seeklogo.png"
            />
            
            <GradientCard
              gradient="gray"
              badgeText="131K Context"
              badgeColor="#6b7280"
              title="Mistral-Small-3.1-24B"
              description="Updated Mistral variant with 8,192 max completion tokens"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/mistral-small-3.1-24b"
              imageUrl="/mistral-ai-icon-seeklogo.png"
            />
            
            <GradientCard
              gradient="purple"
              badgeText="Premium Tier"
              badgeColor="#8b5cf6"
              title="DeepSeek-R1"
              description="Advanced reasoning model with premium capabilities"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/deepseek-r1"
              imageUrl="/deepseek-ai-icon-seeklogo.png"
            />
            
            <GradientCard
              gradient="purple"
              badgeText="Premium Tier"
              badgeColor="#8b5cf6"
              title="DeepSeek-R1-0528"
              description="Stable version of DeepSeek R1 reasoning model"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/deepseek-r1-0528"
              imageUrl="/deepseek-ai-icon-seeklogo.png"
            />
            
            <GradientCard
              gradient="orange"
              badgeText="Premium Tier"
              badgeColor="#f59e0b"
              title="Grok-3"
              description="xAI's advanced reasoning model by Elon Musk"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/grok-3"
              imageUrl="/xai-logo-hd.png"
            />
            
            <GradientCard
              gradient="orange"
              badgeText="High Tier"
              badgeColor="#f97316"
              title="Grok-3-Mini"
              description="Efficient version of xAI's Grok-3 model"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/grok-3-mini"
              imageUrl="/xai-logo-hd.png"
            />
            
            <GradientCard
              gradient="green"
              badgeText="High Tier"
              badgeColor="#10b981"
              title="Phi-4"
              description="Microsoft's latest Phi-4 model with advanced capabilities"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/phi-4"
              imageUrl="/Microsoft_Logo_512px.png"
            />
            
            <GradientCard
              gradient="gray"
              badgeText="Low Tier"
              badgeColor="#6b7280"
              title="Mistral-Nemo"
              description="Fast and efficient Mistral Nemo model"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/mistral-nemo"
              imageUrl="/mistral-ai-icon-seeklogo.png"
            />
          </div>
        </div>
        
        {/* GitHub Models Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">GitHub Models (FREE for Students) 🎓</h2>
              <p className="text-sm sm:text-base text-muted-foreground">FREE unlimited access to premium models via GitHub Student Pack</p>
            </div>
          </div>
          
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <GradientCard
              gradient="green"
              badgeText="🎓 FREE"
              badgeColor="#10b981"
              title="GPT-4o"
              description="Premium OpenAI GPT-4 Omni - most advanced model"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/gpt-4o"
              imageUrl="/open-ai-seeklogo.png"
            />
            
            <GradientCard
              gradient="green"
              badgeText="🎓 FREE"
              badgeColor="#10b981"
              title="GPT-4o-Mini"
              description="Fast & efficient GPT-4 - unlimited for students"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/gpt-4o-mini"
              imageUrl="/open-ai-seeklogo.png"
            />
          </div>
          
          <div className="mt-6 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Student Benefits</h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• FREE unlimited access with GitHub Student Pack</li>
                  <li>• No rate limits for qualified students</li>
                  <li>• Access to premium OpenAI models</li>
                  <li>• No credit card required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Local-Hosted Models Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="h-6 w-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-semibold">Local-Hosted Models</h2>
              <p className="text-muted-foreground">These models run on local infrastructure and may have variable availability</p>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GradientCard
              gradient="orange"
              badgeText="8K Context"
              badgeColor="#f59e0b"
              title="Qwen3-Local"
              description="Alibaba Cloud model with 8,192 max completion tokens"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/qwen3-local"
              imageUrl="/qwen-icon-seeklogo.png"
            />
            
            <GradientCard
              gradient="purple"
              badgeText="8K Context"
              badgeColor="#8b5cf6"
              title="GLM-4.6"
              description="Zhipu AI model with 8,192 max completion tokens"
              ctaText="Use Model"
              ctaHref="/docs/aj-studioz-api/models/glm-4.6"
              imageUrl="/z-ai-logo-hd.png"
            />
          </div>
        </div>

        {/* Model Usage Information */}
        <div className="mt-16 p-8 bg-muted/50 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4">How to Use These Models</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              All models are accessible through our OpenAI-compatible API. Simply change the model parameter 
              in your requests to switch between different models seamlessly.
            </p>
            <div className="bg-background p-4 rounded border">
              <code className="text-sm">
                {`curl -X POST "https://api.ajstudioz.dev/api/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: your-api-key" \\
  -d '{
    "model": "gpt-4o-mini",  // Available: gpt-4o, gpt-4o-mini, kimi, qwen3, deepseek-r1, grok-3, phi-4, etc.
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`}
              </code>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}