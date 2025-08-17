import {useNavigate} from "react-router-dom";

export default function CTA() {
  const router = useNavigate();
  return (
    
    <section className="flex py-16 md:py-20">
      <div className="flex w-full max-w-7xl mx-auto items-center gap-8 px-6 md:px-10">
        
        {/* CTA Section (65%) */}
        <div className="relative w-full md:w-[65%] overflow-hidden rounded-[40px] bg-orange-500 p-8 sm:p-12 md:p-20">
          <div className="absolute inset-0 hidden h-full w-full overflow-hidden md:block">
            <div className="absolute top-1/2 right-[-40%] aspect-square h-[900px] w-[900px] -translate-y-1/2">
              <div className="absolute inset-0 rounded-full bg-orange-400 opacity-30"></div>
              <div className="absolute inset-0 scale-[0.8] rounded-full bg-orange-300 opacity-30"></div>
              <div className="absolute inset-0 scale-[0.6] rounded-full bg-orange-200 opacity-30"></div>
              <div className="absolute inset-0 scale-[0.4] rounded-full bg-orange-100 opacity-30"></div>
              <div className="absolute inset-0 scale-[0.2] rounded-full bg-orange-50 opacity-30"></div>
              <div className="absolute inset-0 scale-[0.1] rounded-full bg-white/50 opacity-30"></div>
            </div>
          </div>

          <div className="relative z-10">
            <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:mb-4 md:text-5xl">
              Let&apos;s Get In Touch.
            </h1>
            <p className="mb-6 max-w-lg text-base text-white sm:text-lg md:mb-8">
              Your laboratory instruments should serve you, not the other way
              around. We&apos;re happy to help you.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <button className="flex w-full items-center justify-between rounded-full bg-black px-6 py-3 text-white sm:w-[240px]" onClick={() => router("/councellors")}>
                <span className="font-medium">Book Appointment</span>
                <span className="h-5 w-5 flex-shrink-0 rounded-full bg-white"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Lottie Animation Section (35%) */}
        <div className="hidden md:flex w-full md:w-[35%] items-center justify-center">
          {/* Replace with your Lottie component */}
          <div className="w-full h-[420px] bg-gray-100 flex items-center justify-center rounded-2xl">
            <p className="text-gray-500">Lottie Animation Here</p>
          </div>
        </div>

      </div>
    </section>
  );
}
