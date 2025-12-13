import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, User, Key, Shield } from "lucide-react"

export default function DocsAuthPage() {
  return (
    <>
      <section className="mb-20">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Authentication</p>
        <h1 className="text-5xl font-bold mb-6">Account Management</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Manage your AJ STUDIOZ account, API keys, and access advanced features through our authentication system.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Card className="p-6 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Sign In / Sign Up</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Access your dashboard, manage API keys, and monitor usage analytics with your AJ STUDIOZ account.
            </p>
            <a 
              href="/auth" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Go to Login Page <ExternalLink className="h-4 w-4" />
            </a>
          </Card>

          <Card className="p-6 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                <Key className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">API Key Management</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Generate, rotate, and manage your API keys for secure access to AJ STUDIOZ services.
            </p>
            <a 
              href="/docs/key-information/authentication" 
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border rounded-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold">Security Features</h3>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <div className="text-center p-4">
              <h4 className="font-medium mb-2">OAuth 2.0</h4>
              <p className="text-sm text-muted-foreground">
                Industry-standard authentication with Google integration
              </p>
            </div>
            <div className="text-center p-4">
              <h4 className="font-medium mb-2">API Key Security</h4>
              <p className="text-sm text-muted-foreground">
                Encrypted keys with rotation capabilities and usage monitoring
              </p>
            </div>
            <div className="text-center p-4">
              <h4 className="font-medium mb-2">Access Control</h4>
              <p className="text-sm text-muted-foreground">
                Role-based permissions and rate limiting for enhanced security
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="/auth">
                <User className="h-4 w-4 mr-2" />
                Sign In Now
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/docs/key-information/authentication">
                <Key className="h-4 w-4 mr-2" />
                API Documentation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}