import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Server, Zap, Shield, Clock, MapPin } from "lucide-react"

export default function HostingPage() {
  return (
    <>
      <section>
        <div className="mb-8">
          <h1 id="hosting-overview" className="text-4xl font-bold mb-4">Where is Hosted</h1>
          <p className="text-xl text-muted-foreground">
            AJ STUDIOZ operates exclusively from India to provide optimized performance for Indian users 
            with complete data sovereignty and regulatory compliance.
          </p>
        </div>

        <h2 id="india-infrastructure" className="text-3xl font-semibold mb-6">India Infrastructure</h2>
        
        <h2 id="regional-details" className="text-3xl font-semibold mb-6">Regional Details</h2>
        
        <div className="grid gap-6 mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">United States East</h3>
                <Badge variant="outline" className="text-xs">Primary</Badge>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Our primary data center located in Virginia, providing optimal performance for North American users.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-600" />
                <span>Average latency: ~50ms</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>99.9% uptime SLA</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">United States West</h3>
                <Badge variant="outline" className="text-xs">Secondary</Badge>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              West coast infrastructure in California for optimized performance across the Pacific region.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-600" />
                <span>Average latency: ~60ms</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>99.9% uptime SLA</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Europe</h3>
                <Badge variant="outline" className="text-xs">Regional</Badge>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              European data center in London serving EMEA users with GDPR compliance and data sovereignty.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-600" />
                <span>Average latency: ~40ms</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>GDPR compliant</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/20">
                <MapPin className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Asia Pacific</h3>
                <Badge variant="outline" className="text-xs">Regional</Badge>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Asia Pacific infrastructure in Tokyo providing low-latency access for users across Asia.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-600" />
                <span>Average latency: ~30ms</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>99.9% uptime SLA</span>
              </div>
            </div>
          </Card>
        </div>

        <h2 id="infrastructure-features" className="text-3xl font-semibold mb-6">Infrastructure Features</h2>
        
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">India CDN</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Content delivery network with multiple edge locations across India for optimal performance and reduced latency.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                <Server className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Auto Scaling</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Dynamic scaling infrastructure that automatically adjusts to handle traffic spikes and ensure consistent performance.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">High Performance</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Enterprise-grade hardware and optimized infrastructure delivering sub-50ms response times within India.
            </p>
          </Card>
        </div>

        <h2 id="network-specifications" className="text-3xl font-semibold mb-6">Network Specifications</h2>
        
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Network Performance</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Bandwidth</span>
                <span className="font-medium">100+ Gbps</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">India Latency</span>
                <span className="font-medium">&lt; 50ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Uptime SLA</span>
                <span className="font-medium">99.9%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">DDoS Protection</span>
                <span className="font-medium">Multi-layer</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Security & Compliance</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Encryption</span>
                <span className="font-medium">TLS 1.3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Data Residency</span>
                <span className="font-medium">India Only</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Compliance</span>
                <span className="font-medium">RBI, IT Act</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monitoring</span>
                <span className="font-medium">24/7</span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            <h3 className="text-xl font-semibold">Enterprise-Grade Infrastructure in India</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Our India-based infrastructure is designed to meet the demands of enterprise customers with mission-critical workloads while ensuring complete data sovereignty.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="font-medium text-sm mb-2">Redundancy</p>
              <p className="text-muted-foreground text-sm">Multi-zone failover within India with automatic traffic routing</p>
            </div>
            <div>
              <p className="font-medium text-sm mb-2">Data Sovereignty</p>
              <p className="text-muted-foreground text-sm">All data remains within Indian borders for regulatory compliance</p>
            </div>
          </div>
        </Card>
      </section>
    </>
  )
}