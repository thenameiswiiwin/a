import clsx from 'clsx';
import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';

interface Line {
  id: string;
  direction: 'to top' | 'to left';
  size: number;
  duration: number;
}

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const HeroImageLines = ({ inView }: { inView: boolean }) => {
  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((prevLines) => [
          ...prevLines,
          {
            direction: Math.random() > 0.5 ? 'to top' : 'to left',
            duration: randomNumberBetween(1300, 3500),
            size: randomNumberBetween(10, 30),
            id: Math.random().toString(36).substring(7),
          },
        ]);

        renderLine(randomNumberBetween(800, 2500));
      }, timeout);
    };

    renderLine(randomNumberBetween(800, 1300));

    // eslint-disable-next-line consistent-return
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inView, setLines]);

  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  return (
    <div className="absolute top-0 left-0 z-20 h-full w-full">
      {lines.map((line) => (
        <span
          key={line.id}
          onAnimationEnd={() => removeLine(line.id)}
          style={
            {
              '--direction': line.direction,
              '--size': line.size,
              '--animation-duration': `${line.duration}ms`,
            } as CSSProperties
          }
          className={clsx(
            'absolute top-0 block h-[1px] w-[10rem] bg-glow-lines',
            line.direction === 'to left' &&
              `left-0 h-[1px] w-[calc(var(--size)*0.5rem)] animate-glow-line-horizontal md:w-[calc(var(--size)*1rem)]`,
            line.direction === 'to top' &&
              `right-0 h-[calc(var(--size)*0.5rem)] w-[1px] animate-glow-line-vertical md:h-[calc(var(--size)*1rem)]`
          )}
        />
      ))}
    </div>
  );
};
