import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

const GetProduct = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 ">Start your Free Demo Now!</h2>
          <p className="regular-16 text-gray-10">Contact us today for your Quote !!</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Free Demo"
              //icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title="Get Quote"
              //icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetProduct