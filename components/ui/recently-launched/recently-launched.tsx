import { Calendar, RocketIcon } from "lucide-react";

export default function RecentlyLaunched(){
    return (
    <section className="py-20 bg-muted/20">
     <div className="wrapper">
        <div className="flex items-center justify-items-start gap-4">
          <RocketIcon stroke="#c94e8c" height={50} width={50}></RocketIcon>
          <h1 className=" text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 max-w-5xl flex items-center">Recently Launched</h1>
        </div>
        <p>Discover the latest projects from our community</p>
        <div className=" border rounded-4xl h-72 flex flex-col items-center justify-center">
            <Calendar height={50} width={50} stroke="grey"></Calendar>
            <p className="block">No produts launched in last week. Check back soon for more launches!</p>
        </div>

     </div>
    </section>

    )
}