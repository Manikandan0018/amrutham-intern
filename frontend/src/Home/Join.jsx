import React from 'react'
import j1 from "../image/j1.png";
import jm1 from "../image/jm1.png";
import jm2 from "../image/jm2.png";
import jm3 from "../image/jm3.png";
import jbim from "../image/jbim.png";
import jb from "../image/jb.png";

export const Join = () => {
  return (
    <>
      {/* JOIN OUR CIRCLE OF CARE SECTION */}
      <section className="bg-[#faf0dc]">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-green-900 mb-2">
            Join Our Circle of Care
          </h2>
          <p className="text-center text-amrutamText/80 mb-12">
            Becoming a part of Amrutam is simple
          </p>

          {/* CONTENT GRID */}
          <div className="grid md:grid-cols-2 gap-40 items-center">
            {/* LEFT – Steps */}
            <div className="space-y-5">
              {/* Step boxes */}
              <div className="border border-[#d4c9b4] rounded-lg p-4">
                <h3 className="font-semibold text-green-900">
                  Step 1: Get your referral code
                </h3>
                <p className="text-amrutamText/80 text-sm">
                  Contact us to receive your unique referral code.
                </p>
              </div>

              <div className="border border-[#d4c9b4] rounded-lg p-4">
                <h3 className="font-semibold text-green-900">
                  Step 2: Register on Amrutam
                </h3>
                <p className="text-amrutamText/80 text-sm">
                  Sign up on the Amrutam Doctors app or website to join our
                  specialist network.
                </p>
              </div>

              <div className="border border-[#d4c9b4] rounded-lg p-4">
                <h3 className="font-semibold text-green-900">
                  Step 3: Complete KYC
                </h3>
                <p className="text-amrutamText/80 text-sm">
                  Fill in your details and upload the required documents for
                  verification.
                </p>
              </div>

              <div className="border border-[#d4c9b4] rounded-lg p-4">
                <h3 className="font-semibold text-green-900">
                  Step 4: Start consulting
                </h3>
                <p className="text-amrutamText/80 text-sm">
                  Once verified, begin offering consultations and helping
                  patients.
                </p>
              </div>
            </div>

            {/* RIGHT – UI Screenshot */}
            <div className="relative mb-10 flex justify-center">
              <div className="absolute w-80 h-40 right-6"></div>
              <img
                src={jb}
                alt=""
                className="w-[420px] lg:scale-150 scale-100"
              />
              <img src={jbim} alt="" className="absolute" />
              <img src={j1} alt="" className="absolute mt-7" />
            </div>
          </div>

          {/* TABS */}
          <div className="flex flex-wrap justify-center gap-4 mt-16">
            <button className="px-5 py-2 rounded-full bg-green-700 text-white text-sm font-medium">
              Consultations
            </button>
            <button className="px-5 py-2 rounded-full bg-white border border-[#c8bea7] text-green-900 text-sm">
              Payment withdrawal
            </button>
            <button className="px-5 py-2 rounded-full bg-white border border-[#c8bea7] text-green-900 text-sm">
              Schedule
            </button>
          </div>

          {/* MOBILE CARDS SECTION */}
          <div className="grid md:grid-cols-3 gap-10 mt-16 place-items-center">
            {/* CARD 1 */}
            <div className="flex flex-col items-center">
              <h4 className="text-green-900 font-semibold mb-3">
                Value Your Practice
              </h4>
              <img
                src={jm1}
                alt=""
                className="w-[230px] "
              />
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col items-center">
              <img
                src={jm2}
                alt=""
                className="w-[230px] "
              />
              <h4 className="text-green-900 lg:mb-30 lg:pt-3 font-semibold">
                Today's Healing Journey
              </h4>
            </div>

            {/* CARD 3 */}
            <div className="flex flex-col items-center">
              <h4 className="text-green-900 font-semibold mb-3">
                Consultation Details
              </h4>
              <img
                src={jm3}
                alt=""
                className="w-[230px] "
              />
            </div>
          </div>

          {/* JOIN NOW BUTTON */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center px-10 py-3 bg-green-700 text-white rounded-md shadow hover:bg-[#24533F] transition">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
