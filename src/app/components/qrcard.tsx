import React from "react";

interface QRCardProps {
  iconSrc: string;
  title: string;
}

const QRCard: React.FC<QRCardProps> = ({ iconSrc, title }) => {
  return (
    <div className="bg-black text-white p-4 rounded-lg flex flex-col items-center space-y-4 w-full max-w-xs shadow-md">
      <div className="bg-white p-4 rounded-md">
        <img src={iconSrc} alt={title} className="w-12 h-12" />
      </div>
      <p className="text-center font-semibold">{title}</p>
      <button className="bg-white text-black font-medium px-4 py-1 rounded-md">
        Generate
      </button>
    </div>
  );
};

export default QRCard;
