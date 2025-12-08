import React from 'react'

export const Faq = () => {
  return (
    <>
      {/* FAQ SECTION */}
      <section className="bg-[#faf0dc] py-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-green-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-amrutamText/80 mb-12">
            Find quick answers to common questions to help you navigate the app
            and its features easily.
          </p>

          {/* FAQ LIST */}
          <div className="space-y-6">
            {/* FAQ ITEM */}
            {[
              "What is Amrutam?",
              "How does Amrutam help me grow as a practitioner?",
              "How do I become a part of Amrutam Doctor?",
              "What is Amrutam Global as a platform?",
              "What documents do I need to provide?",
              "Is there a fee to join Amrutam?",
            ].map((faq, index) => (
              <div key={index}>
                <div className="flex justify-between items-center py-4">
                  <span className="text-amrutamText text-lg">{faq}</span>
                  <span className="text-2xl text-amrutamText/70">+</span>
                </div>

                {/* Divider */}
                <div className="border-b border-[#d7cdb6]"></div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="text-center mt-12">
            <button className="px-10 py-3 bg-green-700 text-white rounded-md shadow hover:bg-[#24533F] transition">
              See More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
