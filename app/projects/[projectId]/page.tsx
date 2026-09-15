import { getProjectById } from "@/lib/project";
import mongoose from "mongoose";
import { notFound } from "next/navigation";
import { Star, ArrowLeftIcon } from "lucide-react";
import NavBar from "@/components/ui/navbar/navbar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export default async function ProjectPage({ params, }: { params: Promise<{ projectId: string }> }) {
    const { projectId } = await params
    if (!mongoose.Types.ObjectId.isValid(projectId)) return (notFound())

    const data = await getProjectById(projectId);

    if (!data) {
        notFound();
    }

    const { project, user } = data;

    return (
        <div>
            <NavBar />
            <div className="px-20 mt-14">
                <Link href="/explore">
                <div className="flex gap-2 mb-2">
                    <ArrowLeftIcon></ArrowLeftIcon>
                    Back to Explore
                </div>
                </Link>
                <h1 className=" text-xl sm:text-2xl lg:text-2xl font-bold tracking-tight mb-2 max-w-5xl flex items-center gap-2 mt-8">
                    <span><Star width={30} height={30} stroke="#c94e8c"></Star></span>
                    {project.title}
                </h1>
                <p className="text-lg py-2">{project.description}</p>

                <div className="flex gap-1 py-6">
                    {project.technologies?.map((t, index) => (
                        <Badge
                            key={index}
                            className="text-xs p-4 text-center bg-secondary text-secondary-foreground shadow-secondary-foreground max-w-full whitespace-normal"
                        >
                            {t}
                        </Badge>
                    ))}
                </div>
                <div className="border rounded-lg p-6 bg-primary/10">
                    <h2 className="text-lg font-semibold mb-4">Product Details</h2>

                    <div className="space-y-3">
                        <div>
                            <span className="text-muted-foreground">Launched:</span>
                            <span className="font-medium">{project.createdAt.toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric"
                            })}</span>
                        </div>

                        <div>
                            <span className="text-muted-foreground">Submitted by:</span>
                            <span className="font-medium">{user?.email}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}