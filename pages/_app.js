import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/styling.css'
import Head from "next/head";
import React, { useState, useEffect} from 'react';

function MyApp({ Component, pageProps }) 
{ 
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
        OneSignal.init({
            appId: "2bb195f0-521a-4259-a6ea-8ffeb13e0352",
            notifyButton: {
                enable: true,
            },

            allowLocalhostAsSecureOrigin: true,
        });
    });

    return () => {
        window.OneSignal = undefined;
    };
}, []); // <-- run this effect once on mount
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
      <link rel="pingback" href="https://www.impelsys.com/xmlrpc.php" />
      
      </Head>
      <Component {...pageProps} />
    </div>
    
  );

}

export default MyApp;
