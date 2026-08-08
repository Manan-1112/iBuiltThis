type props={
    title:string,
    desc:string,
    tags:[]
}
import { Badge } from "@/components/ui/badge"
export default function Card(){
    return(
        <div className="bg-card text-card-foreground rounded-xl border flex flex-col items-center justify-center p-4 hover:bg-primary-foreground">
           <h1 className="text-xl">Title</h1>
           <Badge variant="outline">Featured Today</Badge>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad aut earum explicabo recusandae deserunt, reprehenderit perferendis iusto delectus non eum beatae? Perferendis eveniet repellendus vitae soluta sit earum tenetur.</p>
           <div>
            <Badge className="m-1">SaaS</Badge>
            <Badge className="m-1">Global</Badge>
            <Badge className="m-1">Pricing</Badge>
           </div>
        </div>
    )

}