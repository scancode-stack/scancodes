import React from "react";
import QRCard from "./qrcard"; 

const cardData = [
  { icon: "/step1a.png", title: "Restaurant Menu" },
  { icon: "/step1c.png", title: "Business Cards" },
  { icon: "/step4.png", title: "Pictures/videos to QR" },
  { icon: "/step5.png", title: "Tickets/ Events/ Invitation cards" },
  { icon: "/step6.png", title: "Text only/Links" },
  { icon: "/djimage.png", title: "DJ Request Code" }, // 6th card (index 5)
  { icon: "/step8.png", title: "Contact/Social/ Web" },
  { icon: "/step9.png", title: "Customize your menu" },
];

const QRCardSection: React.FC = () => {
  return (
    <section className="px-4 py-10 md:px-16 lg:px-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {cardData.map((card, idx) => (
          <QRCard
            key={idx}
            iconSrc={card.icon}
            title={card.title}
            highlight={idx === 5} // only highlight the 6th card
          />
        ))}
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* <div className="text-lg text-black font-medium space-y-1">
          <p>Host QR Code</p>
          <p>Works on all devices</p>
          <p>Easy editing</p>
          <p>Secure and fast</p>
        </div> */}

        <div className="self-end md:ml-auto">
            <a
  href="https://wa.me/2347031031944"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#0E641B] hover:bg-green-800 text-white px-8 py-3 rounded-lg text-lg font-semibold"
>
  Request yours
</a>
        </div>
      </div>
    </section>
  );
};

export default QRCardSection;
