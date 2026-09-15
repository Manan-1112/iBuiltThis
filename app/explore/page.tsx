import NavBar from "@/components/ui/navbar/navbar"
import { CompassIcon, SearchIcon } from "lucide-react"
export default function Explore() {
  return (
    <main>
      <NavBar />
      <div className="px-20 mt-14">
        <div className="flex gap-2 items-center">
          <CompassIcon height={40} width={40} stroke="#c94e8c"></CompassIcon>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-6 max-w-5xl mt-4">Explore Projects From Our Community</h1>
        </div>
        <div className="flex-1 relative">
          <SearchIcon height={20} width={20} className="absolute left-2 top-2"></SearchIcon>
          <input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10"
         placeholder="Search projects..." type="text" ></input>
        </div>
      </div>
    </main>
  )
}