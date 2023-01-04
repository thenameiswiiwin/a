import { Container } from '@components/Container';

import { FooterLinks } from './FooterLinks';
import { GithubIcon } from './icons/github';
import { Logo } from './icons/logo';
import { SlackIcon } from './icons/slack';
import { TwitterIcon } from './icons/twitter';

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white-100 py-[5.6rem] text-sm">
      <Container className="flex flex-col justify-between md:flex-row">
        <div>
          <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center text-gray">
              <Logo className="mr-4 h-4 w-4" /> Linear - Designed worldwide
            </div>
            <div className="mt-auto flex space-x-4 text-gray">
              <TwitterIcon />
              <GithubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>
        <FooterLinks />
      </Container>
    </footer>
  );
};
