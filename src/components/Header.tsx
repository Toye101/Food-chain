import { useState } from 'react';

export default function Header() {
  return (
    <header className="bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 lg:px-12 lg:py-8">
        <div className="flex items-center gap-3">
          <img src="/componet_img/Vector.png" alt="FoodChain Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-semibold tracking-tight text-black">FoodChain</span>
        </div>

        <nav className="flex items-center gap-8 text-black">
          <a href="#" className="text-sm font-medium uppercase tracking-[0.12em] text-gray-700 transition hover:text-orange-500">
            Catalogue
          </a>
          <a href="#" className="text-sm font-medium uppercase tracking-[0.12em] text-gray-700 transition hover:text-orange-500">
            About
          </a>
          <a href="#" className="text-sm font-medium uppercase tracking-[0.12em] text-gray-700 transition hover:text-orange-500">
            Contact
          </a>
          <a href="#" className="text-sm font-medium uppercase tracking-[0.12em] text-gray-700 transition hover:text-orange-500">
            Feedback
          </a>

          <div className="relative rounded-full bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[0.65rem] font-bold text-white">
              1
            </div>
          </div>

          <button
            onClick={() => window.location.href = '/signup.html'}
            className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-9 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(249,115,22,0.18)] transition hover:brightness-110"
          >
            Order Now
          </button>
        </nav>
      </div>
    </header>
  );
}
