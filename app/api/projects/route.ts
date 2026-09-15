
import requireAuth from "@/lib/auth";
import { IProject } from "@/models/Project";
import {auth} from "@clerk/nextjs/server"
import { getAllApprovedProjects,createProject} from "@/lib/project";

export async function POST(req: Request) {

    const {userId}=await auth()
    if(!userId) {
        return new Response("Unauthenticated",{status:404})
    }
    const project:IProject= await req.json();
    project.clerkUserId=userId
    console.log(project);
    const newProject=await createProject(project)
    return Response.json(newProject,{status:201})

}
export async function GET(){
    const projects=await getAllApprovedProjects()

    return Response.json(projects,{status:200})
}