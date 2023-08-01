// Dependencies
import styled from 'styled-components';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 15.6vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 15.1vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 15vw;
  }
`;
const SpanTwo = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 10.7vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 10.4vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 10.3vw;
  }
`;
const SpanThree = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 7.1vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 6.9vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 6.8vw;
  }
`;

const HomeHeroHeadingText = (
  <>
    <SpanOne className="highlight-primary">FREELANCE </SpanOne>
    <SpanTwo>WEB DEVELOPER </SpanTwo>
    <SpanThree>
      REACT
      <span className="highlight-primary"> & </span>
      SHOPIFY EXPERT
    </SpanThree>
  </>
);

export default HomeHeroHeadingText;
