import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="bg-[#F2F4FF] min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <section className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Text Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1566FA]">
            About <span className="text-black">BitLinks</span>
          </h1>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-bold">BitLinks</span>, we believe that simplicity
            is the ultimate sophistication. While most URL shorteners track users,
            demand logins, or clutter the process with ads, we focus on delivering
            a <span className="font-semibold text-[#1566FA]">clean, secure, and fast</span>{" "}
            experience.  
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you’re a student, developer, or business, our platform ensures
            that you can shorten, share, and manage links with ease. No unnecessary
            signups, no invasive tracking — just a tool built with{" "}
            <span className="font-semibold">your privacy and convenience</span> in mind.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to make sharing links effortless while keeping your data
            safe. 
          </p>
        </div>

        {/* Right - Vector/Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/vector.jpg"
            alt="Illustration showing link shortening"
            width={450}
            height={450}
            className="object-contain mix-blend-darken"
            priority
          />
        </div>
      </section>
    </main>
  );
};

export default About;
