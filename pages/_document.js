import { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>

      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="I am A Front End Developer who has extensive experience creating web applications using frontend technologies like Next.js, React, Vue, NuxtJS, Tailwind CSS" />
        <meta name="author" content="Sai Surya Kalagani" />
        <meta name="keywords" content="Front End Developer, Frontend Developer, Next.js, React, Vue, NuxtJS, Tailwind CSS" />

        <meta property="og:title" content="Front End Developer | Sai Surya Kalagani" />
        <meta property="og:description" content="I am A Front End Developer who has extensive experience creating web applications using frontend technologies like Next.js, React, Vue, NuxtJS, Tailwind CSS" />
        <meta property="og:image" content="https://mybucket4345.s3.us-east-2.amazonaws.com/Screenshot+2024-09-10+111718.png" />
        <meta property="og:url" content="https://saisurya.netlify.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Front End Developer | Sai Surya Kalagani" />
        <meta name="twitter:description" content="I am A Front End Developer who has extensive experience creating web applications using frontend technologies like Next.js, React, Vue, NuxtJS, Tailwind CSS" />
        <meta name="twitter:image" content="https://mybucket4345.s3.us-east-2.amazonaws.com/Screenshot+2024-09-10+111718.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Montserrat:wght@400;600;700&family=Poppins:wght@400;600;700&family=Raleway:wght@400;600;700&family=Ubuntu:wght@400;500;700&family=Shrikhand&display=swap"
          rel="stylesheet"
        />

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