"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

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
      { title: "Where is Hosted", href: "/docs/aj-studioz-api/hosting" },
    ],
  },
  {
    title: "NEXARIQ Lynxa Pro",
    items: [
      { title: "Overview", href: "/docs/nexariq-lynxa-pro" },
      { title: "Model Specifications", href: "/docs/nexariq-lynxa-pro/specifications" },
      { title: "API Endpoints", href: "/docs/nexariq-lynxa-pro/endpoints" },
      { title: "Generate API Key", href: "/docs/nexariq-lynxa-pro/generate-key" },
      { title: "Usage Examples", href: "/docs/nexariq-lynxa-pro/examples" },
    ],
  },
]

export function DocsSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(navigation.map((section) => section.title))
  const pathname = usePathname()

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  return (
    <aside className="fixed top-16 hidden h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r lg:block">
      <nav className="py-8 px-6 space-y-8">
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
  )
}
