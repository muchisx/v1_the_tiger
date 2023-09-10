// Dependencies
import styled, { css } from 'styled-components';

// Utils
import { getMediaQueryValue } from '@utils';

export const contactFormCustomStyles = css`
  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    padding-bottom: 0;
  }

  .split-content__first {
    @media only screen and (min-width: ${getMediaQueryValue('md')}) {
      flex: 1 1 56%;
      position: relative;

      .contact-sticky {
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: sticky;
        top: 12%;
        height: fit-content;
      }
      .contact-methods {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 24px;
      }
    }

    ::before {
      --half-vw: calc(-100vw / 2);
      content: '';
      position: absolute;
      inset: 0;
      margin-left: calc(var(--half-vw) + 90%);
      margin-top: -200px;
      z-index: -2;
      background-color: var(--body-bg-color-tertiary);
    }
  }

  .split-content__second {
    flex: 1 1 44%;
    padding-left: 60px;
    position: relative;
    isolation: isolate;
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
