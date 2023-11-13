// Dependencies
import styled from 'styled-components';
// Components
import SpanSpace from '@components/shared/SpanSpace/SpanSpace';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 13.8vw;
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: 13.5vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 13.4vw;
  }
`;
const SpanTwo = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 15vw;
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: 14.7vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 14.6vw;
  }
`;
const SpanThree = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 7.1vw;
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: 6.9vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 6.9vw;
  }
`;
const SpanFour = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 5.9vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 5.8vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 5.7vw;
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
