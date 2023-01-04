interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return (
    <h1 className="text-gradient my-6 text-6xl md:text-8xl">{children}</h1>
  );
};

export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return <h1 className="mb-12 text-lg text-gray-200 md:text-xl">{children}</h1>;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
