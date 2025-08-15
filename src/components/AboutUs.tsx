import React from "react";
import { Badge } from "./ui/badge";
import { BoxReveal } from "./magicui/box-reveal";
import {
  Users,
  Target,
  Award,
  Heart,
  SparklesIcon,
  BookOpen,
  Globe,
  Zap,
} from "lucide-react";

type StatItem = {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
};

type FeatureItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const stats: StatItem[] = [
  { icon: Users, value: "1000+", label: "Active Students" },
  { icon: Target, value: "10+", label: "Councellors" },
  { icon: Award, value: "100+", label: "Mentors" },
  { icon: Heart, value: "100%", label: "Student Satisfaction" },
];

const features: FeatureItem[] = [
  {
    icon: BookOpen,
    title: "Professional Counselling",
    description:
      "Confidential sessions conducted by certified external counsellors to support mental and emotional well-being.",
  },
  {
    icon: Globe,
    title: "Peer Mentorship",
    description:
      "Guidance from experienced senior students to help juniors navigate academics, careers, and campus life.",
  },
  {
    icon: Zap,
    title: "Holistic Growth",
    description:
      "A blend of emotional support and skill-building to help students thrive personally and professionally.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Section */}
<div className="text-left mb-16">
  <Badge
    variant="outline"
    className="mb-6 cursor-pointer rounded-[14px] border border-gray-300 bg-white text-lg text-gray-900"
  >
    <SparklesIcon className="mr-2 fill-orange-300 stroke-1 text-gray-900" />
    About Adhyaay
  </Badge>

  <h2 className="text-4xl md:text-3xl lg:text-5xl font-bold mb-6">
    Supporting Students Through
    <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
      {" "}Care & Guidance
    </span>
  </h2>

  <p className="text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed">
    Adhyaay is the Counselling & Mentorship Cell of our institution,
    dedicated to nurturing emotional well-being and guiding students through
    every stage of their academic journey.
  </p>
</div>


        {/* Main Content - 40/60 Split */}
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image Card */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 to-gray-500/10 p-1">
                <div className="bg-gray-900 rounded-xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-300 rounded-2xl flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Safe Space</h3>
                    <p className="text-gray-400">Where care meets guidance</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 via-gray-400/20 to-gray-600/20 
opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </div>

            {/* Secondary Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors duration-300">
                <Users className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                <p className="text-sm font-medium text-white">Community</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors duration-300">
                <Target className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                <p className="text-sm font-medium text-white">Personal Goals</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Guiding Students Towards
                <span className="text-black">
                  {" "} Growth
                </span>
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our counselling wing offers confidential one-on-one sessions with
                trained external professionals who help students navigate stress,
                anxiety, and personal challenges with empathy and care.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our mentorship wing is driven by experienced seniors who share their
                journey, provide academic and career guidance, and help juniors
                adapt to college life with confidence.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative rounded-xl p-6 bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-gray-700"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-300 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {stats.map((stat, index) => {
    const Icon = stat.icon;
    return (
      <div key={index} className="text-center group">
        {/* Icon background with black border */}
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 border-2 border-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-black" />
        </div>

        {/* Stat value with subtle orange gradient */}
        <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
          {stat.value}
        </div>

        {/* Stat label in black */}
        <p className="text-black font-bold">{stat.label}</p>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
};

export default AboutUs;
