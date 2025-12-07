"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"

interface SearchResult {
  id: string
  title: string
  category: string
  content: string
  url: string
}

const searchIndex: SearchResult[] = [
  {
    id: "1",
    title: "Installation",
    category: "Getting Started",
    content: "npm install nafex",
    url: "/docs#installation",
  },
  {
    id: "2",
    title: "Quick Start",
    category: "Getting Started",
    content: "Initialize and use Nafex",
    url: "/docs#quick-start",
  },
  {
    id: "3",
    title: "API Testing",
    category: "API Module",
    content: "HTTP testing with ApiTester",
    url: "/docs#api-testing",
  },
  {
    id: "4",
    title: "Step Tracker",
    category: "Step Module",
    content: "Track execution steps",
    url: "/docs#step-tracker",
  },
  {
    id: "5",
    title: "System Monitoring",
    category: "System Module",
    content: "Monitor CPU, memory, disk",
    url: "/docs#system-monitoring",
  },
  { id: "6", title: "GET Request", category: "API Methods", content: "Make GET requests", url: "/docs#get-request" },
  {
    id: "7",
    title: "POST Request",
    category: "API Methods",
    content: "Create resources with POST",
    url: "/docs#post-request",
  },
  {
    id: "8",
    title: "Error Handling",
    category: "Best Practices",
    content: "Handle errors gracefully",
    url: "/docs#error-handling",
  },
]

export function SearchBox() {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (search.trim()) {
      const filtered = searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.content.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase()),
      )
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [search])

  return (
    <div className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search documentation..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 p-1 hover:bg-muted rounded transition-colors"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((result) => (
            <a
              key={result.id}
              href={result.url}
              onClick={() => setSearch("")}
              className="block px-4 py-3 hover:bg-muted transition-colors border-b border-border last:border-b-0"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-foreground">{result.title}</p>
                  <p className="text-sm text-muted-foreground">{result.content}</p>
                </div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full whitespace-nowrap ml-2">
                  {result.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
