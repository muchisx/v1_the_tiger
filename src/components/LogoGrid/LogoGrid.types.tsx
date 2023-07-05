import { type FlattenSimpleInterpolation } from 'styled-components';
import type { KeyId } from '../../types/general.types';

export type LogoUrlWithKeyId = KeyId & {
  url: string;
};

export type Props = {
  title?: string;
  logoUrls: LogoUrlWithKeyId[];
  customStyles?: FlattenSimpleInterpolation;
};
