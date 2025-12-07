import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Get Started - nafex",
  description: "Start using nafex today",
};

export default function GetStartedPage() {
  const useCases = [
    {
      title: "Full-stack Developers",
      description:
        "Build and test your APIs with confidence. Perfect for microservices.",
    },
    {
      title: "Security Teams",
      description: "Automated security scanning for all your API endpoints.",
    },
    // {
    //   title: "DevOps Engineers",
    //   description: "CI/CD integration for automated API testing in your pipelines.",
    // },
    {
      title: "Product Teams",
      description:
        "Pre-deployment testing to catch issues before they reach users.",
    },
    {
      title: "Beginners",
      description: "Simple syntax and minimal setup. Start testing in minutes.",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Install Nafex",
      description: "Add nafex to your project via npm",
      code: "npm install nafex",
    },
    {
      number: 2,
      title: "Import the Library",
      description: "Import the modules you need",
      code: `import { ApiTester, StepTracker } from 'nafex';`,
    },
    {
      number: 3,
      title: "Write Your First Test",
      description: "Create a simple API test",
      code: `const api = new ApiTester('https://api.example.com');
await api.test('/users/1');`,
    },
    {
      number: 4,
      title: "Run and Monitor",
      description: "Execute tests and view beautiful reports",
      code: "node test.js",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(100, 50, 255, 0.1) 0%, transparent 50%)",
          }}
        ></div>

        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get Started with Nafex
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Install nafex and start testing your APIs in minutes.
          </p>
        </div>
      </section>

      {/* Installation */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8 bg-card/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Installation</h2>

          <div className="rounded-lg border border-border bg-background p-6 font-mono text-sm mb-8 overflow-x-auto">
            <div className="text-muted-foreground">$ npm install nafex</div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Nafex is available on npm and works with any JavaScript runtime. No
            external dependencies required.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Getting Started in 4 Steps
          </h2>

          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border border-border rounded-lg p-8 bg-card/50"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20">
                      <span className="text-primary font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <div className="rounded-lg border border-border/50 bg-background p-4 font-mono text-sm overflow-x-auto">
                      <code className="text-muted-foreground">{step.code}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Use Nafex */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8 bg-card/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Who Should Use Nafex?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-background/50 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Common Use Cases</h2>

          <ul className="space-y-4">
            {[
              "Pre-deployment testing—Ensure APIs work before going live",
              "Regression testing—Catch breaking changes automatically",
              "Load testing—Understand your API's performance limits",
              "Security audits—Scan for vulnerabilities automatically",
              "Documentation generation—Auto-generate API docs from tests",
            ].map((useCase, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span className="text-muted-foreground">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Install nafex today and start building more reliable APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.npmjs.com/package/nafex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
              >
                View on npm
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/docs">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full w-full sm:w-auto bg-transparent"
              >
                Read Docs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
