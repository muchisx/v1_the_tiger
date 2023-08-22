// Dependencies
import { css } from 'styled-components';
// Assets
import bigLittleBar from '@assets/svgs/companies/biglittlebar/logo.svg';
import pinky from '@assets/svgs/companies/pinky/logo.svg';
import qualityDoor from '@assets/images/companies/quality-door/logo.png';
import sargentDoor from '@assets/images/companies/sargentdoor/logo.png';
import smoothEncore from '@assets/images/companies/smoothencore/logo.png';
import futureBrandGroup from '@assets/images/companies/futurebrandgroup/logo.png';
import blackScreenRecords from '@assets/images/companies/blackscreenrecords/logo.png';
import royceAndRocket from '@assets/images/companies/royceandrocket/logo.png';
import calissonToys from '@assets/images/companies/calissontoys/logo.png';
import responsible from '@assets/images/companies/responsible/logo.png';
import savannahMorrow from '@assets/images/companies/savannahmorrow/logo.png';
import shlock from '@assets/images/companies/shlock/logo.png';
import k9Arsenal from '@assets/images/companies/k9-arsenal/logo-smaller.png';
import dialogEdu from '@assets/images/companies/dialogedu/logo.png';
import diamondMattress from '@assets/images/companies/diamond-mattress/logo.png';
import freshVictor from '@assets/images/companies/fresh-victor/logo.png';
import safkanHealth from '@assets/images/companies/safkan-ottoset/logo.png';
import veme from '@assets/svgs/companies/veme/logo.svg';
// Types
import { type Props as LogoGridProps } from '@components/LogoGrid/LogoGrid.types';

const customStyles = css`
  gap: 32px;
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
