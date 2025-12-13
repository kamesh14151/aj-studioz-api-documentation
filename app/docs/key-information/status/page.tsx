import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Activity, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Clock, 
  TrendingUp,
  Server,
  Globe,
  Zap,
  Shield,
  BarChart3,
  RefreshCw
} from "lucide-react"

export default function StatusPage() {
  return (
    <>
      <section className="mb-20">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Key Information</p>
        <h1 className="text-5xl font-bold mb-6">System Status</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Real-time status of AJ STUDIOZ API services, infrastructure, and regional endpoints. 
          Monitor uptime, performance metrics, and ongoing incidents.
        </p>

        {/* Overall Status */}
        <Card className="p-6 mb-8 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/20">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-green-800 dark:text-green-200">All Systems Operational</h2>
                <p className="text-sm text-green-600 dark:text-green-300">Last updated: 2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-600">100% Uptime</Badge>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">99.99%</div>
              <div className="text-sm text-muted-foreground">30-day uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">45ms</div>
              <div className="text-sm text-muted-foreground">Avg response time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">6</div>
              <div className="text-sm text-muted-foreground">Active regions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">0</div>
              <div className="text-sm text-muted-foreground">Active incidents</div>
            </div>
          </div>
        </Card>

        <h2 className="text-3xl font-semibold mb-6">Service Status</h2>
        
        <div className="grid gap-4 mb-8">
          {/* API Services */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold">Chat Completions API</h3>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">Operational</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Response Time</div>
                <div className="font-semibold">42ms avg</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Success Rate</div>
                <div className="font-semibold">99.98%</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Requests/min</div>
                <div className="font-semibold">12,458</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold">Embeddings API</h3>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">Operational</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Response Time</div>
                <div className="font-semibold">28ms avg</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Success Rate</div>
                <div className="font-semibold">99.99%</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Requests/min</div>
                <div className="font-semibold">3,247</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold">Authentication System</h3>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">Operational</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Response Time</div>
                <div className="font-semibold">15ms avg</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Success Rate</div>
                <div className="font-semibold">99.97%</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Auth/min</div>
                <div className="font-semibold">8,923</div>
              </div>
            </div>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-6">Regional Infrastructure</h2>
        
        <div className="grid gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Server className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold">US East (Virginia)</h3>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">Operational</span>
                <Badge variant="outline">Primary</Badge>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Load</div>
                <div className="font-semibold text-green-600">34%</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Latency</div>
                <div className="font-semibold">45ms</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Uptime</div>
                <div className="font-semibold">99.99%</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Capacity</div>
                <div className="font-semibold text-green-600">Available</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Server className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold">US West (Oregon)</h3>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">Operational</span>
                <Badge variant="outline">Secondary</Badge>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Load</div>
                <div className="font-semibold text-green-600">28%</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Latency</div>
                <div className="font-semibold">42ms</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Uptime</div>
                <div className="font-semibold">99.98%</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Capacity</div>
                <div className="font-semibold text-green-600">Available</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Server className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold">Europe (Frankfurt)</h3>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">Operational</span>
                <Badge variant="outline">Regional</Badge>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Load</div>
                <div className="font-semibold text-green-600">41%</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Latency</div>
                <div className="font-semibold">38ms</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Uptime</div>
                <div className="font-semibold">99.97%</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Capacity</div>
                <div className="font-semibold text-green-600">Available</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Server className="h-5 w-5 text-orange-600" />
                <h3 className="text-lg font-semibold">Asia Pacific (Tokyo)</h3>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">Operational</span>
                <Badge variant="outline">Regional</Badge>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Load</div>
                <div className="font-semibold text-green-600">52%</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Latency</div>
                <div className="font-semibold">35ms</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Uptime</div>
                <div className="font-semibold">99.96%</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Capacity</div>
                <div className="font-semibold text-green-600">Available</div>
              </div>
            </div>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-6">Recent Incidents</h2>
        
        <div className="space-y-4 mb-8">
          <Card className="p-6 border-green-200 dark:border-green-800">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold">Scheduled Maintenance Completed</h3>
              </div>
              <div className="text-sm text-muted-foreground">Dec 15, 2024 - 02:00 UTC</div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Routine infrastructure updates completed successfully across all regions. No service disruptions reported.
            </p>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-800 border-green-200">Resolved</Badge>
              <span className="text-sm text-muted-foreground">Duration: 30 minutes</span>
            </div>
          </Card>

          <Card className="p-6 border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <h3 className="font-semibold">Minor Latency Increase - US West</h3>
              </div>
              <div className="text-sm text-muted-foreground">Dec 12, 2024 - 14:25 UTC</div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Temporary network congestion caused 15% increase in response times. Automatic load balancing resolved the issue.
            </p>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Resolved</Badge>
              <span className="text-sm text-muted-foreground">Duration: 12 minutes</span>
            </div>
          </Card>

          <Card className="p-6 border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold">API Rate Limit Adjustments</h3>
              </div>
              <div className="text-sm text-muted-foreground">Dec 10, 2024 - 10:00 UTC</div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Updated rate limiting policies for improved service stability. New limits applied gradually across all regions.
            </p>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>
              <span className="text-sm text-muted-foreground">No downtime</span>
            </div>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-6">Performance Metrics</h2>
        
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Response Time Trends
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Last 24 hours</span>
                <span className="font-semibold text-green-600">43ms avg</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full w-[85%]"></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Last 7 days</span>
                <span className="font-semibold text-green-600">45ms avg</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full w-[82%]"></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Last 30 days</span>
                <span className="font-semibold text-green-600">47ms avg</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full w-[78%]"></div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Activity className="h-5 w-5 text-purple-600" />
              Uptime Statistics
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Current month</span>
                <span className="font-semibold text-green-600">99.99%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full w-[99.99%]"></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Last 90 days</span>
                <span className="font-semibold text-green-600">99.97%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full w-[99.97%]"></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">This year</span>
                <span className="font-semibold text-green-600">99.95%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full w-[99.95%]"></div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 text-center">
            <Globe className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Status Page</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to updates and get notified of any incidents
            </p>
            <Button variant="outline" size="sm">Subscribe</Button>
          </Card>

          <Card className="p-6 text-center">
            <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">SLA Guarantee</h3>
            <p className="text-sm text-muted-foreground mb-4">
              99.9% uptime guarantee with service credits for downtime
            </p>
            <Button variant="outline" size="sm">View SLA</Button>
          </Card>

          <Card className="p-6 text-center">
            <Clock className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Maintenance Windows</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Scheduled maintenance always during low-traffic hours
            </p>
            <Button variant="outline" size="sm">Schedule</Button>
          </Card>
        </div>
      </section>
    </>
  )
}