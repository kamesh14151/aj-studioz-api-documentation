"use client"

import { ThreeDCard } from "@/components/3d-card"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Star, Brain, Zap, Code, Database } from "lucide-react"

export default function ModelsPricingPage() {
  const cardData = [
    {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
      alt: "AI Models Overview",
      text: "Claude 3.5 Sonnet",
    },
    {
      src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop&crop=center", 
      alt: "GPT Models",
      text: "GPT-4 Turbo",
    },
    {
      src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center",
      alt: "Gemini Pro",
      text: "Gemini Pro",
    },
  ];

  return (
    <>
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Getting started</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Models and Pricing</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
          Access state-of-the-art AI models through our unified platform. Transparent pricing with 
          pay-per-use rates and volume discounts for enterprise customers.
        </p>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-8 sm:mb-12">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Explore Our AI Models</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Interactive showcase of our premium AI model collection. Hover over the cards to explore different models and their capabilities.
            </p>
            <ThreeDCard cardData={cardData} />
          </div>
          
          <Card className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
              <h3 className="text-lg sm:text-xl font-semibold">Enterprise Benefits</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm mb-4 sm:mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                Volume discounts up to 40%
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                Priority support and SLA
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                Custom rate limits
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                Advanced analytics dashboard
              </li>
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
              Contact Enterprise Sales
            </Button>
          </Card>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Available Models</h2>
        
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-8 sm:mb-12">
          <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Claude 3.5 Sonnet</h3>
                <Badge variant="secondary" className="text-xs">Premium Tier</Badge>
              </div>
            </div>
            <div className="text-right mb-3 sm:mb-4">
              <div className="text-xl sm:text-2xl font-bold">$15.00</div>
              <div className="text-xs sm:text-sm text-muted-foreground">per 1M tokens</div>
            </div>
            <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground mb-3 sm:mb-4">
              <li>• 200K context window</li>
              <li>• Advanced reasoning & analysis</li>
              <li>• Superior code generation</li>
              <li>• Multimodal understanding</li>
            </ul>
            <Button variant="outline" size="sm" className="w-full">
              Try Now
            </Button>
          </Card>

          <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">GPT-4 Turbo</h3>
                <Badge variant="secondary" className="text-xs">Premium Tier</Badge>
              </div>
            </div>
            <div className="text-right mb-3 sm:mb-4">
              <div className="text-xl sm:text-2xl font-bold">$10.00</div>
              <div className="text-xs sm:text-sm text-muted-foreground">per 1M tokens</div>
            </div>
            <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground mb-3 sm:mb-4">
              <li>• 128K context window</li>
              <li>• Multimodal (text + vision)</li>
              <li>• JSON mode support</li>
              <li>• Function calling</li>
            </ul>
            <Button variant="outline" size="sm" className="w-full">
              Try Now
            </Button>
          </Card>

          <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Gemini Pro</h3>
                <Badge variant="secondary" className="text-xs">Standard Tier</Badge>
              </div>
            </div>
            <div className="text-right mb-3 sm:mb-4">
              <div className="text-xl sm:text-2xl font-bold">$7.00</div>
              <div className="text-xs sm:text-sm text-muted-foreground">per 1M tokens</div>
            </div>
            <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground mb-3 sm:mb-4">
              <li>• 32K context window</li>
              <li>• Multilingual excellence</li>
              <li>• Fast inference speed</li>
              <li>• Efficient processing</li>
            </ul>
            <Button variant="outline" size="sm" className="w-full">
              Try Now
            </Button>
          </Card>
        </div>
      </section>
    </>
  )
}