import React from 'react'
import Image from 'next/image'
import { PEOPLE_URL } from '@/constant/index'

interface NewsProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const NewsCard = ({ backgroundImage, title, subtitle, peopleJoined }: NewsProps) => { // Destructuring the props
  return ( //giving the props to the component
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const News = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">

<div className="flex flex-wrap justify-between gap-5 lg:gap-10">
      <h2 className="bold-40 lg:bold-64">Latest Updates</h2>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
    
        <NewsCard 
          backgroundImage="bg-bg-img-1"
          title="Latest feature on TeamFlow"
          subtitle="productivity, team, collaboration"
          peopleJoined="20+ people read this article"
        />
        <NewsCard 
          backgroundImage="bg-bg-img-2"
          title="How to get the best use out of DataMind"
          subtitle="data, analytics, insights"
          peopleJoined="20+ people read this article"
        />
      </div>
      </div>

    
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong> The Future of Software </strong> Introducing LOTS' Next Generation Products
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Stay tuned for a closer look at the specific features coming your way. 
          We'll be showcasing each product in detail, highlighting the benefits 
          they offer and how they can revolutionize your approach to work.  In the meantime, get ready to experience the future of software          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>







    </section>
  )
}

export default News