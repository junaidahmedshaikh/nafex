"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface CodeBlockProps {
  code: string
  language: string
  title?: string
}

export function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const highlightCode = (code: string, lang: string) => {
    const lines = code.split("\n")

    return lines.map((line, idx) => {
      const highlighted = line
        // Import/Export statements - blue
        .replace(/^(\s*)(import|export|from|as)\b/g, '$1<span class="text-blue-400">$2</span>')
        // Keywords - purple
        .replace(
          /\b(const|let|var|async|await|function|return|if|else|try|catch|finally|throw|new|class|extends|static)\b/g,
          '<span class="text-purple-400">$1</span>',
        )
        // Strings - green
        .replace(/(['"`])([^'"`]*)\1/g, '<span class="text-green-400">$1$2$1</span>')
        // Numbers - cyan
        .replace(/\b(\d+)\b/g, '<span class="text-cyan-400">$1</span>')
        // Comments - gray
        .replace(/(\/\/.*$|\/\*.*\*\/)/g, '<span class="text-gray-500">$1</span>')
        // Objects/Methods - yellow
        .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, '<span class="text-yellow-400">$1</span>')
        // Properties - orange
        .replace(/\.([a-zA-Z_][a-zA-Z0-9_]*)/g, '.<span class="text-orange-400">$1</span>')

      return (
        <div key={idx} className="flex">
          <span className="text-gray-600 w-12 text-right pr-4 select-none">{idx + 1}</span>
          <span dangerouslySetInnerHTML={{ __html: highlighted }} className="flex-1" />
        </div>
      )
    })
  }

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden mb-6">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
        <span className="text-sm font-mono text-gray-400">{title || language}</span>
        <button
          onClick={copyToClipboard}
          className="p-1.5 hover:bg-gray-700 rounded transition-colors"
          title="Copy code"
        >
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-gray-400" />}
        </button>
      </div>
      <pre className="px-4 py-4 overflow-x-auto font-mono text-sm text-gray-100">
        <code className="font-mono">{highlightCode(code, language)}</code>
      </pre>
    </div>
  )
}
