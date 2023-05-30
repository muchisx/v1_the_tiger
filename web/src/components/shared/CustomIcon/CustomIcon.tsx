/* eslint-disable react/jsx-props-no-spreading */
import { StyledIconBase } from '@styled-icons/styled-icon';
import type { Props } from './CustomIcon.types';

// This uses the type of the icon from @svgr/core
// Icon must be called in this way
// import { ReactComponent as customName } from './icon-location.svg';
// and passed as prop to this component as svgrIcon

function CustomIcon(props: Props) {
  const { size = 24, className, svgrIcon } = props;
  const { children, ...attrs } = svgrIcon({ className: 'custom-icon' })?.props || {};

  return (
    <StyledIconBase width={size} height={size} iconVerticalAlign="middle" className={className} {...attrs}>
      {children}
    </StyledIconBase>
  );
}

CustomIcon.displayName = 'CustomIcon';

export default CustomIcon;
