// Dependencies
import styled from 'styled-components';
// Components
import SpanSpace from '@components/shared/SpanSpace/SpanSpace';
// Utils
import getFixedCSSvw from '@utils/getFixedCSSvw';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: ${getFixedCSSvw(16)};
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(15.5)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(15.3)};
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
    font-size: ${getFixedCSSvw(6.3)};
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(6.1)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(6)};
  }
`;

const HomeHeroHeadingText = (
  <>
    <SpanOne className="highlight-primary">
      FULLSTACK
      <SpanSpace />
    </SpanOne>
    <SpanTwo>WEB DEVELOPER</SpanTwo>
    <SpanThree>
      AI, REACT
      <span className="highlight-primary">
        <SpanSpace />&<SpanSpace />
      </span>
      SHOPIFY EXPERT
    </SpanThree>
  </>
);

export default HomeHeroHeadingText;
