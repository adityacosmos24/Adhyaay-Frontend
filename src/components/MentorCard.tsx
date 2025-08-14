import React from "react";

interface MentorCardProps {
  name: string;
  role: string;
  image: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-full"
      />
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default MentorCard;
