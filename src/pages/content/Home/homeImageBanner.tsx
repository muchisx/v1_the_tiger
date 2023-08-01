// Dependencies
import { css } from 'styled-components';
// Assets
import heroImage from '@assets/images/hero-banner-1.jpg';
// Types
import { type Props as imageBannerProps } from '@components/ImageBanner/imageBanner.types';

const customStyles = css`
  @media only screen and (max-width: 768px) {
    img {
      object-position: 90%;
    }
  }
`;

const homeImageBanner: imageBannerProps = {
  src: heroImage,
  customStyles,
};

export default homeImageBanner;
