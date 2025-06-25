import React from "react";

interface QRCardProps {
  iconSrc: string;
  title: string;
  highlight?: boolean;
  index?: number;
}

const getStrongShade = (index: number) => {
  const strongShades = [
    "bg-gray-900",
    "bg-cyan-700",
    "bg-gray-500",
    "bg-sky-900",
    "bg-blue-950",
    "bg-gray-700", 
    "bg-gray-800",
    "bg-gray-600"
  ];
  return strongShades[index] || "bg-gray-200";
};

const QRCard: React.FC<QRCardProps> = ({ iconSrc, title, highlight, index = 0 }) => {
  const bgColor = highlight ? "bg-gray-700" : getStrongShade(index);

  return (
    <div
      className={`w-full max-w-sm p-6 rounded-lg shadow-md text-center transition duration-300 ${bgColor}`}
    >
      <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-white">
        <img src={iconSrc} alt={title} className="w-16 h-16 object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
  );
};

export default QRCard;
