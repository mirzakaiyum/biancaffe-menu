import React from 'react'

const about = () => {
  return (
    <>
    <div className="flex flex-col items-center py-8 md:mt-4">
        <article className="prose flex max-w-5xl flex-col items-center space-y-2 text-center">
          <h3 className="text-2xl font-bold">
            Experience an Authentic and Flavourful Italian Food Fiesta with our
            exclusive menu!
          </h3>
          <p className="text-sm text-base-content/70">
            Biancaffé is Inspired by centuries-old traditional Italian recipes
            served to your palate with a delicacy in a modern touch of healthy
            and tasty ingredients. Our food is a healthy goodness of fulfilling
            and delightful taste with mouth-watering exotic flavours that
            compliments your choice. We have got it all authentic to ensure you
            get the best version of the original Italian taste. We promise to
            make your moments unforgettable with a bursting joy of flavours.
          </p>
          <p className="mt-2 font-bold text-base-content/70">BUON APPETITO!</p>
        </article>
      </div>
    <div className='flex min-h-[20vh] flex-col items-center justify-center text-center'>
      <h1 className='text-xl font-bold'>Biancaffe Bangladesh</h1>
      <p>Biancaffe Bangladesh © {new Date().getFullYear()}. All rights reserved.</p>
    </div></>
  )
}

export default about