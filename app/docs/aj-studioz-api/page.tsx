import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Code2, Globe, CheckCircle2, ArrowRight } from "lucide-react"
import { AnimatedFolder } from "@/components/3d-folder"
import { MiniChart } from "@/components/mini-chart"

export default function AjStudiozApiPage() {
  return (
    <>
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">AJ STUDIOZ API</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Overview</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
          AJ STUDIOZ Multi-Model API provides unified access to multiple state-of-the-art language models 
          through OpenAI-compatible endpoints. Switch between models seamlessly while using your existing code and tools.
        </p>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-12">
          <Card className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">OpenAI Compatible</h3>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Drop-in replacement for OpenAI API with identical endpoints and response formats.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Multiple Models</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Access Claude, GPT-4, Gemini, and other premium models through a single interface.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Global CDN</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Low-latency access worldwide with regional endpoints optimized for performance.
            </p>
          </Card>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">What's Next?</h2>
        
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold">Explore Models</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Learn about each model's capabilities, context limits, and best use cases.
            </p>
            <a 
              href="/docs/aj-studioz-api/models" 
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View Available Models →
            </a>
          </Card>

          <Card className="p-6 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5 text-green-600 dark:text-green-400" />
              <h3 className="text-lg font-semibold">API Reference</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Complete API documentation with endpoints, parameters, and response formats.
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
              <h3 className="text-lg font-semibold">Code Examples</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Ready-to-use code examples in Python, JavaScript, and more.
            </p>
            <a 
              href="/docs/aj-studioz-api/examples" 
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              View Examples →
            </a>
          </Card>

          <Card className="p-6 border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <h3 className="text-lg font-semibold">Global Infrastructure</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Learn about our worldwide hosting infrastructure and regional availability.
            </p>
            <a 
              href="/docs/aj-studioz-api/hosting" 
              className="text-orange-600 hover:text-orange-700 text-sm font-medium"
            >
              Where is Hosted →
            </a>
          </Card>
        </div>
      </section>
    </>
  )
}