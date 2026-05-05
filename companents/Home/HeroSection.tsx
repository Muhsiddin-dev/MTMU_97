import React from 'react'

function HeroSection() {
  return (
    <section className='h-screen w-full'>
      <div className="w-full h-full  bg-[url('/Bg.jpg')] bg-cover bg-center bg-no-repeat ">
        <div className='flex flex-col max-w-7xl m-auto items-center md:items-start h-full justify-center text-white'>
          <h1 className="md:text-5xl text-2xl  font-bold mb-4 drop-shadow-lg">
            Welcome to Our Website
          </h1>
          <p className="text-xl opacity-90">
            Your journey starts here!
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection