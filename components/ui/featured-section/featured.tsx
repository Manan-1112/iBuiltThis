import Card from "./featured-card"
export default function Featured(){
    return(
        <div className="pt-20 pb-20 flex flex-col ">
            <h1 className=" text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 max-w-5xl">Featured Today</h1>
            <p className="text-xl">Top picks from our community this week</p>
            <div className="grid grid-cols-3 gap-8">
              <Card/>
              <Card/>
              <Card/>
            </div>
            
        </div>
    )
}