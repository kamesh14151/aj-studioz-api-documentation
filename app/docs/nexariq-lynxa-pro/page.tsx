import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Target, Shield, ArrowRight, CheckCircle2 } from "lucide-react"

export default function NexariqPage() {
  return (
    <>
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">NEXARIQ Lynxa Pro</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Overview</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
          NEXARIQ Lynxa Pro is our specialized AI platform featuring custom-trained models optimized for complex reasoning, 
          analysis, and professional workflows. Built for users who need advanced AI capabilities with enhanced performance.
        </p>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-10 lg:mb-12">
          <Card className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold">Advanced Reasoning</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Enhanced logical reasoning and problem-solving capabilities for complex tasks.
            </p>
          </Card>

          <Card className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold">Specialized Training</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Custom-trained on high-quality datasets for professional and academic use cases.
            </p>
          </Card>

          <Card className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold">Optimized Performance</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Engineered for high-quality outputs with consistent performance across domains.
            </p>
          </Card>

          <Card className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/20">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold">Enterprise Security</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Built with enterprise-grade security and compliance features from the ground up.
            </p>
          </Card>
        </div>


        <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-3">
          <Card className="p-4 sm:p-6 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 dark:text-purple-400" />
              <h3 className="text-base sm:text-lg font-semibold">Model Details</h3>
            </div>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">
              Deep dive into Lynxa Pro's architecture, training, and performance characteristics.
            </p>
            <a 
              href="/docs/nexariq-lynxa-pro/specifications" 
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              View Specifications →
            </a>
          </Card>

          <Card className="p-4 sm:p-6 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-base sm:text-lg font-semibold">API Reference</h3>
            </div>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">
              Complete API documentation with endpoints, authentication, and examples.
            </p>
            <a 
              href="/docs/nexariq-lynxa-pro/endpoints" 
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              API Endpoints →
            </a>
          </Card>

          <Card className="p-4 sm:p-6 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />
              <h3 className="text-base sm:text-lg font-semibold">Usage Examples</h3>
            </div>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">
              Practical examples and best practices for different use cases and scenarios.
            </p>
            <a 
              href="/docs/nexariq-lynxa-pro/examples" 
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              See Examples →
            </a>
          </Card>
        </div>
      </section>
    </>
  )
}