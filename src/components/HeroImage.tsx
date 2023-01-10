'use client';

import HeroImg from '@assets/images/hero.webp';
import clsx from 'clsx';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { HeroImageLines } from './HeroImageLines';
import { HeroImagePattern } from './HeroImagePattern';

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <div ref={ref} className="mt-[12.8rem] [perspective:2000px]">
      <div
        className={clsx(
          'relative rounded-lg border border-white-100 bg-white bg-opacity-[0.01] bg-hero-gradient',
          inView ? 'animate-image-rotate' : '[transform:rotateX(25deg)]',
          'before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]',
          inView && 'before:animate-image-glow'
        )}
      >
        <HeroImageLines inView={inView} />
        <HeroImagePattern inView={inView} />
        <Image
          src={HeroImg}
          alt="Hero image"
          className={clsx(
            'relative z-10 transition-opacity delay-[680ms]',
            inView ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>
    </div>
  );
};
