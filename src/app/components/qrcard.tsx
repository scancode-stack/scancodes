import React from "react";

interface QRCardProps {
  iconSrc: string;
  title: string;
  highlight?: boolean;
}

const QRCard: React.FC<QRCardProps> = ({ iconSrc, title, highlight }) => {
  return (
    <div
      className={`w-full max-w-sm p-6 rounded-lg shadow-md text-center transition duration-300 ${
        highlight ? "bg-[#0E641B]" : "bg-black"
      }`}
    >
      {/* Image wrapper with white background, except for 6th card */}
      <div
        className={`w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full ${
          highlight ? "bg-white" : "bg-white"
        }`}
      >
        <img src={iconSrc} alt={title} className="w-16 h-16 object-contain" />
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
  );
};

export default QRCard;
