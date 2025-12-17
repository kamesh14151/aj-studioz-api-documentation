"use client"

import { Card } from "@/components/ui/card"

export default function ProvidersPage() {
  const providers = [
    {
      title: "OpenAI",
      img: "/open-ai-seeklogo.png",
      description: "Leading AI research company",
      models: "GPT-4o, GPT-4o-mini"
    },
    {
      title: "xAI",
      img: "/xai-logo-hd.png",
      description: "Elon Musk's AI company",
      models: "Grok-3, Grok-3-mini, Grok-beta"
    },
    {
      title: "Microsoft",
      img: "/Microsoft_Logo_512px.png",
      description: "Enterprise AI solutions",
      models: "Phi-4"
    },
    {
      title: "Alibaba Cloud",
      img: "/Alibaba Cloud_idGn5T4TRR_0.png",
      description: "Chinese tech giant",
      models: "Qwen3, Qwen3-local, Qwen3-coder"
    },
    {
      title: "DeepSeek AI",
      img: "/deepseek-ai-icon-seeklogo.png",
      description: "Advanced reasoning models",
      models: "DeepSeek-R1, DeepSeek-R1-0528"
    },
    {
      title: "Zhipu AI",
      img: "/z-ai-logo-hd.png",
      description: "Chinese language expertise",
      models: "GLM-4.6, GLM-4.5-Air, ZAI-GLM-4.6"
    },
    {
      title: "Meta",
      img: "/meta-color.svg",
      description: "Open source AI models",
      models: "Llama-4"
    },
    {
      title: "Mistral AI",
      img: "/mistral-ai-icon-seeklogo.png",
      description: "European AI excellence",
      models: "Mistral-Small-24B, Mistral-Nemo"
    }
  ];

  return (
    <>
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Getting started</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">AI Providers</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-12">
          Explore our comprehensive ecosystem of AI providers and their cutting-edge models. 
          From OpenAI's GPT series to specialized models from leading tech companies worldwide.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-blue-200 dark:border-blue-800">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">8+</div>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">AI Providers</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border-green-200 dark:border-green-800">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">25+</div>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">AI Models</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900 border-purple-200 dark:border-purple-800">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">99.9%</div>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Uptime</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-900 border-orange-200 dark:border-orange-800">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">24/7</div>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Support</p>
          </Card>
        </div>

        {/* Providers Grid */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {providers.map((provider, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6 flex justify-center items-center h-[140px] bg-white dark:bg-gray-800 rounded-t-lg">
                  <img
                    alt={provider.title}
                    className="max-h-16 max-w-24 object-contain filter group-hover:brightness-110 transition-all duration-300"
                    src={provider.img}
                  />
                </div>
              </div>
              <div className="p-5">
                <div className="w-full">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">{provider.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{provider.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {provider.models.split(", ").map((model, idx) => (
                      <span key={idx} className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">High Performance</h3>
            </div>
            <p className="text-gray-600">
              Lightning-fast inference with sub-second response times across all provider models.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Unified API</h3>
            </div>
            <p className="text-gray-600">
              Single API endpoint to access all providers - switch between models seamlessly.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100">
                <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Enterprise Security</h3>
            </div>
            <p className="text-gray-600">
              Bank-grade security with SOC 2 compliance and advanced encryption protocols.
            </p>
          </Card>
        </div>
      </section>
    </>
  )
}