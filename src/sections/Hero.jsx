import { useState } from "react";
import {statistics } from "../headers";
import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <>
    <section>
      <p className='font-montserrat text-lg text-coral-red wide:'> Our Summer Collection</p>
      <h1 className = ' padding-y font-montserrat font-bold text-8xl'>
        <span>The New Arrival</span>
        <br />

        <span className='text-coral-red'>Nike</span>
        Shoes
      </h1>
    </section>

    <section className = 'font-montserrat'>
      <span> Discover stylish Nike Arrivals, quality</span> <br />
      <span>comfort, and innovation for your active life.</span>
    </section>  
    <Button label='Shop Now' iconURL = {arrowRight} />
    

    <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
      </div>

        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />


      </div>
        
  </>
  )
}

export default Hero;