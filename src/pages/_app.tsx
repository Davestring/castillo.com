import React from 'react';

import { ChakraProvider } from "@chakra-ui/react";

import { AppProps } from 'next/app';

import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <React.StrictMode>
                <Component {...pageProps}></Component>
            </React.StrictMode>
        </ChakraProvider>
    )
}

export default App;