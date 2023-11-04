import styled from 'styled-components';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 14.4vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 14vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 13.9vw;
  }
`;
const SpanTwo = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 15.4vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 15vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 14.9vw;
  }
`;
const SpanThree = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 7.3vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 7.1vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 7vw;
  }
`;
const SpanFour = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 6vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 5.9vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 5.8vw;
  }
`;

// TODO - CREATE A TOTALLY NEW PHRASE
const servicesHeroHeadingText = (
  <>
    <SpanOne>YOUR GOALS </SpanOne>
    <SpanTwo className="highlight-primary">MADE REAL: </SpanTwo>
    <SpanThree>LAUNCH PROJECTS WITH </SpanThree>
    <SpanFour className="highlight-primary">PROFESSIONAL WEB SERVICES </SpanFour>
  </>
);

export default servicesHeroHeadingText;
