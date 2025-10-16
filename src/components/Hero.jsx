import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, [])

  return (
    <section id="hero" className='mt-35 pb-0' >
        <div>
            <h1 className='text-3xl'>MacBook Pro</h1>
            <img className='pt-0 w-[650px]' src={import.meta.env.BASE_URL + 'title.png'} alt="MacBook Pro Title" />
        </div>

        <video className=' mb-0' src={import.meta.env.BASE_URL + 'videos/hero.mp4'} autoPlay muted playsInline />

        <button className='mt-0'>Buy</button>
        <p>From ₹169900.00*</p>
    </section>
  )
}

export default Hero