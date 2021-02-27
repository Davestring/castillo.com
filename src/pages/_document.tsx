import { default as DefaultDocument, Html, Head, Main, NextScript  } from 'next/document'


class Document extends DefaultDocument {
    render() {
        return (
            <Html lang="es">
                <Head></Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}

export default Document;