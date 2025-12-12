"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun, Search, Menu } from "lucide-react"
import { useState, useEffect } from "react"

export function DocsHeader() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setDarkMode(isDark)
  }, [])

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark")
    setDarkMode(!darkMode)
  }

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
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex gap-2 text-sm text-muted-foreground hover:text-foreground h-9 px-3"
          >
            <Search className="h-4 w-4" />
            <span>Search</span>
            <kbd className="pointer-events-none hidden h-5 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span>⌘</span>K
            </kbd>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="h-9 w-9">
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
