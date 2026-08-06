import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
export default function NavBar(){
    return(
        <div className="flex sticky items-center justify-center w-screen h-16">
            <h1 className="absolute left-1/5 ">
            <Image alt="logo" src="/logoMain.svg" width={40} height={40}></Image>
            iBuiltThis</h1>

            <Link href="/">
                
                <Button variant="ghost">
                    <Image alt="home" src="/home.svg" width={20} height={20}></Image>
                    Home</Button>
            </Link>

            <Link href="/explore">
                
                <Button variant="ghost">
                    <Image alt="explore" src="/explore.svg" width={20} height={20}></Image>
                    Explore
                    
                </Button>
            </Link>
            <div className="absolute right-1/5 ">
            <Link href="/login">
                <Button variant="ghost" className="mr-1">SignIn</Button>
            </Link>

            <Link href="/register">
                <Button variant="ghost" className="bg-[#c94e8c] text-white">SignUp</Button>
            </Link>
            </div>
            <div className="absolute bottom-0 w-screen h-px bg-gray-700"></div>
        </div>
    )
}