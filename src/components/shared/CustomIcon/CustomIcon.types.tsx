export type Props = {
  // This is the type of the icon from @svgr/core
  // Icon must be called in this way
  // import { ReactComponent as customName } from './icon-location.svg';
  svgrIcon: React.FunctionComponent;

  size?: string | number;
  className?: string;
};
