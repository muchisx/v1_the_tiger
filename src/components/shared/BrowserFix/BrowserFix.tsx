import { getUA } from 'react-device-detect';
import { createGlobalStyle } from 'styled-components';

const DefaultGlobalStyle = createGlobalStyle`
  :root {
    --vw-fix: 1;
  }
`;

const InstagramAndFacebookGlobalStyle = createGlobalStyle`
  :root {
    --vw-fix: 1.25;
  }

  html {
    font-size: 76.15%;
  }
`;

export default function BrowserFix() {
  let Fix = DefaultGlobalStyle;

  if (getUA.includes('Instagram') || getUA.includes('FB_IAB')) {
    Fix = InstagramAndFacebookGlobalStyle;
  }

  return <Fix />;
}

// What I saw in Messenger Browser
// 'Mozilla/5.0 (Linux; Android 14; SM-S926U1 Build/UP1A.231005.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.186 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/467.1.0.45.109;]'
// What I saw in Facebook's Browser
// 'Mozilla/5.0 (Linux; Android 14; SM-S926U1 Build/UP1A.231005.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/127.0.6533.61 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/474.0.0.44.74;]'
