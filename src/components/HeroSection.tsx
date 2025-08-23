import React from "react";
import Lottie from "lottie-react";
import welcomeAnim from "../assets/Welcome2.json";
import { Particles } from "../components/magicui/particles";
import { BoxReveal } from "../components/magicui/box-reveal";
import WrapButton from "./ui/wrap-button";
import { Box, Globe, SparklesIcon } from "lucide-react";
import { AuroraText } from "./magicui/aurora-text";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full pt-[80px] md:pt-0 overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0" />

      {/* Particles background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Particles
          className="absolute inset-0"
          quantity={1000}
          staticity={30}
          color="black"
          ease={80}
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 
     flex flex-col items-center text-center
     md:flex-row md:items-center md:text-left
     justify-start md:justify-between gap-10 
     min-h-fit md:min-h-[calc(100vh-64px)] 
     pt-6 md:pt-0">
        
      {/* LEFT - Text */}
      <div className="flex-1 flex flex-col 
     justify-start items-center text-center 
     md:justify-center md:items-start md:text-left gap-4 mt-6">

        <BoxReveal boxColor={"#f97316"} duration={0.5}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            Welcome to
          </h1>
        </BoxReveal>

        <BoxReveal boxColor={"#f97316"} duration={0.5}>
          <p className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold py-3">
            <AuroraText>ADHYAAY</AuroraText>
          </p>
        </BoxReveal>
        
        <BoxReveal boxColor={"#f97316"} duration={0.5}>
          <p
            className="text-base sm:text-lg md:text-2xl font-semibold tracking-wide 
              bg-black bg-clip-text text-transparent drop-shadow-sm"
          >
            Counselling & Mentorship Cell for IIIT Bhagalpur
          </p>
        </BoxReveal>


        <BoxReveal boxColor="#f97316" duration={0.5}>
          <WrapButton
            href="/Councellors"
            className="mt-8 flex items-center justify-center gap-2 
                      px-5 py-2.5 rounded-full min-w-[140px]
                      bg-black text-white font-medium
                      shadow-md transition-all duration-300
                      hover:scale-105 hover:shadow-lg"
          >
            <Globe className="w-5 h-5 animate-spin-slow" />
            <span>Get Started</span>
          </WrapButton>
        </BoxReveal>

      </div>


        {/* RIGHT - Animation + Sanskrit */}
        <div className="flex-1 flex flex-col justify-center items-center text-center gap-6">
          <Lottie animationData={welcomeAnim} loop={true} className="w-full h-auto max-w-lg" />

          <p
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide dark:text-blue-100 animate-[fadeIn_2s_ease-in-out] transition-all duration-500 ease-in-out hover:scale-110 hover:text-gray-600 dark:hover:text-gray-300 hover:drop-shadow-[0_0_12px_rgba(107,114,128,0.5)] cursor-default"
          >
            यत् भावो तत् भवति।
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
