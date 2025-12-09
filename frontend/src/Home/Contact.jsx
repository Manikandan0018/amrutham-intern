import React from 'react'
import c from "../image/contact.jpg";

export const Contact = () => {
  return (
    <>
      {/* LET'S CONNECT SECTION */}
      <section className="bg-[#faf0dc] py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-green-900 mb-3">
            Let’s Connect
          </h2>

          <p className="text-center text-amrutamText/80 max-w-2xl mx-auto mb-16">
            We’re here to help you on your wellness journey. Reach out to us for
            any questions, product inquiries, or personalized advice.
          </p>

          {/* CONTENT GRID */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT IMAGE */}
            <div>
              <img
                src={c}
                alt="Contact"
                className="w-full rounded-xl object-cover"
              />
            </div>

            {/* RIGHT FORM PANEL */}
            <div className="border border-[#d3c7a8] rounded-xl p-8">
              {/* Row 1 — Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {/* Name */}
                <div>
                  <label className="text-sm text-green-900 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Vikas Kumar"
                    className="w-full border-b border-[#d3c7a8] bg-transparent text-amrutamText mt-1 pb-1 focus:outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm text-green-900 font-medium">
                    Your Contact Number
                  </label>
                  <input
                    type="text"
                    placeholder="8743414476"
                    className="w-full border-b border-[#d3c7a8] bg-transparent text-amrutamText mt-1 pb-1 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2 — Email */}
              <div className="mb-8">
                <label className="text-sm text-green-900 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="vikass@gmail.com"
                  className="w-full border-b border-[#d3c7a8] bg-transparent text-amrutamText mt-1 pb-1 focus:outline-none"
                />
              </div>

              {/* Row 3 — Message */}
              <div className="mb-12">
                <label className="text-sm text-green-900 font-medium">
                  Message (Optional)
                </label>
                <input
                  type="text"
                  placeholder="I want to On-board as a Doctor"
                  className="w-full border-b border-[#d3c7a8] bg-transparent text-amrutamText mt-1 pb-1 focus:outline-none"
                />
              </div>

              {/* BUTTON */}
              <button className="px-10 py-3 bg-green-700 text-white font-medium rounded-md shadow hover:bg-[#24533F] transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

