import Project, { IProject } from "@/models/Project";
import connectDb from "@/lib/mongodb"

export function getProjectById(projectId:string){
    return Project.findById(projectId);
}

export async function getAllProjects():Promise<IProject[]> {
    await connectDb();
    const projects:IProject[]=await Project.find();
    return projects;
}

export async function createProject(project:IProject) {
    await connectDb();
    const newProject:IProject=await Project.create({
        clerkUserId:project.clerkUserId,
        title:project.title,
        description:project.description,
        technologies:project.technologies,
        githubLink:project.githubLink,
        liveUrl:project.liveUrl
    }

    );
    return newProject;
}