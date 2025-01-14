import { Github, Mail } from "lucide-react";
import { TelegramIcon } from "~/components/icons/telegram";
import Link from "~/components/ui/link";
import { cn } from "~/lib/client/utils";

const className = "!size-full transition-colors group-hover:text-white/100 text-white/60";

const socials = [
  {
    href:"https://github.com/bou1der",
    icon:<Github className={className} />,
  },
  {
    href:"mailto:krowkin@bk.ru",
    icon:<Mail className={className} />
  },
  {
    href:"https://t.me/boullder",
    icon:<TelegramIcon className={cn(className, "opacity-60 group-hover:opacity-100 transition-opacity")}/>
  },

]

export function SocialSection(){


  return (
    <div className="absolute bottom-4 left-4 h-16 flex items-center gap-4 rounded-xl border-input border backdrop-blur-sm bg-white/5 px-6">
      {
        socials.map((soc, index) => (
          <Link href={soc.href} target="_blank" key={index}  className="p-2 hover:bg-white/0 group" variant={"ghost"}  >
            {soc.icon}
          </Link>
        ))
      }
    </div>
  )
}
