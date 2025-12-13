"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { DocsSearchBar } from "@/components/docs-search-bar"

export function DocsHeader() {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-4 px-6">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-background">
              <span className="font-mono text-xs font-bold">AJ</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span className="text-base font-semibold">Docs</span>
              <div className="h-4 w-px bg-border" />
              <nav className="flex items-center gap-1">
                <Button variant="ghost" size="sm" className="text-sm font-medium">
                  API Reference
                </Button>
                <Button variant="ghost" size="sm" className="text-sm font-medium text-muted-foreground">
                  Cookbook
                </Button>
                <Button variant="ghost" size="sm" className="text-sm font-medium text-muted-foreground">
                  Console
                </Button>
              </nav>
            </div>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:block">
            <DocsSearchBar onResultClick={(result) => {
              // Handle search result click - you can implement navigation logic here
              console.log('Search result clicked:', result);
            }} />
          </div>          <Button asChild size="sm" variant="default" className="bg-blue-600 hover:bg-blue-700">
            <a href="/auth" className="text-white">
              Sign In
            </a>
          </Button>          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
