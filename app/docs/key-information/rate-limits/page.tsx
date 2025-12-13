import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Gauge, 
  Clock, 
  Shield, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle2,
  Users,
  Zap,
  BarChart3,
  Settings,
  RefreshCw,
  Timer
} from "lucide-react"

export default function RateLimitsPage() {
  return (
    <>
      <section className="mb-20">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Key Information</p>
        <h1 className="text-5xl font-bold mb-6">Consumption and Rate Limits</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Understand how rate limiting works, monitor your current usage, and optimize your 
          applications for the best performance within our fair usage policies.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <Card className="p-6 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Gauge className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Current Usage</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">847</div>
            <p className="text-sm text-muted-foreground mb-3">requests this hour</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: "42%"}}></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">42% of hourly limit</p>
          </Card>

          <Card className="p-6 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Reset Time</h3>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">23m</div>
            <p className="text-sm text-muted-foreground mb-3">until limit resets</p>
            <div className="flex items-center gap-2 text-sm">
              <RefreshCw className="h-4 w-4 text-green-600" />
              <span className="text-green-600">Resets at top of hour</span>
            </div>
          </Card>

          <Card className="p-6 border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/20">
                <TrendingUp className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold">Peak Usage</h3>
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">1,247</div>
            <p className="text-sm text-muted-foreground mb-3">requests/hour (today)</p>
            <Badge variant="destructive" className="text-xs">
              61% of limit
            </Badge>
          </Card>

          <Card className="p-6 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Plan Tier</h3>
            </div>
            <div className="text-2xl font-bold text-purple-600 mb-2">Pro</div>
            <p className="text-sm text-muted-foreground mb-3">Current plan</p>
            <Button size="sm" variant="outline" className="text-purple-600">
              Upgrade
            </Button>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-8">Rate Limit Tiers</h2>
        
        <div className="grid gap-6 mb-12">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Free Tier</Badge>
                <h3 className="text-xl font-semibold">Starter Plan</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">$0</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Hourly Limits
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 100 requests/hour</li>
                  <li>• 50K tokens/hour</li>
                  <li>• 3 requests/minute</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Daily Limits
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 1K requests/day</li>
                  <li>• 500K tokens/day</li>
                  <li>• Reset at midnight UTC</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Model Access
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Kimi (limited)</li>
                  <li>• Gemini Pro (limited)</li>
                  <li>• Demo endpoints only</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Features
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Community support</li>
                  <li>• Basic monitoring</li>
                  <li>• Standard priority</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-600">Professional</Badge>
                <h3 className="text-xl font-semibold">Pro Plan</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">$50</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Hourly Limits
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 2K requests/hour</li>
                  <li>• 1M tokens/hour</li>
                  <li>• 50 requests/minute</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Daily Limits
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 25K requests/day</li>
                  <li>• 15M tokens/day</li>
                  <li>• Generous burst capacity</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Model Access
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• All available models</li>
                  <li>• Full API access</li>
                  <li>• Production endpoints</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Features
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Priority processing</li>
                  <li>• Advanced analytics</li>
                  <li>• Email support</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-900/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-600">Enterprise</Badge>
                <h3 className="text-xl font-semibold">Enterprise Plan</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">Custom</div>
                <div className="text-sm text-muted-foreground">contact sales</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Custom Limits
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Negotiated rates</li>
                  <li>• Dedicated capacity</li>
                  <li>• No burst limits</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  High Volume
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Unlimited requests*</li>
                  <li>• Volume discounts</li>
                  <li>• Custom billing cycles</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Full Access
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• All models + early access</li>
                  <li>• Private endpoints</li>
                  <li>• Custom integrations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Premium Features
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 24/7 support</li>
                  <li>• SLA guarantees</li>
                  <li>• Dedicated account manager</li>
                </ul>
              </div>
            </div>
            
            <Button className="bg-purple-600 hover:bg-purple-700 mt-4">
              Contact Enterprise Sales
            </Button>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-8">Understanding Rate Limits</h2>
        
        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <div>
            <Card className="p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Timer className="h-5 w-5 text-blue-600" />
                How Rate Limiting Works
              </h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Token Bucket Algorithm</h4>
                  <p className="text-muted-foreground">
                    We use a token bucket system where tokens are refilled at a constant rate. 
                    Each API request consumes tokens based on the model and input/output size.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Sliding Window</h4>
                  <p className="text-muted-foreground">
                    Rate limits are calculated using a sliding window approach, providing 
                    smoother usage patterns compared to fixed time windows.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Burst Capacity</h4>
                  <p className="text-muted-foreground">
                    Pro and Enterprise plans include burst capacity, allowing temporary spikes 
                    above your base rate limit for better user experience.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Settings className="h-5 w-5 text-green-600" />
                Optimization Tips
              </h3>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Implement Exponential Backoff</div>
                    <div className="text-muted-foreground">Retry failed requests with increasing delays</div>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Cache Responses</div>
                    <div className="text-muted-foreground">Store and reuse responses for identical requests</div>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Batch Requests</div>
                    <div className="text-muted-foreground">Combine multiple operations into single API calls</div>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Monitor Usage</div>
                    <div className="text-muted-foreground">Track consumption patterns and optimize accordingly</div>
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          <div>
            <Card className="p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Current Usage Breakdown</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Claude 3.5 Sonnet</span>
                    <span className="text-sm text-muted-foreground">342 requests</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: "40%"}}></div>
                  </div>
                  <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                    <span>15 tokens/req avg</span>
                    <span>40% of total</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">GPT-4 Turbo</span>
                    <span className="text-sm text-muted-foreground">255 requests</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: "30%"}}></div>
                  </div>
                  <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                    <span>12 tokens/req avg</span>
                    <span>30% of total</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Gemini Pro</span>
                    <span className="text-sm text-muted-foreground">169 requests</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: "20%"}}></div>
                  </div>
                  <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                    <span>8 tokens/req avg</span>
                    <span>20% of total</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Moonshot Kimi</span>
                    <span className="text-sm text-muted-foreground">81 requests</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: "10%"}}></div>
                  </div>
                  <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                    <span>5 tokens/req avg</span>
                    <span>10% of total</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Rate Limit Best Practices</h3>
                  <ul className="text-amber-800 dark:text-amber-200 text-sm space-y-1">
                    <li>• Monitor the `X-RateLimit-*` headers in responses</li>
                    <li>• Implement proper error handling for 429 status codes</li>
                    <li>• Use webhooks for async processing when possible</li>
                    <li>• Consider upgrading if consistently hitting limits</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Need Higher Limits?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you're consistently hitting rate limits or need dedicated capacity for your application, 
              our team can work with you to find the right solution.
            </p>
            
            <div className="flex gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Upgrade Plan
              </Button>
              <Button variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </>
  )
}