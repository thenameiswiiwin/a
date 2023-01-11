import { AlanLogo } from '@components/svg/logos/alan';
import { ArcLogo } from '@components/svg/logos/arc';
import { CashAppLogo } from '@components/svg/logos/cashapp';
import { DescriptLogo } from '@components/svg/logos/descript';
import { LoomLogo } from '@components/svg/logos/loom';
import { MercuryLogo } from '@components/svg/logos/mercury';
import { OpenSeaLogo } from '@components/svg/logos/opensea';
import { PitchLogo } from '@components/svg/logos/pitch';
import { RampLogo } from '@components/svg/logos/ramp';
import { RaycastLogo } from '@components/svg/logos/raycast';
import { RetoolLogo } from '@components/svg/logos/retool';
import { VercelLogo } from '@components/svg/logos/vercel';

export const Clients = () => {
  return (
    <>
      <p className="mb-12 text-center text-lg text-white md:text-xl">
        <span className="text-gray-200">
          Powering the world&#39;s best product teams.
        </span>
        <br className="hidden md:block" />
        From next-gen startups to established enterprises
      </p>
      <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
        <RampLogo />
        <LoomLogo className="hidden md:block" />
        <VercelLogo />
        <DescriptLogo className="hidden md:block" />
        <CashAppLogo />
        <RaycastLogo />
        <MercuryLogo />
        <RetoolLogo />
        <AlanLogo className="hidden md:block" />
        <ArcLogo className="hidden md:block" />
        <OpenSeaLogo className="hidden md:block" />
        <PitchLogo className="hidden md:block" />
      </div>
    </>
  );
};
