import React from 'react'
import w1 from "../image/w1.png"
import w2 from "../image/w2.png";
import w3 from "../image/w3.png";
import w4 from "../image/w4.png";
import w5 from "../image/w5.png";
import wp5 from "../image/wp5.png";

export const Choose = () => {
  return (
    <>
      {/* WHY DOCTORS CHOOSE US SECTION */}
      <section className="bg-[#faf0dc] py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-green-900 mb-2">
            Why Doctors Choose Us?
          </h2>
          <p className="text-center text-amrutamText/80 mb-16">
            Unlock the Benefits of Smarter Healthcare Management and Patient
            Care
          </p>

          <div className="space-y-24">
            {/* BLOCK 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Image */}
              <div className="relative flex justify-center">
                <div className="absolute w-64 h-64 bg-[#f7e6b5] rounded-full -z-10 top-10 left-4"></div>
                <img src={w1} className="w-[320px]" />
              </div>

              {/* Right Text */}
              <div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  Instant FREE 5–Mins Call
                </h3>
                <p className="text-amrutamText/80 text-sm leading-relaxed max-w-md">
                  We understand the importance of building trust with your
                  patients. Amrutam offers a free 5–minute call, helping you
                  connect instantly and foster lasting patient relationships
                  with ease.
                </p>
              </div>
            </div>

            {/* BLOCK 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
              {/* Right Image */}
              <div className="relative flex justify-center md:order-2">
                <div className="absolute w-64 h-64 bg-[#f7e6b5] rounded-full -z-10 top-10 right-4"></div>
                <img src={w2} className="w-[320px]" />
              </div>

              {/* Left Text */}
              <div className="md:order-1">
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  Forum for Meaningful Connections
                </h3>
                <p className="text-amrutamText/80 text-sm leading-relaxed max-w-md">
                  Amrutam Forum helps you engage with patients, answer
                  questions, and share deeper Ayurvedic insights — strengthening
                  your professional presence.
                </p>
              </div>
            </div>

            {/* BLOCK 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Image */}
              <div className="relative flex justify-center">
                <div className="absolute w-64 h-64 bg-[#f7e6b5] rounded-full -z-10 top-14 left-0"></div>
                <img src={w3} className="w-[320px]" />
              </div>

              {/* Right Text */}
              <div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  Choose Your Session Mode
                </h3>
                <p className="text-amrutamText/80 text-sm leading-relaxed max-w-md">
                  Connect with patients via Instant Chat, Instant Call, or
                  Scheduled Video consultations. Each mode offers personalized
                  and flexible treatment options for your patient needs.
                </p>
              </div>
            </div>

            {/* BLOCK 4 */}
            <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
              {/* Right Image */}
              <div className="relative flex justify-center md:order-2">
                <div className="absolute w-64 h-64 bg-[#f7e6b5] rounded-full -z-10 top-10 right-6"></div>
                <img src={w4} className="w-[320px]" />
              </div>

              {/* Left Text */}
              <div className="md:order-1">
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  Smart Wallet
                </h3>
                <p className="text-amrutamText/80 text-sm leading-relaxed max-w-md">
                  Secure transactions with Amrutam Wallet. Easily withdraw
                  payments with OTP verification and track all your earnings in
                  one place.
                </p>
              </div>
            </div>

            {/* BLOCK 5 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Image */}
                          <div className="relative flex justify-center">
                              <img src={w5} className="w-[320px]" />
                              <img src={wp5} alt="" className='absolute w-50 mt-50 ml-50'/>
              </div>

              {/* Right Text */}
              <div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  Flexible Work Timing
                </h3>
                <p className="text-amrutamText/80 text-sm leading-relaxed max-w-md">
                  Control your work hours with the availability toggle. Offer
                  consultations at your convenience for stress-free, balanced
                  practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
