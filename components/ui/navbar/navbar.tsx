import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CodeIcon, Compass, CompassIcon, HomeIcon, SparkleIcon, UserIcon } from "lucide-react";
import { SignInButton, SignUpButton,UserButton,Show } from "@clerk/nextjs";
export default function NavBar() {

    return (
        <div className="flex sticky top-0 z-50 backdrop-blur-sm items-center justify-center w-screen h-16">

            <h1 className="absolute left-1/5 flex justify-center items-center gap-0 text-2xl">
                <CodeIcon height={40} width={40} stroke="#c94e8c" className="mr-2"></CodeIcon>
                <span>i</span>
                <span className="text-[#c94e8c] font-semibold gap-0">Built</span>
                <span>This</span>
            </h1>

            <Link href="/">
                <Button variant="ghost">
                    <HomeIcon height={30} width={30}></HomeIcon>
                    Home
                </Button>
            </Link>

            <Link href="/explore">
                <Button variant="ghost">
                    <CompassIcon height={30} width={30}></CompassIcon>
                    Explore
                </Button>
            </Link>


            <div className="absolute right-1/5 flex justify-center items-center ">

            <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
               <Button variant="ghost" className="bg-[#c94e8c] text-white">SignUp</Button>
                        
              </SignUpButton>
            </Show>
            <Show when="signed-in">
                <Link href="/submit">
                            <Button variant="ghost" className="bg-[#c94e8c] text-white">
                                <SparkleIcon size={30} stroke="white"></SparkleIcon>
                                Submit Project</Button>
                        </Link>

              <UserButton />
            </Show>
            </div>
            <div className="absolute bottom-0 w-screen h-px bg-gray-700"></div>
        </div>
    )
}