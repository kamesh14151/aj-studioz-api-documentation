"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { DocsSearchBar } from "@/components/docs-search-bar"
import Image from "next/image"
import Link from "next/link"

export function DocsHeader() {
  const handleMobileMenuToggle = () => {
    window.dispatchEvent(new Event('toggle-mobile-sidebar'))
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-2 sm:gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden" 
            onClick={handleMobileMenuToggle}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <Link href="/docs/getting-started" className="flex items-center justify-center hover:opacity-80 transition-opacity">
              <Image 
                src="/AJ.svg" 
                alt="AJ STUDIOZ Logo" 
                width={36}
                height={36}
                className="h-7 w-7 sm:h-9 sm:w-9 object-contain"
                priority
              />
            </Link>
            <div className="hidden sm:flex items-center gap-4">
              <span className="text-base font-semibold">Docs</span>
              <div className="h-4 w-px bg-border" />
              <nav className="hidden md:flex items-center gap-1">
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

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <div className="hidden md:block">
            <DocsSearchBar onResultClick={(result) => {
              // Handle search result click - you can implement navigation logic here
              console.log('Search result clicked:', result);
            }} />
          </div>
          <Button asChild size="sm" variant="default" className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm">
            <a href="/auth" className="text-white px-2 sm:px-3">
              <span className="hidden sm:inline">Sign In</span>
              <span className="sm:hidden">Login</span>
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
