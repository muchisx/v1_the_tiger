import { getUA } from 'react-device-detect';
import { createGlobalStyle } from 'styled-components';

const InstagramGlobalStyle = createGlobalStyle`
  html {
    font-size: 78%;
  }
`;

function BrowserFix() {
  let Fix;
  if (getUA.includes('Instagram')) {
    Fix = InstagramGlobalStyle;
  }

  if (!Fix) {
    return null;
  }
  return <Fix />;
}

export default BrowserFix;
