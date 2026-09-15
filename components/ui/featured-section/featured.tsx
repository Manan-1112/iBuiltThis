
import { Star } from "lucide-react"
import Card from "./featured-card"
import { getAllApprovedProjects } from "@/lib/project"

export default async function Featured(){
    const projects=await getAllApprovedProjects();

    return(
        <div className="pt-20 pb-20 flex flex-col ">
           <div className="px-20">
           
                
                <h1 className=" text-2xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-2 max-w-5xl flex items-center gap-2">
                    <span><Star width={40} height={40} stroke="#c94e8c"></Star></span>
                Featured Today</h1>
            </div>
            <p className="text-lg px-20">Top picks from our community this week</p>
            <div className="m-4 grid grid-cols-3 gap-8 px-20 ">

              {projects.map((project)=>(
                (
                    <Card  key={project._id.toString()} title={project.title} desc={project.description} tags={project.technologies} githubLink={project.githubLink} liveLink={project.liveUrl} isFeatured={project.isFeatured} projectId={project._id.toString()}/>
                )
    ))}
            </div>
            
        </div>
    )
}