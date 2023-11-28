'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface CarouselContainerProps {
  children: React.ReactNode;
}

function CarouselProperties(): { perView: number; spacing: number } {
  const breakpoints = { xs: 475, sm: 640, md: 768, lg: 1024 };
  let carouselProps;
  if (typeof window === 'undefined') {
    return { perView: 2, spacing: 24 };
  }
  const screenSize = window.innerWidth;

  if (screenSize >= 1280) {
    carouselProps = { perView: 3, spacing: 48 };
  } else if (screenSize >= 1024) {
    carouselProps = { perView: 3, spacing: 36 };
  } else if (screenSize >= 768) {
    carouselProps = { perView: 2, spacing: 24 };
  } else {
    carouselProps = { perView: 1, spacing: 12 };
  }

  return carouselProps;
}

function CarouselContainer(props: CarouselContainerProps) {
  const { children } = props;
  const carouselProps = CarouselProperties();
  const [sliderRef] = useKeenSlider({
    slides: { perView: carouselProps.perView, spacing: carouselProps.spacing },
  });
  return (
    <main
      ref={sliderRef}
      className='keen-slider ml-auto mt-5 flex min-h-[436px] w-screen max-w-[calc(100vw-((100vw-1180px)/2))]'
    >
      {children}
    </main>
  );
}

export default CarouselContainer;
