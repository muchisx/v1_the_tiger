import liquidLogo from '@assets/svgs/loquid-logo.svg';
// import hydrogenLogo from '@assets/svgs/hydrogen-logo_simple.svg';
import remixLogo from '@assets/svgs/remix-logo.svg';
import reactLogoBW from '@assets/svgs/react-logo-bw.svg';
import shopifyPlusPrimary from '@assets/svgs/ShopifyPlus_Primary.svg';
import typescriptLogoBW from '@assets/svgs/typescript-logo-neutral.svg';
import shopifyPartnerSecondary from '@assets/svgs/ShopifyPartner_Secondary.svg';
// Types
import { type Props as LogoGridProps } from '@components/LogoGrid/LogoGrid.types';

const logoUrlList = [reactLogoBW, typescriptLogoBW, remixLogo, liquidLogo, shopifyPlusPrimary, shopifyPartnerSecondary];

const logoUrls: LogoGridProps['logoUrls'] = logoUrlList.map((logoUrl) => ({
  $keyId: crypto.randomUUID(),
  url: logoUrl,
}));

const homeLogoGrid = {
  logoUrls,
};

export default homeLogoGrid;
