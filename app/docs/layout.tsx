import type React from "react"
import { DocsSidebar } from "@/components/docs-sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <DocsSidebar />
      <div className="flex-1 lg:ml-64">{children}</div>
    </div>
  )
}
