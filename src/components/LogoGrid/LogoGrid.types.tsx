import { type FlattenSimpleInterpolation } from 'styled-components';

type LogoUrlWithId = {
  id: number;
  url: string;
};

export type Props = {
  title?: string;
  logoUrlWithIdList: LogoUrlWithId[];
  customStyles?: FlattenSimpleInterpolation;
};
