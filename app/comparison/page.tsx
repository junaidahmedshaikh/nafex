import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Check, X } from "lucide-react";
import HeroHeader from "@/components/hero-header";
export const metadata = {
  title: "Comparison - nafex",
  description: "How nafex compares to other API testing tools",
};

export default function ComparisonPage() {
  const comparison = [
    {
      feature: "API Testing",
      nafex: true,
      postman: true,
      k6: true,
    },
    {
      feature: "Automated Testing",
      nafex: true,
      postman: false,
      k6: true,
    },
    {
      feature: "Security Scanning",
      nafex: true,
      postman: false,
      k6: false,
    },
    {
      feature: "Performance Testing",
      nafex: true,
      postman: false,
      k6: true,
    },
    {
      feature: "Load/Stress/Spike Testing",
      nafex: true,
      postman: false,
      k6: true,
    },
    {
      feature: "System Monitoring",
      nafex: true,
      postman: false,
      k6: false,
    },
    {
      feature: "CPU/Memory/Disk Monitoring",
      nafex: true,
      postman: false,
      k6: false,
    },
    {
      feature: "Step Tracking",
      nafex: true,
      postman: false,
      k6: false,
    },
    {
      feature: "Cross-Component Tracking",
      nafex: true,
      postman: false,
      k6: false,
    },
    {
      feature: "Beautiful Console Reports",
      nafex: true,
      postman: false,
      k6: false,
    },
    {
      feature: "JSON Reporting",
      nafex: true,
      postman: true,
      k6: true,
    },
    {
      feature: "HTML Reporting",
      nafex: true,
      postman: true,
      k6: false,
    },
    {
      feature: "CSV Reporting",
      nafex: true,
      postman: true,
      k6: false,
    },
    // {
    //   feature: "CI/CD Ready",
    //   nafex: true,
    //   postman: true,
    //   k6: true,
    // },
    {
      feature: "Node-native",
      nafex: true,
      postman: false,
      k6: false,
    },
    {
      feature: "Zero Dependencies",
      nafex: true,
      postman: false,
      k6: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}

      <HeroHeader
        title="How Nafex Compares"
        subtitle="See how nafex stacks up against other popular API testing tools."
      />

      {/* Comparison Table */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-primary">
                  Nafex
                </th>
                <th className="text-center py-4 px-4 font-semibold text-muted-foreground">
                  Postman
                </th>
                <th className="text-center py-4 px-4 font-semibold text-muted-foreground">
                  k6
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-border/50 hover:bg-card/30 transition-colors"
                >
                  <td className="py-4 px-4 font-medium">{row.feature}</td>
                  <td className="text-center py-4 px-4">
                    {row.nafex ? (
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {row.postman ? (
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {row.k6 ? (
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </div>
  );
}
