
import requireAuth from "@/lib/auth";
import { IProject } from "@/models/Project";
import {auth} from "@clerk/nextjs/server"
import {getAllProjects, getAllApprovedProjects,createProject} from "@/lib/project";
export const dynamic = "force-static";
export const revalidate = 60;
export async function POST(req: Request) {

    // const {userId}=await auth()
    // if(!userId) {
    //     return new Response("Unauthenticated",{status:404})
    // }
    // const body:IProject = await req.json();
    // const project1={
    //     clerkUserId:userId,
    //     title:body.title,
    //     description:body.description,
    //     technologies:body.technologies,
    //     githubLink:body.githubLink,
    //     liveUrl:body.liveUrl
    // }
    const project:IProject= await req.json();
    // project.clerkUserId=userId;
    console.log(project);
    const newProject=await createProject(project)
    return Response.json(newProject,{status:201})

}
export async function GET(){
    const projects=await getAllApprovedProjects()
    
    return Response.json(projects,{status:200})
}