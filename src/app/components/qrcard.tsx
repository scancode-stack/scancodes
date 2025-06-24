// QRCard.tsx
import React from "react";

interface QRCardProps {
  iconSrc: string;
  title: string;
  highlight?: boolean;
  index?: number;
}

const getShade = (index: number) => {
  const shades = [
    "bg-gray-600",
    "bg-gray-500",
    "bg-gray-400",
    "bg-gray-300",
    "bg-gray-200",
    "bg-gray-100",
    "bg-gray-50"
  ];
  return shades[index % shades.length];
};

const QRCard: React.FC<QRCardProps> = ({ iconSrc, title, highlight, index = 0 }) => {
  return (
    <div
      className={`w-full max-w-sm p-6 rounded-lg shadow-md text-center transition duration-300 ${
        highlight ? "bg-gray-800" : getShade(index)
      }`}
    >
      <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-white">
        <img src={iconSrc} alt={title} className="w-16 h-16 object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
  );
};

export default QRCard;
