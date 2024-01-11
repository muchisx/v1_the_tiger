// Dependencies
import styled from 'styled-components';
// Components
import SpanSpace from '@components/shared/SpanSpace/SpanSpace';
// Utils
import getFixedCSSvw from '@utils/getFixedCSSvw';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: ${getFixedCSSvw(15.6)};
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(15)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(14.9)};
  }
`;
const SpanTwo = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: ${getFixedCSSvw(10.7)};
    .span-space:last-child {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(10.4)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(10.3)};
  }
`;
const SpanThree = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: ${getFixedCSSvw(7)};
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(6.8)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(6.7)};
  }
`;

const HomeHeroHeadingText = (
  <>
    <SpanOne className="highlight-primary">
      FREELANCE
      <SpanSpace />
    </SpanOne>
    <SpanTwo>WEB DEVELOPER</SpanTwo>
    <SpanThree>
      REACT
      <span className="highlight-primary">
        <SpanSpace />&<SpanSpace />
      </span>
      SHOPIFY EXPERT
    </SpanThree>
  </>
);

export default HomeHeroHeadingText;
