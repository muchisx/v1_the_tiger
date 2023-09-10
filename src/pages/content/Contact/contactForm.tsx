// Dependencies
import styled, { css } from 'styled-components';
// Styled Components
import { BackgroundShape } from '@components/SplitContent/SplitContent.styles';
// Utils
import { getMediaQueryValue } from '@utils';

export const contactFormCustomStyles = css`
  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    isolation: isolate;
    background-color: var(--body-bg-color-tertiary);

    ::before {
      content: '';
      position: absolute;
      width: 46vw;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: white;
    }
  }

  ${BackgroundShape} {
    top: 16%;
    width: min(440px, 90%);
    right: -32%;
    left: unset;

    @media only screen and (min-width: ${getMediaQueryValue('md')}) {
      top: unset;
      width: min(640px, 46vw);
      bottom: 6%;
      left: 30vw;
    }

    @media only screen and (min-width: ${getMediaQueryValue('xxl')}) {
      left: 36vw;
    }
  }

  .split-content__first {
    padding-bottom: 40px;
    border-bottom: 1px solid var(--neutral-color);

    @media only screen and (min-width: ${getMediaQueryValue('md')}) {
      flex: 1 1 56%;
      border: unset;
    }

    .contact-sticky {
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: sticky;
      top: 12%;
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 24px;
    }
  }

  .split-content__second {
    @media only screen and (min-width: ${getMediaQueryValue('md')}) {
      flex: 1 1 44%;
      padding-left: 60px;
    }
  }
`;

export const SubmitContainer = styled.div`
  display: flex;
  padding-block: 1.6rem;
  border-bottom: 1px solid var(--neutral-color);
`;

export const Form = styled.form`
  --column-gap: 32px;
  --row-gap: 16px;
  display: flex;
  column-gap: var(--column-gap);
  row-gap: var(--row-gap);
  flex-wrap: wrap;

  input[name='firstName'],
  input[name='lastName'] {
    width: calc(50% - var(--column-gap) / 2);
  }

  input[name='email'],
  textarea[name='message'],
  input[name='referredBy'],
  ${SubmitContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .form-heading {
    width: 100%;
    :not(:first-of-type) {
      margin-top: 20px;
    }
  }
`;
