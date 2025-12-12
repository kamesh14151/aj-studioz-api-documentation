"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Overview", href: "#introduction", active: true },
      { title: "Introduction", href: "#introduction" },
      { title: "The Hitchhiker's Guide to AJ STUDIOZ", href: "#quick-start" },
      { title: "Models and Pricing", href: "#available-models" },
      { title: "What's New?", href: "#whats-new" },
    ],
  },
  {
    title: "Key Information",
    items: [
      { title: "Authentication", href: "#authentication" },
      { title: "Manage Billing", href: "#billing" },
      { title: "Consumption and Rate Limits", href: "#rate-limits" },
      { title: "Regional Endpoints", href: "#endpoints" },
    ],
  },
  {
    title: "AJ STUDIOZ API",
    items: [
      { title: "Overview", href: "#aj-overview" },
      { title: "Available Models", href: "#available-models" },
      { title: "API Endpoints", href: "#aj-endpoints" },
      { title: "Code Examples", href: "#aj-examples" },
    ],
  },
  {
    title: "NEXARIQ Lynxa Pro",
    items: [
      { title: "Overview", href: "#nexariq-overview" },
      { title: "Model Specifications", href: "#model-specs" },
      { title: "API Endpoints", href: "#nexariq-endpoints" },
      { title: "Generate API Key", href: "#generate-key" },
      { title: "Usage Examples", href: "#nexariq-examples" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "Comparison Guide", href: "#comparison" },
      { title: "Best Practices", href: "#best-practices" },
      { title: "Tool Use", href: "#tool-use" },
      { title: "Images", href: "#images" },
    ],
  },
]

export function DocsSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(navigation.map((section) => section.title))

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
                    <a
                      href={item.href}
                      className={cn(
                        "block py-2 px-3 text-sm rounded-md transition-colors",
                        item.active
                          ? "text-foreground font-medium bg-muted"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent",
                      )}
                    >
                      {item.title}
                    </a>
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
