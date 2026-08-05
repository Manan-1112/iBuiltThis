import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

export default function NavBar(){
    return(
        <div className="flex sticky items-center justify-center w-screen h-16 border-2">
            <h1 className="absolute left-1/5 ">iBuiltThis</h1>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Explore</Button>
            <div className="absolute right-1/5">
                <Button variant="outline">SignIn</Button>
                <Button variant="outline">SignUp</Button>
            </div>
        </div>
    )
}