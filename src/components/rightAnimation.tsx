import Lottie from "lottie-react";
import bookingAnim from "../assets/booking.json"; // 👈 path to JSON

const RightAnimation = () => (
  <div className="w-full flex items-center justify-center">
    {/* Increased size */}
    <Lottie animationData={bookingAnim} loop={true} className="w-[500px] h-[500px]" />
  </div>
);

export default RightAnimation;
