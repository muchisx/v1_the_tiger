// Dependencies
import styled from 'styled-components';
// Components
import ImageResponsive from '../ImageResponsive/ImageResponsive';
// Types
import { type Props } from './ImageMasked';

type ImageMaskProps = {
  customStyles?: Props['customStyles'];
};

const ImageMask = styled(ImageResponsive)<ImageMaskProps>`
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 2px 2px 0rem 0px rgb(25 25 25 / 72%);
  ${(props) => props.customStyles}
`;

export default ImageMask;
