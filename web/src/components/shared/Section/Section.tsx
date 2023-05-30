import styled, { type FlattenSimpleInterpolation, css } from 'styled-components';

export type ConditionalProps =
  | {
      contain: true;
      containType: 'padding' | 'margin';
    }
  | {
      contain?: false;
      containType?: never;
    };

export type Props = {
  enableGutter?: boolean;
  css?: FlattenSimpleInterpolation;
  paddingTop?: number;
  paddingBottom?: number;
  marginTop?: number;
  marginBottom?: number;
} & ConditionalProps;

const Section = styled.section<Props>`
  padding-inline: ${(props) => (props.enableGutter ? 'var(--gutter)' : 'unset')};
  padding-top: ${(props) => `${props.paddingTop}px`};
  padding-bottom: ${(props) => `${props.paddingBottom}px`};
  margin-top: ${(props) => `${props.marginTop}px`};
  margin-bottom: ${(props) => `${props.marginBottom}px`};

  ${(props) => props.css}
  // TODO: Find a way to better write this without needing a nested ternary operator, && seems not to work
  ${(props) =>
    props.contain
      ? props.containType === 'padding'
        ? css`
            padding-inline: calc(50% + var(--gutter) - var(--section-max-width) / 2);
          `
        : css`
            max-width: var(--section-max-width);
            margin-inline: auto;
          `
      : null}
`;

export default Section;
