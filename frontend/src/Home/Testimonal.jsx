import React from 'react'
import tm from "../image/tm.jpg"

export const Testimonal = () => {
  return (
    <>
      {/* TESTIMONIALS SECTION */}
      <section className="bg-[#faf0dc] py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-green-900 mb-3">
            What other Ayurvedic Doctors are Saying
          </h2>
          <p className="text-center text-amrutamText/80 mb-16">
            Trusted by experts — Hear what Ayurvedic doctors say about Amrutam!
          </p>

          {/* TESTIMONIAL CARDS */}
          <div className="grid md:grid-cols-3 gap-8 place-items-center">
            {/* CARD 1 */}
            <div className="bg-[#f6e8b8] rounded-xl shadow-sm p-6 max-w-md">
              {/* Header */}
              <div className="flex lg:h-5 items-center gap-4 mb-3">
                <div className="flex justify-center items-center">
                  <img
                    src={tm}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-green-900">
                    Dr. Pooja Deshmukh, <span className="text-sm">BAMS</span>
                  </h4>

                  {/* Stars */}
                  <div className="flex text-yellow-500 text-sm">★ ★ ★ ★ ☆</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-amrutamText/90 leading-relaxed">
                “Amrutam’s formulations stay true to the ancient wisdom of
                Ayurveda. Their authentic, chemical-free products help restore
                balance and promote holistic well-being. I often recommend them
                to my patients seeking natural healing.”
              </p>
            </div>

            {/* CARD 2 – Highlighted Center */}
            <div className="bg-[#f1e1a0] rounded-xl shadow-md p-6 max-w-md md:scale-105">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex justify-center items-center">
                  <img
                    src={tm}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">
                    Dr. Rajesh Iyer,{" "}
                    <span className="text-sm">Ayurvedic Practitioner</span>
                  </h4>

                  <div className="flex text-yellow-500 text-sm">★ ★ ★ ★ ☆</div>
                </div>
              </div>

              <p className="text-sm text-amrutamText/90 leading-relaxed">
                “Amrutam beautifully bridges the gap between traditional
                Ayurveda and modern wellness. Their high-quality ingredients and
                ethical practices make them a trustworthy choice for those
                looking to embrace a healthier lifestyle.”
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#f6e8b8]  rounded-xl shadow-sm p-6 max-w-md">
              <div className="flex lg:h-5 items-center gap-4 mb-3">
                <div className="flex justify-center items-center">
                  <img
                    src={tm}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">
                    Dr. Ananya Sharma, <span className="text-sm">BAMS</span>
                  </h4>

                  <div className="flex text-yellow-500 text-sm">★ ★ ★ ★ ☆</div>
                </div>
              </div>

              <p className="text-sm text-amrutamText/90 leading-relaxed">
                “Amrutam’s formulations stay true to the ancient wisdom of
                Ayurveda. Their authentic, chemical-free products help restore
                balance and promote holistic well-being. I often recommend them
                to my patients seeking natural healing.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
