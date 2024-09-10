import { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Montserrat:wght@400;600;700&family=Poppins:wght@400;600;700&family=Raleway:wght@400;600;700&family=Ubuntu:wght@400;500;700&family=Shrikhand&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="../public/favicon/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="./public/favicon/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="./public/favicon/favicon-16x16.png"/>
<link rel="manifest" href="./public/favicon/site.webmanifest"></link> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7PKEFX1G83"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7PKEFX1G83');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;