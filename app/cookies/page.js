import React from 'react'

const page = () => {
  return (
      <main className="text-white bg-black px-6 py-20 min-w-screen min-h-screen text-center mx-auto">
          <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>

          <p className="text-gray-400 text-sm leading-7 mb-4">
              This site uses cookies purely for basic functionality and user experience improvements. No personal data is collected, stored, or shared.
          </p>

          <p className="text-gray-400 text-sm leading-7 mb-4">By continuing to use this website, you consent to the minimal use of cookies — such as saving theme preferences or session states.</p>

          <p className="text-gray-500 text-xs italic">As this is a personal portfolio project, analytics and tracking are disabled. No third-party advertising cookies are used.</p>
      </main>
  );
}

export default page
