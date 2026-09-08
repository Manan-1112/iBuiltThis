
import requireAuth from "@/lib/admin";
import { IProject } from "@/models/Project";

import {getAllProjects, getAllApprovedProjects,createProject} from "@/lib/project";
export const dynamic = "force-static";
export const revalidate = 60;
export async function POST(req: Request) {

    // const userId=await requireAuth()
    // if(!userId) {
    //     return new Response("Unauthenticated",{status:404})
    // }

    const project:IProject= await req.json();
    const newProject=await createProject(project)
    return Response.json(newProject,{status:201})

}
export async function GET(){
    const projects=await getAllApprovedProjects()
    
    return Response.json(projects,{status:200})
}