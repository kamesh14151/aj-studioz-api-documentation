import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Zap, Shield, Globe, Code2 } from "lucide-react"

export default function IntroductionPage() {
  return (
    <>
      <section className="mb-20">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Getting started</p>
        <h1 className="text-5xl font-bold mb-6">Introduction</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          AJ STUDIOZ provides unified access to multiple state-of-the-art AI models through developer-friendly APIs. 
          Our platform bridges the gap between cutting-edge AI research and practical applications.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">OpenAI Compatible</h3>
            </div>
            <p className="text-muted-foreground">
              Drop-in replacement for OpenAI API. Use your existing code, libraries, and tools without changes.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Multiple Models</h3>
            </div>
            <p className="text-muted-foreground">
              Access Claude, GPT-4, Gemini, and custom NEXARIQ models through a single, unified interface.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Global Infrastructure</h3>
            </div>
            <p className="text-muted-foreground">
              Low-latency access worldwide with regional endpoints optimized for performance and compliance.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/20">
                <Shield className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold">Enterprise Ready</h3>
            </div>
            <p className="text-muted-foreground">
              Built for scale with security, compliance, and reliability features required for production workloads.
            </p>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-6">Our Platform</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              AJ STUDIOZ Multi-Model API
              <Badge variant="secondary">Primary Platform</Badge>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our main API platform providing access to multiple AI models through OpenAI-compatible endpoints. 
              Perfect for developers who want to experiment with different models or switch between them dynamically.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Claude 3.5 Sonnet, GPT-4, Gemini Pro, and more</li>
              <li>OpenAI-compatible chat completions API</li>
              <li>Pay-per-use pricing with transparent costs</li>
              <li>Global CDN with sub-100ms latency</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              NEXARIQ Lynxa Pro
              <Badge variant="outline">Specialized Platform</Badge>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our specialized AI platform featuring custom-trained models optimized for specific use cases. 
              NEXARIQ focuses on high-quality outputs with advanced reasoning capabilities.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Custom Lynxa Pro model with enhanced reasoning</li>
              <li>Specialized for complex problem solving</li>
              <li>Advanced context understanding</li>
              <li>Optimized for professional workflows</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-100">Ready to get started?</h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Jump into our quick start guide to make your first API call in minutes.
          </p>
          <a 
            href="/docs/getting-started/quick-start" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Quick Start Guide →
          </a>
        </div>
      </section>
    </>
  )
}