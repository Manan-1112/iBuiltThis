import Image from "next/image"
type props={
    num:string,
    desc:string,
    logo:string
}
export default function HeroInfo({num,desc,logo}:props){
    return(
        <div>
        <div className="flex justify-center items-center gap-2">
            <Image alt="logo" src={logo} width={25} height={25}></Image>
            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 max-w-5xl">{num}</h1>
          </div>
          <p>{desc}</p>
        </div>
    )
}