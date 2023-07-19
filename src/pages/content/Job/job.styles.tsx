import { css } from 'styled-components';
import { ContentContainer } from '../../../components/ImageBanner/ImageBanner.styles';
import HeadingStyled from '../../../components/shared/Heading/Heading.styles';

export const customImageBannerStyles = css`
  ${ContentContainer} {
    padding-top: 120px;
  }

  ${HeadingStyled} {
    text-transform: uppercase;
  }
`;

export const additionalInfoCSS = css`
  flex-direction: column-reverse;
  gap: 6rem;
  padding-bottom: 4px;
`;
