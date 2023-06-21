import shopifyPartnerSecondary from '../../../assets/svgs/ShopifyPartner_Secondary.svg';
import shopifyPlusPrimary from '../../../assets/svgs/ShopifyPlus_Primary.svg';
import reactLogoBW from '../../../assets/svgs/react-logo-bw.svg';
import typescriptLogoBW from '../../../assets/svgs/typescript-logo-neutral.svg';
import liquidLogo from '../../../assets/svgs/loquid-logo.svg';
import webflowLogo from '../../../assets/svgs/webflow-logo.svg';

const logoUrlList = [
  reactLogoBW,
  typescriptLogoBW,
  webflowLogo,
  liquidLogo,
  shopifyPlusPrimary,
  shopifyPartnerSecondary,
];

const logoUrlWithIdList = logoUrlList.map((logoUrl, index) => ({
  id: index,
  url: logoUrl,
}));

const homeLogoGrid = {
  logoUrlWithIdList,
};

export default homeLogoGrid;
