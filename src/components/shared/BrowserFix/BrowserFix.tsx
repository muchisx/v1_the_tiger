import { getUA } from 'react-device-detect';
import { createGlobalStyle } from 'styled-components';

const DefaultGlobalStyle = createGlobalStyle`
  :root {
    --vw-fix: 1;
  }
`;

const InstagramGlobalStyle = createGlobalStyle`
  :root {
    --vw-fix: 1.2;
  }

  html {
    font-size: 76.15%;
  }
  
`;

function BrowserFix() {
  let Fix = DefaultGlobalStyle;

  if (getUA.includes('Instagram')) {
    Fix = InstagramGlobalStyle;
  }

  if (!Fix) {
    return null;
  }
  return <Fix />;
}

export default BrowserFix;
