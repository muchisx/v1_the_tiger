import styled from 'styled-components';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 16vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 15.6vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 15.5vw;
  }
  @media only screen and (max-width: 318px) {
    font-size: 15.3vw;
  }
`;
const SpanTwo = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 11vw;
  }
  @media only screen and (max-width: 402px) {
    font-size: 10.8vw;
  }
  @media only screen and (max-width: 344px) {
    font-size: 10.7vw;
  }
  @media only screen and (max-width: 320px) {
    font-size: 10.5vw;
  }
`;
const SpanThree = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 7.2vw;
  }
  @media only screen and (max-width: 362px) {
    font-size: 7.1vw;
  }
  @media only screen and (max-width: 326px) {
    font-size: 7vw;
  }
`;

const homeHeading = (
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

const homeContent = {
  homeHeading,
};

export default homeContent;
