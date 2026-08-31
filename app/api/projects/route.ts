import connectDb from "@/lib/mongodb"
import Project, { IProject } from "@/models/Project";
export async function POST(req: Request) {
    await connectDb();
    const project:IProject= await req.json();
    
    const newProject=await Project.create({
        clerkUserId:project.clerkUserId,
        title:project.title,
        description:project.description,
        technologies:project.technologies,
        githubLink:project.githubLink,
        liveUrl:project.liveUrl
    }
    );
    return Response.json(newProject,{status:201})

}
export async function GET(){
    await connectDb;
    const projects=await Project.find();
    
    return Response.json(projects,{status:200})
}