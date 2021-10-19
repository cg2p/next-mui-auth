import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { useEffect } from "react";

import { signIn, useSession, SessionProvider } from "next-auth/react"

import createEmotionCache from '../styles/createEmotionCache';
import "/styles/globals.css";
import theme from '../styles/theme';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    // https://simplernerd.com/next-auth-global-session
  // https://next-auth.js.org/getting-started/client#custom-client-session-handling
  function Auth({ children }) {  
    const { data: session, status} = useSession(); 
    const isUser = !!session?.user;  
      
    useEffect(() => {
      if (status === "loading") {
        return;
      }
      if (!isUser) {
        console.log("redirect to login");
        signIn(null, { redirect: false });
      }
    }, [status, isUser]);

    if (isUser) {
      return children;
    }
  
    return <div>Loading...</div>;
  }  

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Next Mui Auth</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SessionProvider session={pageProps.session}>
            {Component.auth ? (
              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
