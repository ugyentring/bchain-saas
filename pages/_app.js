import "../styles/globals.css";
import { StateContextProvider } from "../Context/index.js";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
    <StateContextProvider>
      <Component {...pageProps} />

      {/* Load JavaScript files conditionally if needed */}
      <Script src="js/vendor/modernizr-3.5.0.min.js" strategy="beforeInteractive" />
      <Script src="js/vendor/jquery-1.12.4.min.js" strategy="beforeInteractive" />
      <Script src="js/popper.min.js" strategy="lazyOnload" />
      <Script src="js/bootstrap.min.js" strategy="lazyOnload" />
      <Script src="js/owl.carousal.min.js" strategy="lazyOnload" />
      <Script src="js/jquery.nice-select.min.js" strategy="lazyOnload" />
      <Script src="js/jquery.meanmenu.js" strategy="lazyOnload" />
      <Script src="js/wow.min.js" strategy="lazyOnload" />
      <Script src="js/main.js" strategy="lazyOnload" />
      <Script src="js/plugins.js" strategy="lazyOnload" />
      </StateContextProvider>
      </>
  );
}
