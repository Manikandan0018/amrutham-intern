import React from 'react'
import am from "../image/am.png"
import ad from "../image/ad.png";
import al from "../image/al.png";
import ac from "../image/ac.png";
import amb from "../image/amb.png";
import playstore from "../image/playstore.png";

export const Apoint = () => {
    return (
      <>
        {/* DOWNLOAD APP SECTION */}
        <section className="bg-[#faecbb] py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-0 grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT SIDE CONTENT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-green-900 leading-tight mb-4">
                Get Started Today — <br /> Download the App Now!
              </h2>

              <p className="text-amrutamText/80 max-w-md mb-10">
                Simplify consultations, manage patients, and grow your
                practice—all in one place.
              </p>

              {/* FEATURE BOXES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {/* Feature 1 */}
                <div className="flex items-center gap-3 border border-[#c8bea7]  rounded-md px-4 py-3">
                  <img src={al} className="w-6 h-6" />
                  <p className="text-sm text-green-900 font-medium">
                    Build Trust and <br /> Community with Forum
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3 border border-[#c8bea7] rounded-md px-4 py-3">
                  <img src={ad} className="w-6 h-6" />
                  <p className="text-sm text-green-900 font-medium">
                    Earn More with Pay <br /> Per Conversation
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-3 border border-[#c8bea7] rounded-md px-4 py-3">
                  <img src={ac} className="w-6 h-6" />
                  <p className="text-sm text-green-900 font-medium">
                    Attract Patients with <br /> 5–Minute Free Call
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="flex items-center gap-3 border border-[#c8bea7] rounded-md px-4 py-3">
                  <img src={am} className="w-6 h-6" />
                  <p className="text-sm text-green-900 font-medium">
                    Instant Access to Your <br /> Earnings with Wallet
                  </p>
                </div>
              </div>

              {/* APP STORE BUTTONS */}
              <div className="">
                <img
                  src={playstore}
                  className="w-100 cursor-pointer"
                />
              </div>
            </div>

            {/* RIGHT: PHONE IMAGE & FLOATING DOCTOR IMAGES */}
            <div className="relative flex justify-center">
              {/* Floating Doctor Images */}
              <img
                src={amb}
                className=""
              />
           
            </div>
          </div>
        </section>
      </>
    );
}