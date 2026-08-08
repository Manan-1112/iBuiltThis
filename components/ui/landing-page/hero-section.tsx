import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import  Link from "next/link"
import HeroInfo from "./hero-info";
import Featured from "../featured-section/featured";
export default function HeroSection() {
    const LiveBadge = () => {
        return (
            <Badge variant="outline" className="mb-8 mt-4 px-2 py-4 text-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2 mr-1">
                    <span className="absolute h-full w-full animate-ping bg-primary rounded-full opacity-75"></span>
                    <span className="h-2 w-2 relative inline-flex rounded-full bg-primary"></span>
                </span>
                <span className="text-muted-foreground font-medium">Join thousands of creators sharing their work</span>

            </Badge>
        )
    }
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20 ">
            <div className="wrapper flex flex-col items-center justify-center text-center">
                <LiveBadge />
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
                    Share What You&apos;ve Built, Discover What&apos;s Launching
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                    A community platform for creators to showcase their apps, AI tools,
                    SaaS products, and creative projects. Authentic launches, real
                    builders, genuine feedback.
                </p>
                <div className="flex">
                    <Button className="text-lg px-4 py-5 mr-4 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles size-5" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                        <Link href='/submit'>Share Your Project</Link>
                        </Button>
                    <Button className="text-lg px-4 py-5 bg-secondary hover:bg-secondary/80 shadow-lg text-black">
                    <Link href="/explore">Explore Projects</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-5" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Button>
                </div>
                <div className="flex flex-row gap-18 mt-8">
                    
                <HeroInfo num="2.5K+" desc="Projects Shared" logo="/rocket-icon.svg"/>
                <div className=" bg-black w-px opacity-50" ></div>
                <HeroInfo num="10K+" desc="Active Creators" logo="/users.svg"/>
                <div className=" bg-black w-px opacity-50"></div>
                <HeroInfo num="50K+" desc="Monthly Visitors" logo="/views.svg"/>
                </div>
            </div>
            <Featured/>
        </section>
    );
}