import { css } from 'styled-components';
import { ContentContainer } from '../../../components/ImageBanner/ImageBanner.styles';

export const customImageBannerStyles = css`
  ${ContentContainer} {
    padding-top: 120px;
  }
`;

export const additionalInfoCSS = css`
  flex-direction: column-reverse;
  gap: 6rem;
  padding-bottom: 4px;
`;
