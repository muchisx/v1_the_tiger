// Dependencies
import styled from 'styled-components';
// Components
import SpanSpace from '@components/shared/SpanSpace/SpanSpace';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 12vw;
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: 11.6vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 11.6vw;
  }
`;
const SpanTwo = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 7.6vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 7.4vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 7.3vw;
  }
`;
const SpanThree = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 6.5vw;
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: 6.3vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 6.3vw;
  }
`;
const SpanFour = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 10.1vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 9.8vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 9.7vw;
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
