"use client"

import {Card, CardBody, CardFooter, Image} from "@heroui/card";

export default function ProvidersPage() {
  const providers = [
    {
      title: "OpenAI",
      img: "/OpenAI_Logo.svg.png",
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
      img: "/alibaba-logo.png",
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
          <Card className="text-center">
            <CardBody>
              <div className="text-2xl font-bold text-blue-600">8+</div>
              <p className="text-sm text-gray-600">AI Providers</p>
            </CardBody>
          </Card>
          <Card className="text-center">
            <CardBody>
              <div className="text-2xl font-bold text-blue-600">25+</div>
              <p className="text-sm text-gray-600">AI Models</p>
            </CardBody>
          </Card>
          <Card className="text-center">
            <CardBody>
              <div className="text-2xl font-bold text-blue-600">99.9%</div>
              <p className="text-sm text-gray-600">Uptime</p>
            </CardBody>
          </Card>
          <Card className="text-center">
            <CardBody>
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <p className="text-sm text-gray-600">Support</p>
            </CardBody>
          </Card>
        </div>

        {/* Providers Grid */}
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {providers.map((provider, index) => (
            <Card 
              key={index} 
              isPressable 
              shadow="sm" 
              className="hover:shadow-lg transition-all duration-200"
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={provider.title}
                  className="w-full object-contain h-[140px] p-4"
                  radius="lg"
                  shadow="sm"
                  src={provider.img}
                  width="100%"
                />
              </CardBody>
              <CardFooter className="text-small flex-col items-start">
                <div className="w-full">
                  <div className="flex justify-between items-start mb-2">
                    <b className="text-lg">{provider.title}</b>
                  </div>
                  <p className="text-default-500 text-xs mb-2">{provider.description}</p>
                  <p className="text-primary text-xs font-medium">{provider.models}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Card>
            <CardBody>
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
            </CardBody>
          </Card>

          <Card>
            <CardBody>
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
            </CardBody>
          </Card>

          <Card>
            <CardBody>
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
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  )
}