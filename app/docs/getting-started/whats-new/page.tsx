import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Code2, 
  Brain, 
  Globe, 
  ArrowRight,
  Calendar,
  CheckCircle2,
  Star,
  TrendingUp,
  Users
} from "lucide-react"

export default function WhatsNewPage() {
  return (
    <>
      <section className="mb-20">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Getting started</p>
        <h1 className="text-5xl font-bold mb-6">What's New?</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Stay up to date with the latest features, model releases, and platform improvements. 
          We're constantly evolving to bring you the best AI development experience.
        </p>

        <div className="grid gap-6 mb-12">
          {/* Latest Release */}
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-600 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <Badge className="bg-blue-600 hover:bg-blue-700">Latest</Badge>
              <div className="text-sm text-muted-foreground">December 13, 2025</div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Platform Redesign & New Components</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Major platform update featuring a complete documentation redesign, new interactive components, 
              and enhanced user experience across all touchpoints.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Code2 className="h-4 w-4" />
                  New Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Interactive 3D model cards with hover effects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Global infrastructure map visualization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Real-time performance charts and rankings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Enhanced authentication flow with modern UI
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Improvements
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Faster page load times with optimized components
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Improved dark mode with smooth transitions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Multi-page documentation structure
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Mobile-responsive design across all pages
                  </li>
                </ul>
              </div>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowRight className="h-4 w-4 mr-2" />
              Explore New Features
            </Button>
          </Card>

          {/* Previous Updates */}
          <div className="grid gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-5 w-5 text-purple-600" />
                <Badge variant="secondary">December 2025</Badge>
                <div className="text-sm text-muted-foreground">v2.1.0</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Claude 3.5 Sonnet Integration</h3>
              <p className="text-muted-foreground mb-4">
                Added support for Anthropic's latest Claude 3.5 Sonnet model with enhanced reasoning 
                capabilities and 200K context window.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Brain className="h-4 w-4 text-purple-600" />
                  Enhanced reasoning
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Code2 className="h-4 w-4 text-purple-600" />
                  Better code generation
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-purple-600" />
                  Faster processing
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-5 w-5 text-green-600" />
                <Badge variant="secondary">November 2025</Badge>
                <div className="text-sm text-muted-foreground">v2.0.0</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">NEXARIQ Lynxa Pro Launch</h3>
              <p className="text-muted-foreground mb-4">
                Launched our specialized AI platform with custom-trained models optimized for 
                complex reasoning and professional workflows.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 text-green-600" />
                  Custom training
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-green-600" />
                  Enterprise security
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  Superior performance
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-5 w-5 text-orange-600" />
                <Badge variant="secondary">October 2025</Badge>
                <div className="text-sm text-muted-foreground">v1.8.0</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Global Infrastructure Expansion</h3>
              <p className="text-muted-foreground mb-4">
                Expanded our global presence with new data centers in Asia Pacific and Europe, 
                reducing latency by up to 60% for international users.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-orange-600" />
                  4 global regions
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-orange-600" />
                  60% faster response
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-orange-600" />
                  Better user experience
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-5 w-5 text-blue-600" />
                <Badge variant="secondary">September 2025</Badge>
                <div className="text-sm text-muted-foreground">v1.7.0</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Enhanced Security & Compliance</h3>
              <p className="text-muted-foreground mb-4">
                Implemented advanced security measures including SOC 2 Type II compliance, 
                enhanced encryption, and improved access controls.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-blue-600" />
                  SOC 2 compliant
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-blue-600" />
                  End-to-end encryption
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-blue-600" />
                  Advanced monitoring
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Roadmap Preview */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Coming Soon
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                Q1 2026: Advanced AI Features
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Multi-modal image and text processing</li>
                <li>• Advanced function calling capabilities</li>
                <li>• Custom fine-tuning options</li>
                <li>• Real-time streaming responses</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-green-600" />
                Q2 2026: Developer Tools
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Interactive API playground</li>
                <li>• Advanced analytics dashboard</li>
                <li>• SDKs for more languages</li>
                <li>• Webhook integration support</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Stats & Metrics */}
        <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <h2 className="text-2xl font-semibold mb-6 text-center">Platform Growth</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">API Requests/Month</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Active Developers</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
              <div className="text-sm text-muted-foreground">Global Regions</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Sparkles className="h-4 w-4 mr-2" />
              Join the Community
            </Button>
          </div>
        </Card>

        {/* Newsletter Signup */}
        <div className="text-center mt-12 p-8 border rounded-lg bg-muted/30">
          <h2 className="text-xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Get notified about new features, model releases, and important updates.
          </p>
          
          <div className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
            />
            <Button>Subscribe</Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-3">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  )
}