// Dependencies
import { css } from 'styled-components';
// Assets
import bigLittleBar from '@assets/svgs/companies/biglittlebar/logo.svg';
import pinky from '@assets/svgs/companies/pinky/logo.svg';
import qualityDoor from '@assets/images/companies/quality-door/logo.webp';
import sargentDoor from '@assets/images/companies/sargentdoor/logo.webp';
import smoothEncore from '@assets/images/companies/smoothencore/logo.webp';
import futureBrandGroup from '@assets/images/companies/futurebrandgroup/logo.webp';
import blackScreenRecords from '@assets/images/companies/blackscreenrecords/logo.webp';
import royceAndRocket from '@assets/images/companies/royceandrocket/logo.webp';
import calissonToys from '@assets/images/companies/calissontoys/logo.webp';
import responsible from '@assets/images/companies/responsible/logo.webp';
import savannahMorrow from '@assets/images/companies/savannahmorrow/logo.webp';
import shlock from '@assets/images/companies/shlock/logo.webp';
import k9Arsenal from '@assets/images/companies/k9-arsenal/logo-smaller.webp';
import dialogEdu from '@assets/images/companies/dialogedu/logo.png';
import diamondMattress from '@assets/images/companies/diamond-mattress/logo.webp';
import freshVictor from '@assets/images/companies/fresh-victor/logo.webp';
import safkanHealth from '@assets/images/companies/safkan-ottoset/logo.webp';
import veme from '@assets/svgs/companies/veme/logo.svg';
// Types
import { type Props as LogoGridProps } from '@components/LogoGrid/LogoGrid.types';

const customStyles = css`
  margin-top: 88px;
`;

const logoUrlList = [
  bigLittleBar,
  pinky,
  qualityDoor,
  sargentDoor,
  smoothEncore,
  futureBrandGroup,
  blackScreenRecords,
  royceAndRocket,
  calissonToys,
  responsible,
  savannahMorrow,
  shlock,
  k9Arsenal,
  dialogEdu,
  diamondMattress,
  freshVictor,
  safkanHealth,
  veme,
];

const logoUrls: LogoGridProps['logoUrls'] = logoUrlList.map((logoUrl) => ({
  $keyId: crypto.randomUUID(),
  url: logoUrl,
}));

const homeLogoGridTwo: LogoGridProps = {
  customStyles,
  logoUrls,
};

export default homeLogoGridTwo;
