// components/Hero.tsx
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-4 pt-28">
      {/* Centered Image */}
      <div className="mb-8">
        <Image
          src="/heroimg.png" 
          alt="Hero Image"
          width={300}
          height={300}
          className="object-contain max-w-full h-auto"
        />
      </div>

      {/* Text */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 max-w-2xl">
        Instant QR codes For Every Business Needs.
      </h1>
    </section>
  );
};

export default Hero;
