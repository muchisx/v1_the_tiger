import styled, { FlattenSimpleInterpolation } from 'styled-components';

type Props = {
  enableGutter?: boolean;
  css?: FlattenSimpleInterpolation;
  paddingTop?: number;
  paddingBottom?: number;
  marginTop?: number;
  marginBottom?: number;
};

const SectionStyled = styled.section<Props>`
  ${(props) => props.css}
  padding-inline: ${(props) => (props.enableGutter ? 'var(--gutter)' : 'unset')};

  padding-top: ${(props) => `${props.paddingTop}px`};
  padding-bottom: ${(props) => `${props.paddingBottom}px`};
  margin-top: ${(props) => `${props.marginTop}px`};
  margin-bottom: ${(props) => `${props.marginBottom}px`};
`;

export default SectionStyled;
