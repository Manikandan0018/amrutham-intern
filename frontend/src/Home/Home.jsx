import React, { useState } from "react";

import doctor from "../image/doctor.png";

import c1 from "../image/c1.png";
import c2 from "../image/c2.png";
import c3 from "../image/c3.png";
import c4 from "../image/c4.png";
import c5 from "../image/c5.png";
import c6 from "../image/c6.png";
import c7 from "../image/c7.png";
import c8 from "../image/c8.png";
import c9 from "../image/c9.png";

const stats = [
  { label: "Average Active Users", value: "500+" },
  { label: "Average daily free calls", value: "40+" },
];

const featuredLogos = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="w-full sticky top-0 z-50 border-b border-[#E7DDC7]/70 bg-[#faf0dc] backdrop-blur-sm">
        <nav className="mx-auto max-w-6xl flex flex-col items-center justify-center px-4 py-4 md:py-5 relative">
          {/* Logo */}
          <span className="tracking-[0.2em] mb-3 text-2xl font-semibold text-green-800 text-center">
            AMRUTAM
          </span>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-center space-x-8 mt-2 text-sm font-poppins text-green-900">
            <li className="hover:text-green-600 cursor-pointer">About Us</li>
            <li className="hover:text-green-600 cursor-pointer">Onboarding</li>
            <li className="hover:text-green-600 cursor-pointer">FAQ</li>
            <li className="hover:text-green-600 cursor-pointer">
              Testimonials
            </li>
          </ul>

          {/* Mobile Hamburger (Right Aligned, No Layout Change) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden absolute right-4 top-4 text-amrutamText text-3xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Dropdown (same design, just responsive smoothness added) */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-sm font-medium text-amrutamText/80 bg-[#faf0dc] border-t border-[#E7DDC7]/70">
            <li className="hover:text-amrutamText cursor-pointer">About Us</li>
            <li className="hover:text-amrutamText cursor-pointer">
              Onboarding
            </li>
            <li className="hover:text-amrutamText cursor-pointer">FAQ</li>
            <li className="hover:text-amrutamText cursor-pointer">
              Testimonials
            </li>
          </ul>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1 bg-linear-to-r from-[#f7e7ae] to-[#f4f2e6]">
        <section className="mx-auto lg:h-115 flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-center md:py-16 lg:px-0">
          {/* LEFT TEXT — unchanged */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-sm font-medium text-green-900">
              Namaste, Welcome to Amrutam
            </p>

            <h1 className="text-xl leading-tight font-semibold md:text-3xl">
              Join Amrutam –{" "}
              <span className="text-green-800">Grow Your Practice</span>
            </h1>

            <p className="max-w-xl text-sm md:text-base text-amrutamText/80">
              Connect with more patients, set your own schedule, and grow your
              Ayurvedic practice effortlessly.
            </p>

            <div className="space-y-6">
              <button className="inline-flex w-[200px] items-center justify-center rounded bg-green-700 px-2 py-3 text-sm font-semibold text-white shadow-soft hover:bg-[#24533F] transition">
                Join Now
              </button>

              <div className="flex flex-wrap gap-6 text-sm">
                {stats.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="text-lg font-semibold text-amrutamText">
                      {item.value}
                    </div>
                    <div className="text-amrutamText/70">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE — SAME UI, only responsive scale added */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative mx-auto max-w-xl rounded-hero bg-amrutamHero shadow-soft px-6 pt-8 pb-4 overflow-hidden">
              <div className="relative z-10 flex items-end justify-center">
                <img
                  src={doctor}
                  alt=""
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED SECTION */}
        <section className="border-t border-[#e5ddcc] bg-[#faf0dc]">
          <div className="mx-auto max-w-6xl px-4 py-8 lg:px-0">
            <h2 className="text-center text-3xl font-semibold text-green-900 mb-2">
              Featured
            </h2>

            <p className="text-center text-sm text-amrutamText/70 mb-6">
              Recognized and celebrated by leading publications – Amrutam in the
              spotlight!
            </p>

            {/* LOGO STRIP - responsive */}
            <div
              className="
        w-full
        flex
        flex-nowrap
        items-center
        gap-8
        overflow-x-auto
        sm:overflow-x-auto
        md:overflow-x-hidden
        lg:overflow-x-hidden
        justify-start
        px-2
        py-3
        no-scrollbar
      "
            >
              {featuredLogos.map((logo) => (
                <img
                  key={logo}
                  src={logo}
                  alt="logo"
                  className="
            shrink-0
            w-20 h-14
            sm:w-24 sm:h-16
            md:w-28 md:h-20
            object-contain
          "
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
