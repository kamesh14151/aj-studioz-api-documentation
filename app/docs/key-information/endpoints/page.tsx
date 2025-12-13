import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Globe, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle2,
  MapPin,
  Activity,
  Server,
  Network,
  ArrowRight
} from "lucide-react"
import { LocationMap } from "@/components/expand-map"

export default function RegionalEndpointsPage() {
  return (
    <>
      <section className="mb-20">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Key Information</p>
        <h1 className="text-5xl font-bold mb-6">Regional Endpoints</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Access AJ STUDIOZ APIs from multiple global regions for optimal performance, 
          reduced latency, and compliance with local data residency requirements.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Global Infrastructure Map</h2>
          <Card className="p-6">
            <LocationMap 
              locations={[
                { name: "US East (Virginia)", coordinates: [38.9072, -77.0369], color: "#3b82f6" },
                { name: "US West (Oregon)", coordinates: [45.5152, -122.6784], color: "#10b981" },
                { name: "Europe (Frankfurt)", coordinates: [50.1109, 8.6821], color: "#8b5cf6" },
                { name: "Asia Pacific (Tokyo)", coordinates: [35.6762, 139.6503], color: "#f59e0b" },
                { name: "Asia Pacific (Singapore)", coordinates: [1.3521, 103.8198], color: "#ef4444" },
                { name: "Canada (Central)", coordinates: [43.6532, -79.3832], color: "#06b6d4" }
              ]}
            />
            <div className="mt-4 text-sm text-muted-foreground text-center">
              Click on any region to view detailed information and endpoint URLs
            </div>
          </Card>
        </div>

        <div className="grid gap-6 mb-12">
          {/* US East */}
          <Card className="p-6 border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                  <Server className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">US East (Virginia)</h3>
                  <p className="text-sm text-muted-foreground">Primary region - N. Virginia</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-600">Primary</Badge>
                <div className="flex items-center gap-1 text-green-600">
                  <Activity className="h-4 w-4" />
                  <span className="text-sm font-medium">Operational</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <h4 className="font-medium mb-2">Base URL</h4>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  api.ajstudioz.dev
                </code>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Latency</h4>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span className="text-sm">~45ms avg</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Compliance</h4>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">SOC 2, GDPR</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Models</h4>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">All available</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-sm text-muted-foreground">
                Best for: North American users, default endpoint
              </div>
              <Button variant="outline" size="sm">
                <MapPin className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </div>
          </Card>

          {/* US West */}
          <Card className="p-6 border-green-200 dark:border-green-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                  <Server className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">US West (Oregon)</h3>
                  <p className="text-sm text-muted-foreground">Pacific Coast region</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Secondary</Badge>
                <div className="flex items-center gap-1 text-green-600">
                  <Activity className="h-4 w-4" />
                  <span className="text-sm font-medium">Operational</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <h4 className="font-medium mb-2">Base URL</h4>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  us-west.api.ajstudioz.dev
                </code>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Latency</h4>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span className="text-sm">~42ms avg</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Compliance</h4>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">SOC 2, CCPA</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Models</h4>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">All available</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-sm text-muted-foreground">
                Best for: West Coast US, better latency for California users
              </div>
              <Button variant="outline" size="sm">
                <MapPin className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </div>
          </Card>

          {/* Europe */}
          <Card className="p-6 border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                  <Server className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Europe (Frankfurt)</h3>
                  <p className="text-sm text-muted-foreground">Central European region</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Regional</Badge>
                <div className="flex items-center gap-1 text-green-600">
                  <Activity className="h-4 w-4" />
                  <span className="text-sm font-medium">Operational</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <h4 className="font-medium mb-2">Base URL</h4>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  eu.api.ajstudioz.dev
                </code>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Latency</h4>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span className="text-sm">~38ms avg</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Compliance</h4>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">GDPR, ISO 27001</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Models</h4>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">All available</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-sm text-muted-foreground">
                Best for: European users, GDPR compliance requirements
              </div>
              <Button variant="outline" size="sm">
                <MapPin className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </div>
          </Card>

          {/* Asia Pacific Tokyo */}
          <Card className="p-6 border-orange-200 dark:border-orange-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/20">
                  <Server className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Asia Pacific (Tokyo)</h3>
                  <p className="text-sm text-muted-foreground">Northeast Asia region</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Regional</Badge>
                <div className="flex items-center gap-1 text-green-600">
                  <Activity className="h-4 w-4" />
                  <span className="text-sm font-medium">Operational</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <h4 className="font-medium mb-2">Base URL</h4>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  ap-northeast.api.ajstudioz.dev
                </code>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Latency</h4>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span className="text-sm">~35ms avg</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Compliance</h4>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">ISO 27001</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Models</h4>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Kimi optimized</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-sm text-muted-foreground">
                Best for: Japan, Korea, Northeast Asia. Optimized for Kimi model
              </div>
              <Button variant="outline" size="sm">
                <MapPin className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </div>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-8">How to Use Regional Endpoints</h2>
        
        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Network className="h-5 w-5 text-blue-600" />
              Automatic Region Selection
            </h3>
            
            <p className="text-muted-foreground mb-4">
              Use our global endpoint for automatic routing to the nearest region based on your location.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-4 mb-4">
              <code className="text-sm">
                curl -X POST "https://api.ajstudioz.dev/api/chat/completions"
              </code>
            </div>
            
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Automatically routes to fastest region
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                No code changes required
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Built-in failover support
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-purple-600" />
              Manual Region Selection
            </h3>
            
            <p className="text-muted-foreground mb-4">
              Specify a region directly for compliance requirements or performance optimization.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-4 mb-4">
              <code className="text-sm">
                curl -X POST "https://eu.api.ajstudioz.dev/api/chat/completions"
              </code>
            </div>
            
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Guaranteed data residency
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Predictable latency
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Compliance with local regulations
              </li>
            </ul>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-8">SDK Configuration</h2>
        
        <div className="space-y-6 mb-12">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Python OpenAI SDK</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Automatic Region Selection</h4>
                <div className="bg-muted/50 rounded-lg p-4">
                  <code className="text-sm">
{`from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.ajstudioz.dev/api"  # Global endpoint
)`}
                  </code>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Specific Region</h4>
                <div className="bg-muted/50 rounded-lg p-4">
                  <code className="text-sm">
{`from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://eu.api.ajstudioz.dev/api"  # Europe region
)`}
                  </code>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">JavaScript/Node.js</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Environment-based Configuration</h4>
                <div className="bg-muted/50 rounded-lg p-4">
                  <code className="text-sm">
{`import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.AJSTUDIOZ_API_KEY,
  baseURL: process.env.AJSTUDIOZ_REGION_URL || 'https://api.ajstudioz.dev/api',
});`}
                  </code>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-semibold">Performance Benefits</h3>
            </div>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <li>• Reduced latency by up to 60% with regional routing</li>
              <li>• Improved reliability with multi-region failover</li>
              <li>• Better user experience for global applications</li>
              <li>• Load balancing across multiple data centers</li>
            </ul>
          </Card>

          <Card className="p-6 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold">Compliance & Security</h3>
            </div>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li>• Data residency compliance (GDPR, local regulations)</li>
              <li>• End-to-end encryption in all regions</li>
              <li>• SOC 2 Type II certified infrastructure</li>
              <li>• Regular security audits and monitoring</li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50">
            <h2 className="text-2xl font-semibold mb-4">Need Help Choosing a Region?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team can help you optimize your setup for the best performance and compliance. 
              Contact us for personalized recommendations based on your use case.
            </p>
            
            <div className="flex gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ArrowRight className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
              <Button variant="outline">
                View Status Page
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}