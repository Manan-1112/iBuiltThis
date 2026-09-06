import requireAdmin from "@/lib/admin";
import { updateProjectStatus } from "@/lib/project";
export async function PATCH(req:Request,{params}:{params:Promise<{projectId:string}>}){
    const userId=requireAdmin();
    if(!userId) return new Response("Unauthorized",{status:401});

    const {projectId}=await params;
    const {projectStatus}=await req.json();
    if(!["approved","rejected"].includes(projectStatus)){
        return new Response("Invalid Project Status",{status:401});
    }
    const project=await updateProjectStatus(projectId,projectStatus);
    if(!project) return new Response("Project Not found",{status:404});
    
    return Response.json(project,{status:200});
    


}