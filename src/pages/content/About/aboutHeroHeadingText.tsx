import styled from 'styled-components';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 12vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 11.7vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 11.6vw;
  }
`;
const SpanTwo = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 7.7vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 7.5vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 7.4vw;
  }
`;
const SpanThree = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 6.5vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 6.4vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 6.3vw;
  }
`;
const SpanFour = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 10.2vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 10.1vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 10vw;
  }
`;

// TODO - CREATE A TOTALLY NEW PHRASE
const aboutHeroHeadingText = (
  <>
    <SpanOne className="highlight-primary">Lorem ipsum dolor </SpanOne>
    <SpanTwo>sit amet </SpanTwo>
    <SpanThree>consectetur adipisicing </SpanThree>
    <SpanFour className="highlight-primary">elit. Modi, iure?</SpanFour>
  </>
);

export default aboutHeroHeadingText;
