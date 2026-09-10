import ProjectApprovalPage from "@/components/ui/project-approval/projectApproval"
import { CheckCircle, CodeIcon,HomeIcon, LayoutGridIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import requireAdmin from "@/lib/admin"
import { RedirectToSignIn } from "@clerk/nextjs"

export default async function AdminPage(){
    const userId=await requireAdmin();
    console.log(userId);
    if(!userId) return (<RedirectToSignIn/>)

    else return(

    <div className="">
     <div className="flex sticky top-0 z-50 backdrop-blur-sm items-center justify-center w-screen h-16">

            <h1 className="absolute left-1/5 flex justify-center items-center gap-0 text-2xl">
                <CodeIcon height={40} width={40} stroke="#c94e8c" className="mr-2"></CodeIcon>
                <span>i</span>
                <span className="text-[#c94e8c] font-semibold gap-0">Built</span>
                <span>This</span>
            </h1>
            
            <Link href="/">
                <Button variant="ghost">
                    <LayoutGridIcon height={30} width={30}></LayoutGridIcon>
                    All Projects
                </Button>
            </Link>  
            <Link href="/">
                <Button variant="ghost">
                    <CheckCircle height={30} width={30}></CheckCircle>
                    Approved Projects
                </Button>
            </Link>  
            <Link href="/">
                <Button variant="ghost">
                    <HomeIcon height={30} width={30}></HomeIcon>
                    Home
                </Button>
            </Link>

        <div className="absolute bottom-0 w-screen h-px bg-gray-700"></div>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl mt-4">Welcome, back Manan!</h1>
      <ProjectApprovalPage/>
      </div>
    )
}