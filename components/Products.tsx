import React from 'react'
import Image from 'next/image'

const Products = () => {
  return ( 
  
  <section className="flexCenter flex-col">
  <div className="padding-container max-container w-full pb-24">
    <Image src="/camp.svg" 
    alt="camp" 
    width={50} 
    height={50} />
    <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
      What we have to offer
    </p>
    <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
      <h2 className="bold-40 lg:bold-64 ">Unveiling the Power of LOTS Software</h2>
      <p className="regular-20 text-gray-30 ">LOTS empowers businesses with a comprehensive suite of software solutions designed to tackle today's challenges and unlock new possibilities. We specialize in developing innovative products that cater to a wide range of needs, from streamlining workflows and boosting productivity to gaining valuable insights from data and driving results.</p>
    </div>
  </div>
  <div className="flexCenter max-container relative w-full">
        <Image 
          src="/images.jpeg"
          alt="image"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
    </div>

  </section>
  )
}

export default Products