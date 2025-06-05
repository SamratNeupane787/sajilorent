import React from 'react'

function Footer() {
  return (
    <div className=" h-auto bg-[#1d1d1f] text-white p-6 flex flex-row items-center justify-between">
      <div>
        <h1>Rentpasal.com</h1>
      </div>
      <div>
        <ul className=' flex flex-row items-center gap-7'>
          <li>Home</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer
