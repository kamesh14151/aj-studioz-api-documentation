import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CreditCard, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Calculator,
  DollarSign,
  BarChart3,
  Settings,
  Download,
  Bell
} from "lucide-react"

export default function BillingPage() {
  return (
    <>
      <section className="mb-20">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Key Information</p>
        <h1 className="text-5xl font-bold mb-6">Manage Billing</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Monitor your usage, manage payment methods, and control your spending with our comprehensive 
          billing dashboard and automated controls.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="p-6 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Current Month</h3>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">$247.50</div>
            <p className="text-sm text-muted-foreground mb-4">16.5M tokens used</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">75% of monthly budget</p>
          </Card>

          <Card className="p-6 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Last Month</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">$189.30</div>
            <p className="text-sm text-muted-foreground mb-4">12.6M tokens used</p>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-green-600">+31% from previous</span>
            </div>
          </Card>

          <Card className="p-6 border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/20">
                <Calculator className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold">Projected</h3>
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">$330.00</div>
            <p className="text-sm text-muted-foreground mb-4">Estimated month-end</p>
            <Badge variant="destructive" className="text-xs">
              Exceeds budget
            </Badge>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Payment Methods</h2>
            
            <div className="space-y-4 mb-6">
              <Card className="p-4 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-blue-600 text-white">
                      <CreditCard className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">•••• •••• •••• 4242</div>
                      <div className="text-sm text-muted-foreground">Expires 12/27</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-600">Primary</Badge>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-gray-600 text-white">
                      <CreditCard className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">•••• •••• •••• 8888</div>
                      <div className="text-sm text-muted-foreground">Expires 09/26</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">Set Primary</Button>
                    <Button variant="ghost" size="sm" className="text-red-600">Remove</Button>
                  </div>
                </div>
              </Card>
            </div>

            <Button variant="outline" className="w-full mb-8">
              <CreditCard className="h-4 w-4 mr-2" />
              Add Payment Method
            </Button>

            <h3 className="text-lg font-semibold mb-4">Billing Settings</h3>
            
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Monthly Budget Alert</div>
                    <div className="text-sm text-muted-foreground">Get notified when you reach 80% of budget</div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Bell className="h-4 w-4 mr-2" />
                    $250
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Billing Cycle</div>
                    <div className="text-sm text-muted-foreground">When your billing period resets</div>
                  </div>
                  <div className="text-sm font-medium">1st of each month</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Auto-Reload</div>
                    <div className="text-sm text-muted-foreground">Automatically add credits when low</div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Configure
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Usage Analytics</h2>
            
            <Card className="p-6 mb-6">
              <h3 className="font-semibold mb-4">Usage by Model (This Month)</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Claude 3.5 Sonnet</span>
                    <span className="text-sm text-muted-foreground">45% • $111.38</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: "45%"}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">GPT-4 Turbo</span>
                    <span className="text-sm text-muted-foreground">30% • $74.25</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: "30%"}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Gemini Pro</span>
                    <span className="text-sm text-muted-foreground">20% • $49.50</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: "20%"}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Moonshot Kimi</span>
                    <span className="text-sm text-muted-foreground">5% • $12.37</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: "5%"}}></div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 mb-6">
              <h3 className="font-semibold mb-4">Recent Transactions</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <div className="text-sm font-medium">December 13, 2025</div>
                    <div className="text-xs text-muted-foreground">Claude 3.5 Sonnet usage</div>
                  </div>
                  <div className="text-sm font-medium">$15.75</div>
                </div>

                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <div className="text-sm font-medium">December 12, 2025</div>
                    <div className="text-xs text-muted-foreground">GPT-4 Turbo usage</div>
                  </div>
                  <div className="text-sm font-medium">$23.40</div>
                </div>

                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <div className="text-sm font-medium">December 11, 2025</div>
                    <div className="text-xs text-muted-foreground">Gemini Pro usage</div>
                  </div>
                  <div className="text-sm font-medium">$8.90</div>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <div className="text-sm font-medium">December 10, 2025</div>
                    <div className="text-xs text-muted-foreground">Multiple models</div>
                  </div>
                  <div className="text-sm font-medium">$31.25</div>
                </div>
              </div>
              
              <Button variant="ghost" className="w-full mt-4 text-blue-600 hover:text-blue-700">
                View All Transactions
              </Button>
            </Card>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Download Invoice
              </Button>
              <Button variant="outline" className="flex-1">
                <BarChart3 className="h-4 w-4 mr-2" />
                Export Usage
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Budget Alert</h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm mb-4">
                  You're approaching your monthly budget limit. Consider upgrading your plan or 
                  implementing usage controls to avoid service interruption.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                    Increase Budget
                  </Button>
                  <Button size="sm" variant="outline">
                    Set Limits
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Optimization Tips</h3>
                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1 mb-4">
                  <li>• Use Kimi for cost-effective bulk processing</li>
                  <li>• Implement response caching for repeated queries</li>
                  <li>• Set max_tokens limits to control costs</li>
                  <li>• Monitor usage patterns in real-time</li>
                </ul>
                <Button size="sm" variant="outline" className="border-green-600 text-green-600">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}