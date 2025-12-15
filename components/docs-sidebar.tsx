"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Overview", href: "/docs/getting-started" },
      { title: "Introduction", href: "/docs/getting-started/introduction" },
      { title: "The Hitchhiker's Guide to AJ STUDIOZ", href: "/docs/getting-started/quick-start" },
      { title: "Models and Pricing", href: "/docs/getting-started/models-pricing" },
    ],
  },
  {
    title: "Key Information",
    items: [
      { title: "Authentication", href: "/docs/key-information/authentication" },
    ],
  },
  {
    title: "AJ STUDIOZ API",
    items: [
      { title: "Overview", href: "/docs/aj-studioz-api" },
      { title: "Available Models", href: "/docs/aj-studioz-api/models" },
      { title: "API Endpoints", href: "/docs/aj-studioz-api/endpoints" },
      { title: "Code Examples", href: "/docs/aj-studioz-api/examples" },
      { title: "AI Chatbot for Beginners", href: "/docs/aj-studioz-api/chatbot" },
      { title: "Where is Hosted", href: "/docs/aj-studioz-api/hosting" },
    ],
  },
]

export function DocsSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(navigation.map((section) => section.title))
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  // Handle mobile sidebar toggle from header
  useEffect(() => {
    const handleToggle = () => setIsMobileOpen(!isMobileOpen)
    window.addEventListener('toggle-mobile-sidebar', handleToggle)
    return () => window.removeEventListener('toggle-mobile-sidebar', handleToggle)
  }, [isMobileOpen])

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 border-r bg-background/95 backdrop-blur-sm z-40 transition-transform duration-200 ease-in-out",
        "lg:translate-x-0 lg:block",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Mobile Close Button */}
        <div className="flex justify-end p-4 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <nav className="py-4 lg:py-8 px-4 lg:px-6 space-y-6 lg:space-y-8">
          {navigation.map((section) => (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3 hover:text-foreground transition-colors"
              >
                {section.title}
                <ChevronRight
                  className={cn("h-3 w-3 transition-transform", expandedSections.includes(section.title) && "rotate-90")}
                />
              </button>
              {expandedSections.includes(section.title) && (
                <ul className="space-y-0.5">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-2 px-3 text-sm rounded-md transition-colors",
                          pathname === item.href
                            ? "text-foreground font-medium bg-muted"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent",
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
