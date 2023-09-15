import styled from 'styled-components';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 11.9vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 11.4vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 11.3vw;
  }
`;
const SpanTwo = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 8.6vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 8.3vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 8.2vw;
  }
`;
const SpanThree = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 12vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 11.7vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 11.6vw;
  }
`;
const SpanFour = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 12.3vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 11.9vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 11.8vw;
  }
`;
const SpanFive = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 9.1vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 8.8vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 8.7vw;
  }
`;

// TODO - CREATE A TOTALLY NEW PHRASE
const servicesHeroHeadingText = (
  <>
    <SpanOne>TURNING YOUR </SpanOne>
    <SpanTwo className="highlight-primary">GOALS INTO REALITY: </SpanTwo>
    <SpanThree>PROFESSIONAL </SpanThree>
    <SpanFour className="highlight-primary">WEB SERVICES </SpanFour>
    <SpanFive>THAT PROPEL YOUR PROJECT FORWARD</SpanFive>
  </>
);

export default servicesHeroHeadingText;
