import Project, { IProject } from "@/models/Project";
import connectDb from "@/lib/mongodb"
import { clerkClient } from "@clerk/nextjs/server";
export async function getProjectById(projectId: string) {
  await connectDb()
  const project = await Project.findById(projectId)
    .select(
      "clerkUserId title description technologies githubLink liveUrl projectStatus createdAt updatedAt"
    )
    .lean();

  if (!project) {
    return null;
  }

  const clerk = await clerkClient();

  let user = null;

  try {
    const clerkUser = await clerk.users.getUser(project.clerkUserId);

    user = {
      name: clerkUser.fullName,
      email: clerkUser.primaryEmailAddress?.emailAddress
    };
  } catch {
    user = {
      name: "Unknown User",
      email: ""
    };
  }
  return {
    project,
    user
  };
}

export async function getAllProjects(): Promise<IProject[]> {
  await connectDb();
  const projects = await Project.find({ projectStatus: "approved" })
    .select("title description technologies githubLink liveUrl createdAt updatedAt")
    .sort({ createdAt: -1 })
    .lean<IProject[]>();

  return projects;
}

export async function createProject(project: IProject) {
  await connectDb();
  const newProject: IProject = await Project.create({
    clerkUserId: project.clerkUserId,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    githubLink: project.githubLink,
    liveUrl: project.liveUrl
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

export async function updateProjectStatus(projectId: string, projectStatus: string) {
  await connectDb();
  const project = await Project.findByIdAndUpdate(projectId, { projectStatus }, { returnDocument: "after" });
  if (!project) return null;
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