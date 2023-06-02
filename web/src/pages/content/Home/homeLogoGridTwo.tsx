import bigLittleBar from '../../../assets/svgs/companies/biglittlebar.svg';
import pinky from '../../../assets/svgs/companies/pinky.svg';
import qualityDoor from '../../../assets/images/companies/qualitydoor.png';
import sargentDoor from '../../../assets/images/companies/sargentdoor.png';
import smoothEncore from '../../../assets/images/companies/smoothencore.png';
import futureBrandGroup from '../../../assets/images/companies/futurebrandgroup.png';
import blackScreenRecords from '../../../assets/images/companies/blackscreenrecords.png';
import royceAndRocket from '../../../assets/images/companies/royceandrocket.png';
import calissonToys from '../../../assets/images/companies/calissontoys.png';
import responsible from '../../../assets/images/companies/responsible.png';
import savannahMorrow from '../../../assets/images/companies/savannahmorrow.png';
import shlock from '../../../assets/images/companies/shlock.png';
import k9Arsenal from '../../../assets/images/companies/k9arsenal-darker-smaller.png';
import dialogEdu from '../../../assets/images/companies/dialogedu.png';
import diamondMattress from '../../../assets/images/companies/diamondmattress.png';
import freshVictor from '../../../assets/images/companies/freshvictor-smaller.png';

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
];

const logoUrlWithIdList = logoUrlList.map((logoUrl, index) => ({
  id: index,
  url: logoUrl,
}));

const homeLogoGridTwo = {
  logoUrlWithIdList,
};

export default homeLogoGridTwo;
