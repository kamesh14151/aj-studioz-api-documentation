export function TableOfContents() {
  const sections = [
    { title: "Welcome", href: "#introduction" },
    { title: "Jump right in", href: "#introduction" },
    { title: "Questions and feedback", href: "#introduction" },
    { title: "Quick Start", href: "#quick-start" },
    { title: "Authentication", href: "#authentication" },
    { title: "AJ STUDIOZ API", href: "#aj-overview" },
    { title: "Available Models", href: "#available-models" },
    { title: "API Endpoints", href: "#aj-endpoints" },
    { title: "Code Examples", href: "#aj-examples" },
    { title: "NEXARIQ Lynxa Pro", href: "#nexariq-overview" },
    { title: "Specifications", href: "#model-specs" },
    { title: "Generate API Key", href: "#generate-key" },
    { title: "Usage Examples", href: "#nexariq-examples" },
    { title: "Comparison Guide", href: "#comparison" },
    { title: "Best Practices", href: "#best-practices" },
    { title: "Error Codes", href: "#error-codes" },
  ]

  return (
    <aside className="hidden xl:block w-56 flex-shrink-0">
      <div className="sticky top-24 py-12">
        <nav>
          <ul className="space-y-1 text-sm border-l border-border pl-4">
            {sections.map((section) => (
              <li key={section.href}>
                <a
                  href={section.href}
                  className="text-muted-foreground hover:text-foreground transition-colors block py-1.5 hover:translate-x-0.5 transition-transform"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
