import React from "react";
import BookingComponent from "../components/Booking_component";
import backgroundBooking from "../assets/background-booking.png";
import appointmentAnim from "../assets/appointmentAnimation.json";
import Lottie from "lottie-react";

function Booking() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundBooking})` }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl w-full gap-6 md:gap-8 pt-12 md:pt-16">
        
        {/* Booking Form */}
        <div className="w-full max-w-md sm:max-w-lg md:ml-8">
          <BookingComponent />
        </div>

        {/* Animation */}
        <div className="w-full flex justify-center md:justify-start">
          <Lottie
            animationData={appointmentAnim}
            loop
            autoplay
            className="w-[220px] sm:w-[320px] md:w-[400px] lg:w-[450px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Booking;
