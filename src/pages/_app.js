import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
      {/* <script
        strategy="afterInteractive"
        id="tawk.to"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/690759b029711919546dec9f/1j92bcmib';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `,
        }}
      /> */}
      <Component {...pageProps} />
    </>
  ;
}
