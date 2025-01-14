import { Github, Pi } from "lucide-react";
import { Button } from "~/components/ui/button";


export function SocialSection(){


  return (
    <div className="absolute bottom-0 h-16 flex w-full overflow-x-scroll">
      <Button  className="p-0"  >
        <Github size={128} className="size-96!" />
        <Pi  className="w-40! h-40!" />
      </Button>
    </div>
  )
}
