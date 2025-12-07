import Link from "next/link"
import { Code, Github, Package } from "lucide-react"

export function Footer() {
  return (
    <footer className="px-4 py-12 sm:px-6 lg:px-8 border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold">nafex</span>
            </div>
            <p className="text-sm text-muted-foreground">Lightweight API testing for developers</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-muted-foreground hover:text-foreground transition-colors">
                  Examples
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.npmjs.com/package/nafex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  npm Package
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Author</h4>
            <p className="text-sm text-muted-foreground">Junaid Ahmed Shaikh</p>
            <p className="text-sm text-muted-foreground mt-4">© 2025 nafex. All rights reserved.</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>Made with purpose for developers</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/nafex"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Package className="h-4 w-4" /> npm
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
