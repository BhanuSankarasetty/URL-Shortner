import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-[#F2F4FF] min-h-screen p-8 flex items-center">
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Section */}
        <div className="flex flex-col gap-4 items-center md:items-start justify-center w-full text-center md:text-left">
          <p className={`text-3xl md:text-4xl py-6 font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="px-4 md:px-0 text-gray-700">
            We are the most straightforward URL Shortener in the world. Most of
            the URL shorteners will track you or ask you to give your details
            for login. We understand your needs and hence we have created this
            URL shortener.
          </p>
          <div className="flex gap-3 justify-center md:justify-start mt-5">
            <Link href="/shorten">
              <button className="bg-[#1566FA] rounded-lg shadow-lg px-5 py-2 font-bold text-white hover:bg-blue-700 transition">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-[#1566FA] rounded-lg shadow-lg px-5 py-2 font-bold text-white hover:bg-blue-700 transition">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section (Responsive Image like About page) */}
        <div className="flex justify-center md:justify-end">
          <Image
            className="mix-blend-darken object-contain"
            alt="An Image of a vector"
            src="/vector.jpg"
            width={500}
            height={500}
            priority
          />
        </div>
      </section>
    </main>
  );
}
