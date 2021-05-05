import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from "../components/Layout";
import withData from "../lib/apollo";

import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Cookie from "js-cookie";
import fetch from "isomorphic-fetch";
import AppContext from "../context/AppContext";

import { Provider as AuthProvider } from "next-auth/client";

import NProgress from 'nprogress';
import "nprogress/nprogress.css";

import Loader from "../components/Loader";
import "../styles/index.css";
import "../styles/styles.scss";

const alertOptions = {
  position: positions.TOP_RIGHT,
  timeout: 3000,
  offset: '30px',
}

const MyApp = ({ Component, pageProps }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      // setLoading(true);
    };
    
    const handleComplete = () => {
      NProgress.done();
      // setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart); 
    router.events.on('routeChangeComplete', handleComplete); 
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  useEffect(() => {
    const token = Cookie.get("token");

    if (token) {
      // authenticate the token on the server and place set user object
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        // if res comes back not valid, token is not valid
        // delete the token and log the user out on client
        if (!res.ok) {
          Cookie.remove("token");
          setUser(user => user = null);
          return null;
        }
        const user = await res.json();
        setUser(u => u = user);
      });
    }

    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);


  return (
    <AuthProvider session={ pageProps?.session }>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <AppContext.Provider 
          value={{
            user: user,
            isAuthenticated: !!user,
            setUser: setUser,
          }}>
          <Head>
            <meta name="dev:creator" content="Elomar" />
            <link rel="shortcut icon" href="/assets/img/favicon.png" />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossOrigin="anonymous" />
          </Head>
          
          { loading && <Loader /> }

          <Layout>
            <Component { ...pageProps } />
          </Layout>
        </AppContext.Provider>
      </AlertProvider>
    </AuthProvider>
  );
};

export default withData(MyApp);