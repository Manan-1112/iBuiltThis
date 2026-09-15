import { Badge } from "@/components/ui/badge"
export const LiveBadge = ({text}:{text:string}) => {
        return (
            <Badge variant="outline" className="mb-8 mt-4 px-2 py-4 text-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2 mr-1">
                    <span className="absolute h-full w-full animate-ping bg-primary rounded-full opacity-75"></span>
                    <span className="h-2 w-2 relative inline-flex rounded-full bg-primary"></span>
                </span>
                <span className="text-muted-foreground font-medium">{text}</span>

            </Badge>
        )
    }