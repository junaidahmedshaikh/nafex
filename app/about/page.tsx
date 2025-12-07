import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Heart, Users, Lightbulb } from "lucide-react"

export const metadata = {
  title: "About - nafex",
  description: "Learn about nafex and its creator",
}

export default function AboutPage() {
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
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">About Nafex</h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Built by developers, for developers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Nafex was born from a frustration with existing API testing tools. While tools like Postman and k6 are
            powerful, they either require manual work or complex scripting. We wanted something different.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            We created Nafex to be the missing piece—a tool that combines the ease of Postman with the power of k6, plus
            security scanning, resource monitoring, and step tracking. All in one Node.js package.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Today, Nafex helps developers ensure their APIs are secure, performant, and reliable without writing
            hundreds of lines of test code.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8 bg-card/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Simplicity</h3>
              <p className="text-muted-foreground">
                API testing should be simple. We believe in minimal boilerplate and maximum clarity.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Developers First</h3>
              <p className="text-muted-foreground">
                Built by developers, for developers. We understand your needs and frustrations.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground">We believe in open source and community-driven development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creator */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-8">Creator</h2>
          <p className="text-lg text-muted-foreground mb-4">Nafex was created by</p>
          <h3 className="text-2xl font-bold mb-2">Junaid Ahmed Shaikh</h3>
          <p className="text-muted-foreground">
            Full-stack developer passionate about building tools that make developers' lives easier.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
