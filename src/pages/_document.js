import Document, { Head, Html, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default AppDocument;
