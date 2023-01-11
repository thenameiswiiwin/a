import { Button, Highlight } from '@components/buttons/Button';
import { Container } from '@components/Container';
import { HeroImage } from '@components/hero/HeroImage';
import { ChevronIcon } from '@components/icons/chevron';
import { Clients } from '@components/sections/Clients';
import { Hero, HeroSubtitle, HeroTitle } from '@components/sections/Hero';

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <Hero>
            <Button
              className="translate-y-[-1rem] animate-fade-in opacity-0"
              href="/"
              variant="secondary"
              size="small"
            >
              Linear 2022 Release – Built for scale
              <Highlight variant="secondary">→</Highlight>
            </Button>
            <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              Linear is a better way <br className="hidden md:block" />
              to build products
            </HeroTitle>
            <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              Meet the new standard for modern software development.
              <br className="hidden md:block" />
              Streamline issues, sprints, and product roadmaps.
            </HeroSubtitle>
            <Button
              href="/"
              variant="primary"
              size="large"
              className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
            >
              Get started
              <Highlight variant="primary">
                <ChevronIcon />
              </Highlight>
            </Button>
            <HeroImage />
          </Hero>
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
    </>
  );
}
