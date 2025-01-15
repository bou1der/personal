import TurtleGif from "public/turtle.gif"
import { Meteors } from "~/components/ui/meteors"
import Particles from "~/components/ui/particles"
import NextImage from "next/image"
import { SocialSection } from "./social";

export default async function LandingPage() {

  return (
    <div className="h-dvh w-dvw relative overflow-hidden">
      <Meteors  number={4} />
      <Particles
        className="size-full absolute overflow-hidden"

        quantity={200}
      />
      <NextImage src={TurtleGif} alt="" className="absolute size-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <SocialSection />
    </div>
  );
}
