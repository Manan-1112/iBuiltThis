
import mongoose, { Schema, Document, Model } from "mongoose";
type ProjectStatus="pending"|"approved"|"rejected"
export interface IProject extends Document {
  clerkUserId: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveUrl?: string;
  projectStatus:ProjectStatus
}

const ProjectSchema = new Schema<IProject>(
  {
    clerkUserId: {
      type: String,
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    technologies: {
      type: [String],
      required: true,
      default: [],
    },

    githubLink: {
      type: String,
      trim: true,
    },

    liveUrl: {
      type: String,
      trim: true,
    },
    projectStatus:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending"
    }
  },
  {
    timestamps: true,
  }
);

const Project: Model<IProject> =
  mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);

export default Project;

