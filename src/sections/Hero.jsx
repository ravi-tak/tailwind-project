import React from 'react'
import { Button } from '../components'
import { arrowRight } from '../assets/icons'
import { statistics } from '../contants'

export default function Hero() {
  return (
    <section className='padding-x font-montserrat'>
      <p className='text-coral-red text-xl max-md:text-base my-4'>
        Our Summer collections
      </p>

      <h1 className='text-8xl max-md:text-6xl max-sm:text-4xl font-bold my-10'>
        <span>The New Arrival </span>
        <br />
        <span className='text-coral-red inline-block mt-4'>Nike</span> Shoes
      </h1>

      <p className='text-lg max-w-sm leading-8 max-md:text-base max-md:leading-6 mb-10 text-slate-gray'>
        Discover stylish Nike arrivals, quality comfort, and innovation for your
        active life.
      </p>

      <Button
        iconURL={arrowRight}
        textColor='text-white'
      >
        Shop now
      </Button>

      <div className='flex gap-16 max-md:gap-8 mt-16'>
        {statistics.map((item) => (
          <div>
            <p className='text-4xl max-md:text-3xl max-sm:text-2xl font-palanquin font-bold'>
              {item.value}
            </p>
            <span className='text-slate-gray max-md:text-sm'>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
