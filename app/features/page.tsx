import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Zap, Clock, Shield, BarChart3, Code, Lock, Cpu, Eye } from "lucide-react"

export const metadata = {
  title: "Features - nafex",
  description: "Explore nafex powerful features for API testing",
}

export default function FeaturesPage() {
  const features = [
    {
      icon: Zap,
      title: "1-Line Testing",
      description: "Write comprehensive tests with minimal code. Nafex handles the complexity.",
    },
    {
      icon: BarChart3,
      title: "Beautiful Output",
      description: "Stunning, readable test reports generated automatically in the console.",
    },
    {
      icon: Shield,
      title: "Built-in Security",
      description: "Security scanning included out of the box. Detect vulnerabilities automatically.",
    },
    {
      icon: Clock,
      title: "Real Resource Monitoring",
      description: "CPU, memory, and disk monitoring for each test. Understand your API's footprint.",
    },
    {
      icon: Code,
      title: "Cross-Component Tracking",
      description: "Track test flow across services and microservices with step tracking.",
    },
    {
      icon: Lock,
      title: "Automated Security Audits",
      description: "Scan for common vulnerabilities and security issues automatically.",
    },
    {
      icon: Cpu,
      title: "Performance Benchmarks",
      description: "Load, stress, and spike testing to understand API performance limits.",
    },
    {
      icon: Eye,
      title: "Detailed Reporting",
      description: "JSON, HTML, and CSV reports for comprehensive documentation.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(100, 50, 255, 0.1) 0%, transparent 50%)",
          }}
        ></div>

        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Powerful Features
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Everything you need for comprehensive API testing, security scanning, and performance monitoring.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="p-8 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors group"
                >
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
