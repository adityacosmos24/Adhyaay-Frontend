import React from "react";
import BookingComponent from "../components/Booking_component";

const Booking: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-start pt-12 pl-8">
      <div className="max-w-lg w-full">
        <BookingComponent />
      </div>
    </div>
  );
};

export default Booking;
