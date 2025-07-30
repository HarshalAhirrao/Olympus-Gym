import React from 'react'

const Section2 = () => {
  return (
      <section id="about" className="w-full px-6 md:px-20 py-16 bg-white text-black">
          <div className="max-w-7xl mx-auto text-center gap-3 flex flex-col items-center">
              <h1 className="font-extrabold text-4xl">About Us</h1>
              <h3 className="text-lg text-gray-400">
                  At our gym, we believe in empowering individuals to unlock their full potential. Our mission is to create a supportive and inspiring environment where you can embark on a
                  transformative fitness
              </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
              <div className="card flex rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg justify-center flex-col min-h-[300px] items-center w-[75vw] md:min-w-[250px] md:max-w-[300px] md:w-[24%] bg-[#efefef] cursor-pointer">
                  <img src="/img/spartan.png" height={40} width={40} alt="Olympus Logo" className="invert mt-[20px] mb-[30px]" />
                  <h1 className="text-black text-lg mb-[15px]">Our Classes</h1>
                  <h1 className=" text-[#767378] text-center text-md font-[14px] px-4 mb-4 tracking-wide ">
                      Immerse yourself in our diverse array of classes, each designed to challenge and inspire you. From high-intensityinterval training to restorative yoga
                  </h1>
              </div>
              <div className="card flex justify-center flex-col rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg min-h-[300px] items-center w-[75vw] md:min-w-[250px] md:max-w-[300px] md:w-[24%] bg-[#efefef] cursor-pointer">
                  <img src="/img/spartan.png" height={40} width={40} alt="Olympus Logo" className="invert mt-[20px] mb-[30px]" />
                  <h1 className="text-black text-lg mb-[15px]">Memberships</h1>
                  <h1 className=" text-[#767378] text-center text-md font-[14px] px-4 mb-4 tracking-wide">
                      Invest in your well-being with our flexible membership options. Enjoy access to our state-of-the-art facilities
                  </h1>
              </div>
              <div className="card flex justify-center min-h-[300px] rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg flex-col items-center w-[75vw] md:min-w-[250px] md:max-w-[300px] md:w-[24%] bg-[#efefef] cursor-pointer">
                  <img src="/img/spartan.png" height={40} width={40} alt="Olympus Logo" className="invert mt-[20px] mb-[30px]" />
                  <h1 className="text-black text-lg mb-[15px]">Meet Our Trainers</h1>
                  <h1 className=" text-[#767378] text-center text-md font-[14px] px-4 mb-4 tracking-wide">
                      Our team of dedicated trainers are the heart of our gym. Each brings a unique blend of expertise, passion, and a genuine commitment to{" "}
                  </h1>
              </div>
              <div className="card flex justify-center min-h-[300px] rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer flex-col items-center w-[75vw] md:min-w-[250px] md:max-w-[300px] md:w-[24%] bg-[#efefef]">
                  <img src="/img/spartan.png" height={40} width={40} alt="Olympus Logo" className="invert mt-[20px] mb-[30px]" />
                  <h1 className="text-black text-lg mb-[15px]">Testimonials</h1>
                  <h1 className=" text-[#767378] text-center text-md font-[14px] px-4 mb-4 tracking-wide">
                      At our gym, we take pride in the transformative journeys of our members. Hear from those who have found their stride, discovered newfound strength{" "}
                  </h1>
              </div>
          </div>
      </section>
  );
}

export default Section2
