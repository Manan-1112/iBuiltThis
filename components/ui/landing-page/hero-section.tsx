import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20 ">
            <div className="wrapper flex flex-col items-center justify-center text-center">
                <Badge variant="outline" className="mb-4">
                    Join thousands of creators sharing their work
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
                    Share What You&apos;ve Built, Discover What&apos;s Launching
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                    A community platform for creators to showcase their apps, AI tools,
                    SaaS products, and creative projects. Authentic launches, real
                    builders, genuine feedback.
                </p>
                <Button>Share your projects</Button>
                <Button>Explore projects</Button>
            </div>
        </section>
    );
}