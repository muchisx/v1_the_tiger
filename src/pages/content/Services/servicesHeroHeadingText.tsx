// Dependencies
import styled from 'styled-components';
// Components
import SpanSpace from '@components/shared/SpanSpace/SpanSpace';
// Utils
import getFixedCSSvw from '@utils/getFixedCSSvw';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: ${getFixedCSSvw(13.8)};
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(13.5)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(13.4)};
  }
`;
const SpanTwo = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: ${getFixedCSSvw(15)};
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(14.7)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(14.6)};
  }
`;
const SpanThree = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: ${getFixedCSSvw(7.1)};
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(6.9)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(6.9)};
  }
`;
const SpanFour = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: ${getFixedCSSvw(5.9)};
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(5.8)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(5.7)};
  }
`;

const servicesHeroHeadingText = (
  <>
    <SpanOne>
      YOUR GOALS
      <SpanSpace />
    </SpanOne>
    <SpanTwo className="highlight-primary">
      MADE REAL:
      <SpanSpace />
    </SpanTwo>
    <SpanThree>
      LAUNCH PROJECTS WITH
      <SpanSpace />
    </SpanThree>
    <SpanFour className="highlight-primary">PROFESSIONAL WEB SERVICES</SpanFour>
  </>
);

export default servicesHeroHeadingText;
