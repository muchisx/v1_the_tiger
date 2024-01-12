// Dependencies
import styled from 'styled-components';
// Components
import SpanSpace from '@components/shared/SpanSpace/SpanSpace';
// Utils
import getFixedCSSvw from '@utils/getFixedCSSvw';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: ${getFixedCSSvw(21.4)};
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(20.8)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(20.6)};
  }
`;
const SpanTwo = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: ${getFixedCSSvw(15.8)};
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(15.2)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(15)};
  }
`;
const SpanThree = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: ${getFixedCSSvw(5.1)};
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(4.9)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(4.8)};
  }
`;
const SpanFour = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: ${getFixedCSSvw(7.1)};
  }
  @media only screen and (max-width: 410px) {
    font-size: ${getFixedCSSvw(6.9)};
  }
  @media only screen and (max-width: 332px) {
    font-size: ${getFixedCSSvw(6.7)};
  }
`;

const aboutHeroHeadingText = (
  <>
    <SpanOne>
      QUALITY
      <SpanSpace />
    </SpanOne>
    <SpanTwo className="highlight-primary">
      ABOVE ALL.
      <SpanSpace />
    </SpanTwo>
    <SpanThree>
      I&rsquo;M A PASSIONATE WEB DEVELOPER
      <SpanSpace />
    </SpanThree>
    <SpanFour className="highlight-primary">WITH AN EYE FOR DETAIL.</SpanFour>
  </>
);

export default aboutHeroHeadingText;
