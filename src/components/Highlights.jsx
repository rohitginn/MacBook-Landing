import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    gsap.to(['.left-column', '.right-column'], {
      scrollTrigger: {
        trigger: '#highlights',
        start: isMobile ? 'bottom bottom' : 'top center',
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: 'power1.inOut'
    })
  });

  const BASE = import.meta.env.BASE_URL;

  return (
    <section id='highlights'>
      <h2>There&rsquo;s never been a better time to upgrade.</h2>
      <h3>Here&rsquo;s what you get with the new MacBook Pro.</h3>

      <div className='masonry'>
        <div className='left-column'>
          <div>
            <img src={`${BASE}laptop.png`} alt="laptop" />
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div>
            <img src={`${BASE}sun.png`} alt="sun" />
            <p>A stunning <br />
              Liquid Retina XDR <br />
              display.</p>
          </div>
        </div>

        <div className='right-column'>
          <div className='apple-gradient'>
            <img src={`${BASE}ai.png`} alt="AI" />
            <p>Built for <br/>
              <span>Apple Intelligence.</span></p>
          </div>
          <div>
            <img src={`${BASE}battery.png`} alt="Battery" />
            <p>Up to 
              <span className='green-gradient'>{" "}14 more hours{" "}</span> battery life.
              <span className='text-dark-100'>{' '}(Up to 24 hours total.)</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights;
