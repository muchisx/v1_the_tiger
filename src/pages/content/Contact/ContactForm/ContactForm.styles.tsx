// Dependencies
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SubmitContainer = styled.div`
  display: flex;
  padding-block: 1.6rem;
  border-bottom: 1px solid var(--neutral-color);
`;

export const FormOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  margin: -20px;
  backdrop-filter: blur(4px);
`;

export const StyledForm = styled.form`
  --column-gap: 32px;
  --row-gap: 16px;
  display: flex;
  column-gap: var(--column-gap);
  row-gap: var(--row-gap);
  flex-wrap: wrap;
  position: relative;

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
