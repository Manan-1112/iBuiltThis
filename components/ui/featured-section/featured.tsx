import { Star } from "lucide-react"
import Card from "./featured-card"

export default function Featured(){
    return(
        <div className="pt-20 pb-20 flex flex-col ">
           <div className="flex items-center justify-items-start">
           
                <Star width={40} height={40} stroke="#c94e8c"></Star>
                <h1 className=" text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 max-w-5xl ">
                Featured Today</h1>
            </div>
            <p className="text-xl">Top picks from our community this week</p>
            <div className="m-4 grid grid-cols-3 gap-8">
              <Card title="Saas" desc="hfwfnwj" tags={["hi","hello"]}/>
              <Card title="Saas" desc="hfwfnwj"/>
              <Card title="Saas" desc="hfwfnwj"/>
            </div>
            
        </div>
    )
}