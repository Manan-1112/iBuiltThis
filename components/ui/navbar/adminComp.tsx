import requireAdmin from "@/lib/admin"
import { UserCogIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
export default async function AdminComp(){
    const userId=await requireAdmin();
    if(!userId) return <></>
    return(
        <div className="flex items-center justify-center gap-1">
            <Button variant="ghost">
            <UserCogIcon width={20}></UserCogIcon>
            Pending Requests
            </Button>
        </div>
    )
}