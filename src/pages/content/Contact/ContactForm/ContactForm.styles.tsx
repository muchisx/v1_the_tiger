// Dependencies
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Checkmark } from '@styled-icons/fluentui-system-filled';
// Components
import Text from '@components/shared/Text/Text';
// Utils
import { getMediaQueryValue } from '@utils';

export const SuccessText = styled(motion(Text))``;
export const SuccessIcon = styled(motion(Checkmark))`
  opacity: 0;
  path {
    stroke: var(--accent-color);
  }
`;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  height: 100%;

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    height: fit-content;
    position: sticky;
    top: 320px;
  }
`;

export const SubmitContainer = styled.div`
  display: flex;
  padding-block: 1.6rem;
  border-bottom: 1px solid var(--neutral-color);
`;

export const FormOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  margin: -20px;
  backdrop-filter: blur(6px);
  z-index: 1;
`;

export const StyledForm = styled.form`
  --column-gap: 32px;
  --row-gap: 16px;
  display: flex;
  column-gap: var(--column-gap);
  row-gap: var(--row-gap);
  flex-wrap: wrap;
  position: relative;

  .form-field__firstName,
  .form-field__lastName {
    width: calc(50% - var(--column-gap) / 2);
  }

  .form-field__email,
  .form-field__message,
  .form-field__referredBy {
    width: 100%;
  }

  ${SubmitContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .form-heading {
    width: 100%;
    margin-top: 20px;
    color: var(--text-highlight-tertiary);
  }
`;
