import shopifyPartnerSecondary from '../../../assets/svgs/ShopifyPartner_Secondary.svg';
import shopifyPlusPrimary from '../../../assets/svgs/ShopifyPlus_Primary.svg';
import reactLogoBW from '../../../assets/svgs/react-logo-bw.svg';
import typescriptLogoBW from '../../../assets/svgs/typescript-logo-neutral.svg';

const logoUrlList = [
  shopifyPartnerSecondary,
  shopifyPlusPrimary,
  reactLogoBW,
  typescriptLogoBW,
  shopifyPartnerSecondary,
  shopifyPlusPrimary,
];

const logoUrlWithIdList = logoUrlList.map((logoUrl, index) => ({
  id: index,
  url: logoUrl,
}));

const homeLogoGrid = {
  logoUrlWithIdList,
};

export default homeLogoGrid;
