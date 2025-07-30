import React from 'react'

const page = () => {
  return (
      <main className="text-white bg-black px-6 py-20 min-w-screen text-center min-h-screen mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-400 text-sm leading-7 mb-4">
              This site does not collect or store personal data for commercial use. Any information you submit via contact or callback forms is not shared with third parties.
          </p>
          <p className="text-gray-500 text-xs italic">This project is a demo. No actual user data is being used for marketing or sales.</p>
      </main>
  );
}

export default page
