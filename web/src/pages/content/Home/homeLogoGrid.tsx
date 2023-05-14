import shopifyPartnerSecondary from '../../../assets/svgs/ShopifyPartner_Secondary.svg';
import shopifyPlusPrimary from '../../../assets/svgs/ShopifyPlus_Primary.svg';

const logoUrlList = [
  shopifyPartnerSecondary,
  shopifyPlusPrimary,
  shopifyPartnerSecondary,
  shopifyPlusPrimary,
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
