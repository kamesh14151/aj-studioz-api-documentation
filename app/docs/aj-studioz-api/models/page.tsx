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
              title="Moonshot Kimi"
              description="Ultra-long context model with 16,384 max completion tokens"
              ctaText="Use Model"
              ctaHref="#kimi"
              imageUrl="/images (1) (1).png"
            />
            
            <GradientCard
              gradient="orange"
              badgeText="131K Context"
              badgeColor="#f59e0b"
              title="Qwen3"
              description="Advanced multilingual model with 40,960 max tokens"
              ctaText="Use Model"
              ctaHref="#qwen3"
              imageUrl="/qwen-icon-seeklogo.png"
            />
            
            <GradientCard
              gradient="green"
              badgeText="131K Context"
              badgeColor="#10b981"
              title="Llama-4"
              description="Latest Llama generation with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#llama4"
              imageUrl="/meta-color.svg"
            />
            
            <GradientCard
              gradient="gray"
              badgeText="131K Context"
              badgeColor="#6b7280"
              title="GPT-OSS"
              description="Open-source GPT variant with 65,536 max tokens"
              ctaText="Use Model"
              ctaHref="#gpt-oss"
              imageUrl="/open-ai-seeklogo.png"
            />
            
            <GradientCard
              gradient="purple"
              badgeText="131K Context"
              badgeColor="#8b5cf6"
              title="GPT-OSS-120B"
              description="Large parameter GPT variant with 65,536 max tokens"
              ctaText="Use Model"
              ctaHref="#gpt-oss-120b"
              imageUrl="/open-ai-seeklogo.png"
            />
            
            <GradientCard
              gradient="green"
              badgeText="131K Context"
              badgeColor="#10b981"
              title="GLM-4.5-Air"
              description="Efficient GLM model with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#glm-4.5-air"
              imageUrl="/z-ai-logo-hd.png"
            />
            
            <GradientCard
              gradient="orange"
              badgeText="131K Context"
              badgeColor="#f59e0b"
              title="ZAI-GLM-4.6"
              description="Enhanced GLM model with 40,960 max tokens"
              ctaText="Use Model"
              ctaHref="#zai-glm-4.6"
              imageUrl="/z-ai-logo-hd.png"
            />
            
            <GradientCard
              gradient="purple"
              badgeText="131K Context"
              badgeColor="#8b5cf6"
              title="DeepSeek-R1"
              description="Reasoning-optimized model with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#deepseek-r1"
              imageUrl="/deepseek-ai-icon-seeklogo.png"
            />
            
            <GradientCard
              gradient="green"
              badgeText="131K Context"
              badgeColor="#10b981"
              title="Qwen3-Coder"
              description="Code-specialized model with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#qwen3-coder"
              imageUrl="/qwen-icon-seeklogo.png"
            />
            
            <GradientCard
              gradient="gray"
              badgeText="131K Context"
              badgeColor="#6b7280"
              title="Mistral-Small-24B"
              description="Efficient Mistral variant with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#mistral-small-24b"
              imageUrl="/mistral-ai-icon-seeklogo.png"
            />
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
              description="Alibaba Cloud model with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#qwen3-local"
              imageUrl="/qwen-icon-seeklogo.png"
            />
            
            <GradientCard
              gradient="purple"
              badgeText="8K Context"
              badgeColor="#8b5cf6"
              title="GLM-4.6"
              description="Zhipu AI model with 8,192 max tokens"
              ctaText="Use Model"
              ctaHref="#glm-4.6"
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
    "model": "kimi",  // Change this to any model ID
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