// Dependencies
import { css } from 'styled-components';
// Assets
import heroImage from '@assets/images/hero-banner-3.webp';
// Types
import { type Props as imageBannerProps } from '@components/ImageBanner/imageBanner.types';

const customStyles = css``;

const homeImageBanner: imageBannerProps = {
  src: heroImage,
  customStyles,
};

export default homeImageBanner;
