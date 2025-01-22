import { DonateIcon } from "~/components/icons/donate";
import { Button } from "~/components/ui/button";



export function DonateSection(){

  return (
    <Button disabled className="cursor-not-allowed absolute group top-4  right-4 h-14 bg-white/5 text-white hover:text-black transition-colors rounded-2xl backdrop-blur-sm font-semibold text-lg border border-input">
      <DonateIcon className="!size-8 transition-all duration-300 invert group-hover:invert-0" />
      Пожертвовать
    </Button>
  )
}
