import { getProjectById } from "@/lib/project";
export async function GET(req:Request,{params}:{params:Promise<{projectId:string}>}){
    const {projectId}=await params;
    
    console.log(projectId);
    const project=await getProjectById(projectId);
    console.log("project ",project);
    if(!project){
        return new Response("No project found",{status:404})
    }
    return Response.json(project);
    
}