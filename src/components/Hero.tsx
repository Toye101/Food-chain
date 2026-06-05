import { useState } from 'react';

interface HeroProps {
  onGetStarted: (e: React.FormEvent) => void;
  email: string;
  setEmail: (email: string) => void;
}

export default function Hero({ onGetStarted, email, setEmail }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const restaurants = ['DUNNKAYCE', 'LAUGHTER KITCHEN', 'GRILLS'];

  return (
    <section className="px-6 pt-20 pb-16 bg-[#F9F3EE] lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.25fr_0.9fr] gap-16 items-center">
        <div className="space-y-8">
          <p className="text-orange-500 font-semibold text-xs uppercase tracking-[0.7em]">Super Fast Delivery</p>

          <h1 className="text-[5.68rem] leading-[0.9] font-black tracking-[-0.036em] text-black max-w-3xl">
            Fast, <span className="text-orange-500">Seamless</span>
            <br /> Delivery Within Elizade
          </h1>

          <p className="text-gray-700 text-[1.05rem] leading-8 max-w-xl">
            Fastest, safest and favorite delivery service within Elizade.
          </p>

          <form onSubmit={onGetStarted} className="flex flex-wrap items-center gap-4 max-w-xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your School Email"
              className="flex-1 min-w-[300px] rounded-full border border-[#E5E7EB] bg-white px-6 py-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
              required
            />
            <button
              type="submit"
              className="min-w-[210px] rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-orange-400 px-8 py-4 text-base font-semibold text-white shadow-[0_22px_50px_rgba(249,115,22,0.24)] transition hover:brightness-110"
            >
              Get Started
            </button>
          </form>
        </div>

        <div className="relative flex justify-center">
          <img
            src="/componet_img/Group 1.png"
            alt="Group 1 decoration"
            className="absolute -top-10 right-32 w-32 object-contain z-20 animate-bounce-loop"
            style={{ animationDelay: '0s' }}
          />

          <img
            src="/componet_img/Group 2.png"
            alt="Group 2 decoration"
            className="absolute bottom-36 -left-20 w-28 object-contain z-20 animate-bounce-loop"
            style={{ animationDelay: '0.35s' }}
          />

          <img
            src="/componet_img/Group 3.png"
            alt="Group 3 decoration"
            className="absolute bottom-10 -right-28 w-28 object-contain z-20 animate-bounce-loop"
            style={{ animationDelay: '0.7s' }}
          />

          <div className="relative z-10 flex h-[520px] w-[520px] items-center justify-center overflow-hidden rounded-full border-8 border-white bg-white shadow-[0_40px_80px_rgba(0,0,0,0.14)] animate-bowl-spin">
            <img
              src="/componet_img/Classic Biryani With Chicken Legs, Chicken Biryani, Spiced Rice, Traditional PNG Transparent Image and Clipart for Free Download 1.png"
              alt="Biryani with Chicken"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 flex items-center justify-center gap-16">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + restaurants.length) % restaurants.length)}
          className="text-5xl font-semibold text-black/70 transition hover:text-orange-500"
        >
          ‹
        </button>

        <div className="text-center">
          <p className="text-xl font-semibold tracking-[0.45em] uppercase text-black">{restaurants[currentSlide]}</p>
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % restaurants.length)}
          className="text-5xl font-semibold text-black/70 transition hover:text-orange-500"
        >
          ›
        </button>
      </div>
    </section>
  );
}
