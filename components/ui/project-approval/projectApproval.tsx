"use client"
import { notFound } from "next/navigation";
import { useEffect,useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
export default function ProjectApprovalPage(){
    async function getProjects() {
            const res=await fetch("/api/admin/");
            if(!res.ok) {
                notFound()
            }
            const data=await res.json();
            setProjects(data);
        }

    async function approveProject(projectId:string){
        const res=await fetch(`/api/admin/${projectId}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application-json",
            },
            body:JSON.stringify({
                projectStatus:"approved",
            })
        });
        if(res.ok){
            await getProjects();
        }
    }

    async function rejectProject(projectId:string){
        const res=await fetch(`/api/admin/${projectId}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application-json",
            },
            body:JSON.stringify({
                projectStatus:"rejected",
            })
        });
        if(res.ok){
            await getProjects();
        }
    }

    const [projects,setProjects]=useState([]);
    useEffect(()=>{
        
        getProjects();
    },[])
    return (
        <div className="grid items-center justify-center gap-12">
            {projects.map((project:any)=>(
                <div key={project._id.toString()}>
                    <h1>{project._id}</h1>
                    <h2 className="text-xl font-semibold ">{project.title}</h2>
                    <p>{project.description}</p>
                    <Button onClick={()=>approveProject(project._id)}>
                        Approve 
                        <Check></Check>
                    </Button>
                    <Button onClick={()=>rejectProject(project._id)}>
                        Reject 
                        <X></X>
                    </Button>
                </div>
            )
              
            )}

        </div>
    )
}
