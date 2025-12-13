import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Zap, Brain, Globe, Star, ArrowRight, ExternalLink } from "lucide-react"
import { MiniChart } from "@/components/mini-chart"

export default function ModelsPricingPage() {
  return (
    <>
      <section className="mb-20">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Getting started</p>
        <h1 className="text-5xl font-bold mb-6">Models and Pricing</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Access state-of-the-art AI models through our unified platform. Transparent pricing with 
          pay-per-use rates and volume discounts for enterprise customers.
        </p>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Performance Rankings</h2>
            <p className="text-muted-foreground mb-6">
              Our models are ranked based on performance across various benchmarks including reasoning, 
              coding, and general knowledge tasks.
            </p>
            <MiniChart />
          </div>
          
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-semibold">Enterprise Benefits</h3>
            </div>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Volume discounts up to 40%
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Priority support and SLA
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Custom rate limits
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Advanced analytics dashboard
              </li>
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Contact Enterprise Sales
            </Button>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-8">AJ STUDIOZ Multi-Model Platform</h2>
        
        <div className="grid gap-6 mb-12">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                  <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Claude 3.5 Sonnet</h3>
                  <Badge variant="secondary" className="mt-1">Premium Tier</Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">$15.00</div>
                <div className="text-sm text-muted-foreground">per 1M tokens</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-medium mb-2">Capabilities</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 200K context window</li>
                  <li>• Advanced reasoning & analysis</li>
                  <li>• Superior code generation</li>
                  <li>• Multimodal understanding</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Best For</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Complex problem solving</li>
                  <li>• Software development</li>
                  <li>• Research and analysis</li>
                  <li>• Creative writing</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">High Performance</span>
              </div>
              <Button variant="outline" size="sm">
                Try Now
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                  <Brain className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">GPT-4 Turbo</h3>
                  <Badge variant="secondary" className="mt-1">Premium Tier</Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">$10.00</div>
                <div className="text-sm text-muted-foreground">per 1M tokens</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-medium mb-2">Capabilities</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 128K context window</li>
                  <li>• Multimodal (text + vision)</li>
                  <li>• JSON mode support</li>
                  <li>• Function calling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Best For</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• General purpose tasks</li>
                  <li>• Application development</li>
                  <li>• Content generation</li>
                  <li>• Image analysis</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Widely Compatible</span>
              </div>
              <Button variant="outline" size="sm">
                Try Now
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                  <Brain className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Gemini Pro</h3>
                  <Badge variant="secondary" className="mt-1">Standard Tier</Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">$7.00</div>
                <div className="text-sm text-muted-foreground">per 1M tokens</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-medium mb-2">Capabilities</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 32K context window</li>
                  <li>• Multilingual excellence</li>
                  <li>• Fast inference speed</li>
                  <li>• Efficient processing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Best For</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Multilingual applications</li>
                  <li>• Real-time chat</li>
                  <li>• Content moderation</li>
                  <li>• Quick responses</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Fast & Efficient</span>
              </div>
              <Button variant="outline" size="sm">
                Try Now
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/20">
                  <Brain className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Moonshot Kimi</h3>
                  <Badge variant="secondary" className="mt-1">Economy Tier</Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">$3.00</div>
                <div className="text-sm text-muted-foreground">per 1M tokens</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-medium mb-2">Capabilities</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 128K context window</li>
                  <li>• Chinese language optimized</li>
                  <li>• Cost-effective processing</li>
                  <li>• Reliable performance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Best For</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Chinese language tasks</li>
                  <li>• Budget-conscious projects</li>
                  <li>• High-volume processing</li>
                  <li>• Basic AI applications</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium">Most Affordable</span>
              </div>
              <Button variant="outline" size="sm">
                Try Now
              </Button>
            </div>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-8">NEXARIQ Lynxa Pro</h2>
        
        <Card className="p-8 mb-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Lynxa Pro</h3>
                <p className="text-muted-foreground">Specialized AI Platform</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">$20.00</div>
              <div className="text-sm text-muted-foreground">per 1M tokens</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-3">Advanced Features</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Custom training datasets
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Enhanced reasoning capabilities
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Professional workflows optimization
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Performance</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Superior accuracy on complex tasks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Consistent high-quality outputs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Specialized domain knowledge
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Use Cases</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Research and analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Academic applications
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Enterprise solutions
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <ExternalLink className="h-4 w-4 mr-2" />
              Try NEXARIQ
            </Button>
            <Button variant="outline">
              Learn More
            </Button>
          </div>
        </Card>

        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Pricing Calculator</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Card className="p-4 text-center">
              <h3 className="font-semibold mb-2">Starter</h3>
              <div className="text-2xl font-bold mb-2">$50</div>
              <div className="text-sm text-muted-foreground mb-4">~3.3M tokens/month</div>
              <ul className="text-sm space-y-1 mb-4">
                <li>Access to all models</li>
                <li>Standard rate limits</li>
                <li>Community support</li>
              </ul>
              <Button variant="outline" className="w-full">Get Started</Button>
            </Card>
            
            <Card className="p-4 text-center border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10">
              <Badge className="mb-2 bg-blue-600">Popular</Badge>
              <h3 className="font-semibold mb-2">Professional</h3>
              <div className="text-2xl font-bold mb-2">$200</div>
              <div className="text-sm text-muted-foreground mb-4">~15M tokens/month</div>
              <ul className="text-sm space-y-1 mb-4">
                <li>All Starter features</li>
                <li>Priority processing</li>
                <li>Email support</li>
                <li>Usage analytics</li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Pro</Button>
            </Card>
            
            <Card className="p-4 text-center">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <div className="text-2xl font-bold mb-2">Custom</div>
              <div className="text-sm text-muted-foreground mb-4">Volume pricing</div>
              <ul className="text-sm space-y-1 mb-4">
                <li>All Pro features</li>
                <li>Custom rate limits</li>
                <li>24/7 support</li>
                <li>SLA guarantee</li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              All prices in USD. Volume discounts available for enterprise customers.
            </p>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
              <ArrowRight className="h-4 w-4 mr-2" />
              View detailed pricing breakdown
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}