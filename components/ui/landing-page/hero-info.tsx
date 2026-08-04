import { Rocket } from "lucide-react"
type props={
    num:string,
    desc:string
}
export default function HeroInfo({num,desc}:props){
    return(
        <div>
            <Rocket/>
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 max-w-5xl">{num}</h1>
          <p>{desc}</p>
        </div>
    )
}