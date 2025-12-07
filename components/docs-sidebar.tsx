"use client";

import type React from "react";

import { useState } from "react";
import {
  ChevronDown,
  Code,
  Zap,
  Monitor,
  BookOpen,
  Lightbulb,
  Bug,
  Package,
} from "lucide-react";

interface SidebarSection {
  title: string;
  icon: React.ReactNode;
  items: { label: string; href: string }[];
}

const sections: SidebarSection[] = [
  {
    title: "Getting Started",
    icon: <Zap className="h-4 w-4" />,
    items: [
      { label: "Installation", href: "#installation" },
      { label: "Prerequisites", href: "#prerequisites" },
      { label: "Install via npm", href: "#install-npm" },
      { label: "Install via yarn", href: "#install-yarn" },
      { label: "Configure ESM", href: "#configure-esm" },
    ],
  },
  {
    title: "Quick Start",
    icon: <Zap className="h-4 w-4" />,
    items: [
      { label: "Basic API Testing", href: "#basic-api-testing" },
      { label: "Step Tracking", href: "#quick-step-tracking" },
      { label: "System Monitoring", href: "#quick-system-monitoring" },
      { label: "Complete Test Suite", href: "#complete-test-suite" },
    ],
  },
  {
    title: "API Module",
    icon: <Code className="h-4 w-4" />,
    items: [
      { label: "Overview", href: "#api-overview" },
      { label: "Creating Instance", href: "#api-instance" },
      { label: "HTTP Methods", href: "#http-methods" },
      { label: "Comprehensive Testing", href: "#comprehensive-testing" },
    ],
  },
  {
    title: "Step Tracker",
    icon: <BookOpen className="h-4 w-4" />,
    items: [
      { label: "Overview", href: "#step-overview" },
      { label: "Global Instance", href: "#global-instance" },
      { label: "Cross-Component", href: "#cross-component" },
    ],
  },
  {
    title: "System Monitoring",
    icon: <Monitor className="h-4 w-4" />,
    items: [
      { label: "Overview", href: "#system-overview" },
      { label: "Using Monitor", href: "#using-monitor" },
    ],
  },
  {
    title: "Best Practices",
    icon: <Lightbulb className="h-4 w-4" />,
    items: [{ label: "Best Practices", href: "#best-practices" }],
  },
  {
    title: "Troubleshooting",
    icon: <Bug className="h-4 w-4" />,
    items: [
      { label: "Error Handling", href: "#error-handling" },
      { label: "Common Issues", href: "#troubleshooting" },
    ],
  },
];

export function DocsSidebar() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["Getting Started", "API Module"])
  );

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <aside className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-card border-r border-border overflow-y-auto">
      <nav className="p-6 space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center gap-2 w-full text-sm font-semibold text-foreground hover:text-primary transition-colors py-2"
            >
              <span className="text-primary">{section.icon}</span>
              <span>{section.title}</span>
              <ChevronDown
                className={`h-4 w-4 ml-auto transition-transform ${
                  expandedSections.has(section.title) ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedSections.has(section.title) && (
              <div className="mt-2 space-y-1 pl-6">
                {section.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 rounded px-2 hover:bg-primary/10"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
