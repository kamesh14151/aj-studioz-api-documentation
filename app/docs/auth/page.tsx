"use client"

import { SignInPage } from "@/components/sign-in"

export default function AuthPage() {
  return (
    <>
      <section className="mb-20">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Authentication</p>
        <h1 className="text-5xl font-bold mb-6">Sign In</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Sign in to access your AJ STUDIOZ dashboard, manage API keys, and monitor usage analytics.
        </p>

        <div className="max-w-4xl mx-auto">
          <SignInPage
            title={
              <>
                Welcome to <span className="text-blue-600">AJ STUDIOZ</span>
              </>
            }
            description="Access the most advanced AI models through our unified API platform."
            heroImageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
            testimonials={[
              {
                avatarSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
                name: "Alex Chen",
                handle: "@alexdev",
                text: "AJ STUDIOZ has revolutionized our AI workflow. The multi-model access is incredible!"
              },
              {
                avatarSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face", 
                name: "Sarah Kim",
                handle: "@sarahbuilds",
                text: "Best AI API platform I've used. The documentation is excellent and support is top-notch."
              },
              {
                avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                name: "Marcus Johnson", 
                handle: "@marcusai",
                text: "Seamless integration with our existing OpenAI code. Migration took just minutes!"
              }
            ]}
            onSignIn={(event) => {
              event.preventDefault()
              console.log("Sign in attempted")
              // Handle sign in logic here
            }}
            onGoogleSignIn={() => {
              console.log("Google sign in attempted")
              // Handle Google OAuth here
            }}
            onResetPassword={() => {
              console.log("Password reset requested")
              // Handle password reset here
            }}
            onCreateAccount={() => {
              console.log("Create account requested")
              // Handle account creation here
            }}
          />
        </div>
      </section>
    </>
  )
}