import styled from 'styled-components';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 21.4vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 20.8vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 20.6vw;
  }
`;
const SpanTwo = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 15.8vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 15.2vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 15vw;
  }
`;
const SpanThree = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 5.2vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 5vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 4.8vw;
  }
`;
const SpanFour = styled.span`
  @media only screen and (max-width: 574px) {
    display: block;
    font-size: 7.1vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 6.9vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 6.7vw;
  }
`;

// TODO - CREATE A TOTALLY NEW PHRASE
const aboutHeroHeadingText = (
  <>
    <SpanOne>QUALITY </SpanOne>
    <SpanTwo className="highlight-primary">ABOVE ALL. </SpanTwo>
    <SpanThree>I&rsquo;M A PASSIONATE WEB DEVELOPER </SpanThree>
    <SpanFour className="highlight-primary">WITH AN EYE FOR DETAIL.</SpanFour>
  </>
);

export default aboutHeroHeadingText;
