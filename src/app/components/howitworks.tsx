import Image from 'next/image';

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-12 text-black text-center md:text-start max-w-5xl mx-auto">How it Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-black rounded-xl p-6 w-[260px] h-[260px] flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {['step1a', 'step1b', 'step1c', 'step1d'].map((img, index) => (
                <div key={index} className="bg-white p-2 rounded-md">
                  <Image src={`/${img}.png`} alt={`Template ${index + 1}`} width={50} height={50} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold text-black">Choose a Template</h3>
            <p className="text-lg text-gray-600 mt-1 max-w-xs mx-auto">
              Restaurant menu, business card, flyer, events, ticket and more.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-black rounded-xl p-6 w-[260px] h-[260px] flex flex-col items-center justify-center gap-4">
            {['step2a', 'step2b'].map((img, index) => (
              <div key={index} className="bg-white p-2 rounded-md">
                <Image src={`/${img}.png`} alt={`Info ${index + 1}`} width={60} height={40} />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold text-black">Add your Info</h3>
            <p className="text-lg text-gray-600 mt-1 max-w-xs mx-auto">
              Input your business name, image, text or video – we handle the design.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-black rounded-xl p-6 w-[260px] h-[260px] flex items-center justify-center">
            <div className="bg-white p-10 rounded-md">
              <Image src="/step3a.png" alt="QR Code" width={60} height={60} />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold text-black">Generate and use</h3>
            <p className="text-lg text-gray-600 mt-1 max-w-xs mx-auto">
              Download, share or host your QR code.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <button className="bg-[#0E641B] hover:bg-green-800 text-white px-10 md:px-16 py-3 rounded-lg text-lg font-semibold">
          Generate yours
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
