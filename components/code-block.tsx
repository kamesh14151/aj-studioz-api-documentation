"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CodeBlock as UICodeBlock, CodeBlockCode, CodeBlockGroup } from "@/components/ui/code-block"

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <UICodeBlock className="relative group">
      <CodeBlockGroup className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="sm"
          variant="ghost"
          onClick={copyToClipboard}
          className="h-8 w-8 p-0 bg-background/80 hover:bg-accent border border-border"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </CodeBlockGroup>
      <CodeBlockCode 
        code={code} 
        language={language}
        theme="github-dark-dimmed"
        className="[&>pre]:!bg-transparent"
      />
    </UICodeBlock>
  )
}
