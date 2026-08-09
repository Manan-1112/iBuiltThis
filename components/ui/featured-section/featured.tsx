import Card from "./featured-card"
import Image from "next/image"
export default function Featured(){
    return(
        <div className="pt-20 pb-20 flex flex-col ">
           
            <h1 className=" text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 max-w-5xl flex items-center">
                 <Image alt="star" src="./star.svg" width={40} height={40}></Image>
                Featured Today</h1>
            <p className="text-xl">Top picks from our community this week</p>
            <div className="m-4 grid grid-cols-3 gap-8">
              <Card title="Saas" desc="hfwfnwj" tags={["hi","hello"]}/>
              <Card title="Saas" desc="hfwfnwj"/>
              <Card title="Saas" desc="hfwfnwj"/>
            </div>
            
        </div>
    )
}