import NavBar from "@/components/ui/navbar/navbar"
import requireAuth from "@/lib/admin";
import { RedirectToSignIn } from "@clerk/nextjs";
import { LiveBadge } from "@/components/ui/live-badge";
import ProjectForm from "@/components/ui/project-submission/projectForm";
export default async function SubmitProjectPage() {
    const userId = await requireAuth();
    console.log(userId);
    if (!userId) return (<RedirectToSignIn />)

    return (
        <div>
            <NavBar />

            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2 max-w-5xl mt-4">
                    Submit your Project
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground  max-w-2xl leading-relaxed">
                    Share what you've built with the community.
                </p>
                <LiveBadge text="Your project will be reviewed before appearing publicly"/>
            </div>
            <ProjectForm/>
        </div>
    )
}