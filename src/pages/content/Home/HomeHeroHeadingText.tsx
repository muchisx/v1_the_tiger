// Dependencies
import styled from 'styled-components';
// Components
import SpanSpace from '@components/shared/SpanSpace/SpanSpace';

const SpanOne = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 15.6vw;
    .span-space {
      display: none;
    }
  }
  @media only screen and (max-width: 410px) {
    font-size: 15vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 14.9vw;
  }
`;
const SpanTwo = styled.span`
  @media only screen and (max-width: 574px) {
    font-size: 10.7vw;
    .span-space:last-child {
      display: none;
    }
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
    font-size: 7vw;
  }
  @media only screen and (max-width: 410px) {
    font-size: 6.8vw;
  }
  @media only screen and (max-width: 332px) {
    font-size: 6.7vw;
  }
`;

const HomeHeroHeadingText = (
  <>
    <SpanOne className="highlight-primary">
      FREELANCE
      <SpanSpace />
    </SpanOne>
    <SpanTwo>WEB DEVELOPER</SpanTwo>
    <SpanThree>
      REACT
      <span className="highlight-primary">
        <SpanSpace />&<SpanSpace />
      </span>
      SHOPIFY EXPERT
    </SpanThree>
  </>
);

export default HomeHeroHeadingText;
