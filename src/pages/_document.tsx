import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head></Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default AppDocument;
