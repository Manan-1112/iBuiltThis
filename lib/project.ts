import Project, { IProject } from "@/models/Project";
import connectDb from "@/lib/mongodb"

export function getProjectById(projectId:string){
    return Project.findById(projectId);
}

export async function getAllProjects():Promise<IProject[]> {
    await connectDb();
    const projects:IProject[]=await Project.find({projectStatus:"approved"});
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

export async function getAllPendingProjects(){
    await connectDb();
    const projects=await Project.find({projectStatus:"pending"})
    return projects;
}

export async function updateProjectStatus(projectId:string,projectStatus:string){
    await connectDb();
    const project=await Project.findByIdAndUpdate(projectId,{projectStatus},{returnDocument:"after"});
    if(!project) return null;
    return project;

}