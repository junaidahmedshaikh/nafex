"use client";

import {
  ArrowRight,
  Zap,
  Clock,
  Shield,
  BarChart3,
  Code,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useEffect, useRef } from "react";
import HeroHeader from "@/components/hero-header";
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = heroRef.current;
    if (element) {
      element.classList.add("animate-fade-in-up");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(100, 50, 255, 0.1) 0%, transparent 50%)",
          }}
        ></div>

        <div ref={heroRef} className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary">
            <Zap className="h-4 w-4" />
            Test APIs with Confidence
          </div>

          <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Test APIs with Confidence
            <br />
            <span className="text-muted-foreground">
              One Line. Zero Headaches.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Nafex is the all-in-one Node.js library for automated API
            testing—combining security scans, performance benchmarks,
            reliability checks, and beautiful reporting into a single,
            beginner-friendly package.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/get-started">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a
              href="https://github.com/junaidahmedshaikh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-transparent"
              >
                View on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What is Nafex Section */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8 bg-card/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            What is Nafex?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Nafex is a complete API testing suite for developers who want to
            ensure their APIs are secure, performant, and reliable—without
            writing hundreds of lines of test code.
          </p>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Think of Nafex as a powerful combination of:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Postman's ease + ✅ k6's performance insights",
              "✅ Security scanning + ✅ Resource monitoring",
              "✅ All in one Node.js package",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Developers Love Nafex */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
            Why Developers Love Nafex
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Zap,
                title: "1-Line Testing",
                description: "Write comprehensive tests with minimal code",
              },
              {
                icon: BarChart3,
                title: "Beautiful Output",
                description: "Stunning, readable test reports by default",
              },
              {
                icon: Shield,
                title: "Built-in Security",
                description: "Security scanning included out of the box",
              },
              {
                icon: Clock,
                title: "Real Resource Monitoring",
                description: "CPU, memory, and disk monitoring",
              },
              {
                icon: Code,
                title: "Cross-Component Tracking",
                description: "Track test flow across services",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-border bg-background/50 hover:border-primary/50 transition-colors group text-center"
                >
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mx-auto">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Example */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8 bg-card/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Quick Start</h2>

          <div className="rounded-lg border border-border bg-background p-6 font-mono text-sm overflow-x-auto mb-8">
            <pre className="text-muted-foreground">
              <code>{`const api = new ApiTester('https://api.example.com');
await api.test('/users/1');`}</code>
            </pre>
          </div>

          <Link href="/examples">
            <Button variant="outline" className="rounded-full bg-transparent">
              See More Examples
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Test with Confidence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join developers worldwide using Nafex for reliable API testing.
          </p>
          <Link href="/get-started">
            <Button
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
