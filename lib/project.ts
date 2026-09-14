import Project, { IProject } from "@/models/Project";
import connectDb from "@/lib/mongodb"

export async function getProjectById(projectId: string) {
  await connectDb()
  return Project.findById(projectId).select("title description technologies githubLink liveUrl projectStatus createdAt updatedAt");
}

export async function getAllProjects(): Promise<IProject[]> {
  await connectDb();
  const projects = await Project.find({ projectStatus: "approved" })
    .select("title description technologies githubLink liveUrl createdAt updatedAt")
    .sort({ createdAt: -1 })
    .lean<IProject[]>();

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

export async function getAllPendingProjects() {
  await connectDb();
  const projects = await Project.find({ projectStatus: "pending" })
    .select("_id title description technologies githubLink liveUrl createdAt")
    .sort({ createdAt: -1 })
    .lean<IProject[]>();

  return projects;
}

export async function updateProjectStatus(projectId:string,projectStatus:string){
    await connectDb();
    const project=await Project.findByIdAndUpdate(projectId,{projectStatus},{returnDocument:"after"});
    if(!project) return null;
    return project;

}

export async function getAllApprovedProjects(): Promise<IProject[]> {
  await connectDb();
  const projects = await Project.find({ projectStatus: "approved" })
    .select("title description technologies githubLink liveUrl createdAt updatedAt isFeatured")
    .sort({ createdAt: -1 })
    .lean<IProject[]>();

  return projects;
}
// export async function featuredProject(){
//   await connectDb();
//   const project=await Project.findOneAndUpdate(
//     {title:"Modern E-commerce Website"},
//     {$set:{isFeatured:true}},
//     {returnDocument:"after"}
//   );
//     if(!project) console.log("project not found");
  
//     else console.log(project.isFeatured)
    
// }
