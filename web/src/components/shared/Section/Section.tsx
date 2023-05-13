import styled, { type FlattenSimpleInterpolation, css } from 'styled-components';

type Props = {
  enableGutter?: boolean;
  contain?: boolean;
  css?: FlattenSimpleInterpolation;
  paddingTop?: number;
  paddingBottom?: number;
  marginTop?: number;
  marginBottom?: number;
};

const Section = styled.section<Props>`
  ${(props) => props.css}
  ${(props) =>
    props.contain &&
    css`
      max-width: 1320px;
      margin-inline: auto;
    `}
    
  padding-inline: ${(props) => (props.enableGutter ? 'var(--gutter)' : 'unset')};
  padding-top: ${(props) => `${props.paddingTop}px`};
  padding-bottom: ${(props) => `${props.paddingBottom}px`};
  margin-top: ${(props) => `${props.marginTop}px`};
  margin-bottom: ${(props) => `${props.marginBottom}px`};
`;

export default Section;
