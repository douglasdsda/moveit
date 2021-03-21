// import "../styles/global.css";

import { AppProps } from "next/app";
import { AuthProvider } from "../contexts/AuthContext";
import GlobalStyles from "../styles/global";

function App({ Component, pageProps }: AppProps) {
 
  return (
    <AuthProvider>
      <GlobalStyles />

      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;
