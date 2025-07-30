import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-hot-toast'

const Section4 = () => {
  return (
      <section id="Classes" className="w-full pb-4 pt-6 px-4 md:px-0 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
              {/* Image */}
              <div className="md:full hidden md:block pl-10">
                  <Image src="/img/section4.png" alt="Gym Training" style={{ height: "auto" }} width={300} height={350} className="rounded" priority />
              </div>

              {/* Text */}
              <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="text-md text-[#777578] mb-2">Our Classes</h2>
                  <h1 className="text-4xl text-black md:text-6xl font-bold mb-6">Classes & Training</h1>
                  <p className="text-[#777579] text-sm md:text-base mb-10">
                      Unlock your full potential with our diverse range of classes and training programs. From high-intensity HIIT sessions that will push your limits to low-impact yoga classes that
                      promote flexibility and mindfulness, our schedule caters to all fitness levels and preferences.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <button
                          onClick={() => toast("🚧 This feature is coming soon!")}
                          className="bg-transparent text-[#b8b7b9] border border-[#656564] font-medium px-6 py-2 rounded w-full sm:w-auto text-center hover:bg-neutral-900 hover:text-white transition-all duration-200">
                          View Schedule
                      </button>

                      <Link href="/membership" className="bg-black text-[#bfbcb9] px-6 py-2 rounded border border-[#656564] hover:bg-neutral-900 transition text-center sm:w-auto w-full">
                          Join Now
                      </Link>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Section4
