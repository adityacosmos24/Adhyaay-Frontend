import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { MorphingText } from "../components/magicui/morphing-text";

export function Testimonial() {
  const testimonials = [
    {
        quote:
      "Having faced the challenges of transitioning into college life, I’ve experienced how valuable mentorship and emotional support can be. Adhyaay has not only helped me grow personally but also allowed me to be there for others on the same path.",
    name: "Ishaan Jha",
    designation: "Mechatronics and Automation 28",
    src: "https://ik.imagekit.io/mwwyrq9z8/testimonials/ishaan_jha.jpg", // ✅ now correctly linked
  },
    {
      quote:
        "I am Harshit Kumar, a student of Mechatronics and Automation. Adhyaay gave me the opportunity to showcase my skills and creativity. As a member of the Content Team, I contribute to crafting engaging and impactful content that brings our ideas to life",
      name: "Harshit Kumar",
      designation: "Mechatronics and Automation 28",
      src: "https://ik.imagekit.io/mwwyrq9z8/testimonials/harshit_kumar.jpg",
    },
    {
      quote:
        "Adhyaay has been a wonderful experience for me. It gave me guidance when I felt lost and connected me with seniors who genuinely care. The mentorship, advice, and motivation I received here made my college journey easier and more meaningful..",
      name: "Veer Somaiya",
      designation: "28' CSE",
      src: "https://ik.imagekit.io/mwwyrq9z8/testimonials/veer_somaya.jpg",
    },
    {
      quote:
      "Adhyaay has been a transformative experience for me. It provided a supportive community where I found guidance and encouragement during my college journey. The mentorship and connections I made here have been invaluable, helping me grow both personally and academically.",
      name: "Rudra N Chaturvedi",
      designation: "CSE 28",
      src: "https://ik.imagekit.io/mwwyrq9z8/testimonials/rudra.jpg",
    },
    {
            quote:
        "Adhyaay has been a team effort — a shared vision nurtured by the dedication of mentors, students, and an active core team. It fills me with joy to see this vision take shape. As I pass on this legacy, I hope it continues to ripple through time and gently touch every life it reaches. Best wishes to everyone on this journey.",
      name: "Shraddha Sahu, Secretary (Founding Member)",
      designation: "CSE 26",
      src: "https://ik.imagekit.io/mwwyrq9z8/testimonials/rudra.jpg",
    }
  ];

  return (
    <div className="w-full py-20 flex items-center justify-center px-6">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* LEFT - Heading */}
        <div className="w-full md:w-[40%] flex justify-center md:justify-start">
          <MorphingText texts={["Student's", "Testimonial"]} />
        </div>

        {/* RIGHT - Animated Boxes */}
        <div className="w-full md:w-[60%]">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
}
