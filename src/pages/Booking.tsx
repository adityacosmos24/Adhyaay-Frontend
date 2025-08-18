import React from "react";
import BookingComponent from "../components/Booking_component";
import RightAnimation from "../components/rightAnimation"; // 👈 import here

const Booking: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-100 via-yellow-200 to-orange-100 flex items-center justify-center px-8">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full pt-16">
        
        {/* Left Side - Booking Form */}
        <div className="w-full max-w-lg">
          <BookingComponent />
        </div>

        {/* Right Side - Lottie Animation */}
        <div className="hidden md:flex w-full max-w-xl justify-end">
          <RightAnimation />
        </div>
      </div>
    </div>
  );
};

export default Booking;
