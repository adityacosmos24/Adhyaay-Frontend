import React from "react";
import Lottie from "lottie-react";
import welcomeAnim from "../assets/Welcome.json";
import { Particles } from "../components/magicui/particles";
import { BoxReveal } from "../components/magicui/box-reveal";
import WrapButton from "./ui/wrap-button";
import { Globe, SparklesIcon } from "lucide-react";
import { AuroraText } from "./magicui/aurora-text";
import { Badge } from "../components/ui/badge"


const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full pt-10 md:pt-12 overflow-hidden min-h-screen">
      {/* Background gradient (slightly transparent) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-slate-100/80 to-slate-200/80 z-0" />

      {/* Particles background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Particles
          className="absolute inset-0"
          quantity={1000}       // number of particles
          staticity={30}       // movement speed
          color="black"      // visible blue color
          ease={80}            // smoothness
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 min-h-[calc(100vh-64px)]">
        <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-10 md:pt-0">
        <Badge
      variant="outline"
      className="mb-3 cursor-pointer rounded-[14px] border border-black/10 bg-white text-base md:left-6"
    >
      <SparklesIcon className=" mr-2  fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
      IIIT Bhagalpur
    </Badge>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl pr-1">
      Welcome to
    </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-7xl font-bold py-3">
              <AuroraText>Adhyaay</AuroraText>
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <WrapButton className="mt-10" href="/services" >
            <Globe className="animate-spin " />
            Get started
        </WrapButton>
          </BoxReveal>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex flex-col justify-center items-center text-center gap-4">
          <Lottie animationData={welcomeAnim} loop={true} />

          <p
            className="text-3xl md:text-4xl font-serif font-bold tracking-wide dark:text-blue-100 animate-[fadeIn_2s_ease-in-out] transition-all duration-500 ease-in-out hover:scale-110 hover:text-blue-600 dark:hover:text-cyan-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] cursor-default"
          >
            यत् भावो तत् भवति।
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;