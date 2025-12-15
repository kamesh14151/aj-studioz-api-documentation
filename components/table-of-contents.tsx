"use client"

import { useState, useEffect } from "react"

interface TocItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .filter((heading) => heading.id && heading.textContent)
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      }))
      .filter((item) => item.level >= 2 && item.level <= 4) // Only h2, h3, h4

    setToc(headings)

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-100px 0% -66%",
        threshold: 0
      }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  if (toc.length === 0) {
    return null
  }

  return (
    <aside className="hidden xl:block w-56 flex-shrink-0">
      <div className="sticky top-24 py-12">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-3">On this page</h4>
        </div>
        <nav>
          <ul className="space-y-1 text-sm border-l border-border pl-4">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`
                    block py-1.5 transition-all duration-200 hover:translate-x-0.5
                    ${item.level === 2 ? 'font-medium' : ''}
                    ${item.level === 3 ? 'ml-4 text-xs' : ''}
                    ${item.level === 4 ? 'ml-8 text-xs' : ''}
                    ${activeId === item.id 
                      ? 'text-primary border-l-2 border-primary -ml-[1px] pl-3 font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
