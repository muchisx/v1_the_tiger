import liquidLogo from '@assets/svgs/loquid-logo.svg';
import webflowLogo from '@assets/svgs/webflow-logo.svg';
import reactLogoBW from '@assets/svgs/react-logo-bw.svg';
import shopifyPlusPrimary from '@assets/svgs/ShopifyPlus_Primary.svg';
import typescriptLogoBW from '@assets/svgs/typescript-logo-neutral.svg';
import shopifyPartnerSecondary from '@assets/svgs/ShopifyPartner_Secondary.svg';
// Types
import { type Props as LogoGridProps } from '@components/LogoGrid/LogoGrid.types';

const logoUrlList = [
  reactLogoBW,
  typescriptLogoBW,
  webflowLogo,
  liquidLogo,
  shopifyPlusPrimary,
  shopifyPartnerSecondary,
];

const logoUrls: LogoGridProps['logoUrls'] = logoUrlList.map((logoUrl) => ({
  $keyId: crypto.randomUUID(),
  url: logoUrl,
}));

const homeLogoGrid = {
  logoUrls,
};

export default homeLogoGrid;
