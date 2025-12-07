"use client"

import { useEffect, useState } from "react"

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("theme") as "light" | "dark" | "system" | null
    if (stored) {
      setTheme(stored)
      applyTheme(stored)
    } else {
      applyTheme("system")
    }
  }, [])

  const applyTheme = (newTheme: "light" | "dark" | "system") => {
    const root = document.documentElement
    let actualTheme = newTheme

    if (newTheme === "system") {
      actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }

    if (actualTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  return { theme, toggleTheme, mounted }
}
