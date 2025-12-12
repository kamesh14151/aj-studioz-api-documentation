import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Zap, Shield, Globe, Code2, Brain } from "lucide-react"
import { AnimatedFolder } from "@/components/3d-folder"
import { MiniChart } from "@/components/mini-chart"

export default function GettingStartedPage() {
  return (
    <>
      {/* Introduction */}
      <section id="introduction" className="mb-20 scroll-mt-24">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Getting started</p>
        <h1 className="text-5xl font-bold mb-6 text-balance">Welcome</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Welcome to the AJ STUDIOZ developer docs! Our API makes it easy to harness cutting-edge AI intelligence in
          your projects. Access multiple state-of-the-art language models through unified, OpenAI-compatible interfaces.
        </p>

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold mb-6">Jump right in</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border-2 group-hover:border-foreground transition-colors">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">Quickstart</h3>
              <p className="text-sm text-muted-foreground mb-3">Create an API Key and make your first request.</p>
              <span className="text-sm font-medium group-hover:underline">Learn more →</span>
            </Card>
            <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border-2 group-hover:border-foreground transition-colors">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">Tool Use</h3>
              <p className="text-sm text-muted-foreground mb-3">Let AI perform actions and look up information.</p>
              <span className="text-sm font-medium group-hover:underline">Learn more →</span>
            </Card>
            <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border-2 group-hover:border-foreground transition-colors">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">Images</h3>
              <p className="text-sm text-muted-foreground mb-3">Use AI to analyze images or perform OCR.</p>
              <span className="text-sm font-medium group-hover:underline">Learn more →</span>
            </Card>
          </div>
        </div>

        <div className="mt-12 p-4 rounded-lg bg-muted/50 border text-sm">
          <p className="text-muted-foreground italic">
            Are you a non-developer or simply looking for our consumer services? Visit{" "}
            <a href="https://ajstudioz.com" className="text-foreground underline">
              ajstudioz.com
            </a>
          </p>
        </div>
      </section>

      {/* What Makes AJ STUDIOZ Special */}
      <section id="what-makes-special" className="mb-20 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">What makes AJ STUDIOZ special?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Premium AI Models</h3>
                <p className="text-sm text-muted-foreground">
                  Access to state-of-the-art language models including Claude, GPT-4, and custom NEXARIQ models
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">OpenAI Compatible</h3>
                <p className="text-sm text-muted-foreground">
                  Drop-in replacement for OpenAI API - use your existing code and libraries
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Competitive Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Cost-effective access to premium models with transparent, pay-per-use pricing
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Global Infrastructure</h3>
                <p className="text-sm text-muted-foreground">
                  Low-latency access worldwide with regional endpoints for optimal performance
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Developer Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive documentation, SDKs, and tools to accelerate your development
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Enterprise Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Security, compliance, and reliability features built for production workloads
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}