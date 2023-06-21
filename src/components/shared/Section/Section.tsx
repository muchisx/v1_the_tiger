// Dependencies
import styled, { type FlattenSimpleInterpolation, css } from 'styled-components';
// Types
export type Props = {
  contain?: true | 'padding' | 'margin';
  enableGutter?: boolean;
  customStyles?: FlattenSimpleInterpolation;
  paddingTop?: number;
  paddingBottom?: number;
  marginTop?: number;
  marginBottom?: number;
};

const Section = styled.section<Props>`
  padding-inline: ${(props) => (props.enableGutter ? 'var(--gutter)' : 'unset')};
  padding-top: ${(props) => `${props.paddingTop}px`};
  padding-bottom: ${(props) => `${props.paddingBottom}px`};
  margin-top: ${(props) => `${props.marginTop}px`};
  margin-bottom: ${(props) => `${props.marginBottom}px`};

  // TODO: Find a way to better write this without needing a nested ternary operator, && seems not to work
  ${(props) =>
    props.contain
      ? props.contain === 'padding'
        ? css`
            padding-inline: calc(50% + var(--gutter) - var(--section-max-width) / 2);
          `
        : css`
            max-width: var(--section-max-width);
            margin-inline: auto;
          `
      : null}

  ${(props) => props.customStyles}
`;

export default Section;
