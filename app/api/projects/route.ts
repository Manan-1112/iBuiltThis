
import requireAdmin from "@/lib/admin";
import { IProject } from "@/models/Project";

import {getAllProjects,getProjectById , createProject} from "@/lib/project";
export async function POST(req: Request) {
    const userId=await requireAdmin()
    if(!userId) {
        return new Response("Unauthenticated",{status:404})
    }

    const project:IProject= await req.json();
    const newProject=createProject(project)
    return Response.json(newProject,{status:201})

}
export async function GET(){
    const projects=await getAllProjects()
    
    return Response.json(projects,{status:200})
}