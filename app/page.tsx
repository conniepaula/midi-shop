"use client"

import Image from 'next/image';
import Button from './components/Button';
import Product from './components/Product';
import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({slides: {perView: 3, spacing: 48}})
  return (
    <main ref={sliderRef} className='keen-slider mt-5 ml-auto flex min-h-[436px] w-screen max-w-[calc(100vw-((100vw-1180px)/2))]'>
      <Product sx="keen-slider__slide" src='/1.png' name='Akai MPK iii' price={100} />
      <Product sx="keen-slider__slide" src='/2.png' name='Launchkey Mini' price={100} />
      <Product sx="keen-slider__slide" src='/3.png' name='Arturia Minilab 3' price={100} />
      <Product sx="keen-slider__slide" src='/3.png' name='Arturia Minilab 3 Alpine' price={100} />
    </main>
  );
}
