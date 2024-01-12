// Dependencies
import styled from 'styled-components';
// Components
import SpanSpace from '@components/shared/SpanSpace/SpanSpace';
// Utils
import getFixedCSSvw from '@utils/getFixedCSSvw';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: ${getFixedCSSvw(12)};
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(11.6)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(11.6)};
  }
`;
const SpanTwo = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: ${getFixedCSSvw(7.6)};
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(7.4)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(7.3)};
  }
`;
const SpanThree = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: ${getFixedCSSvw(6.5)};
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(6.3)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(6.3)};
  }
`;
const SpanFour = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: ${getFixedCSSvw(10.1)};
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(9.8)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(9.7)};
  }
`;

const WorkHeroHeadingText = (
  <>
    <SpanOne className="highlight-primary">
      RELIABLE TECH
      <SpanSpace />
    </SpanOne>
    <SpanTwo>THAT DELIVER RESULTS:</SpanTwo>
    <SpanThree>
      DISCOVER MY REMARKABLE
      <SpanSpace />
    </SpanThree>
    <SpanFour className="highlight-primary">WEB DEV WORKS.</SpanFour>
  </>
);

export default WorkHeroHeadingText;
