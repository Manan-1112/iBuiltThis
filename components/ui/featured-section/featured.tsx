"use client"
import { Star } from "lucide-react"
import Card from "./featured-card"
import { useEffect,useState } from "react"
type Project={
    _id:string,
    title:string,
    description:string,
    technologies:[string],
    githubLink:string,
    liveUrl:string
}
export default function Featured(){
    const [projects,setProjects]=useState<Project[]>([])
    useEffect(() => {
            const fetchProjects=async () => {
                const res=await fetch(`/api/projects`);
                const data=await res.json();
                setProjects(data);
            }
            fetchProjects();
        }
    ,[])

    return(
        <div className="pt-20 pb-20 flex flex-col ">
           <div className="flex items-center justify-items-start">
           
                <Star width={40} height={40} stroke="#c94e8c"></Star>
                <h1 className=" text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 max-w-5xl ">
                Featured Today</h1>
            </div>
            <p className="text-xl">Top picks from our community this week</p>
            <div className="m-4 grid grid-cols-3 gap-8">

              {projects.map((project)=>(
                (
                    <Card key={project._id} title={project.title} desc={project.description} tags={project.technologies} githubLink={project.githubLink} liveLink={project.liveUrl}/>
                )
    ))}
            </div>
            
        </div>
    )
}