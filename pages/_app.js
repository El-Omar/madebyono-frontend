import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

import Layout from "../components/Layout";
import withData from "../lib/apollo";

import Cookie from "js-cookie";
import fetch from "isomorphic-fetch";
import AppContext from "../context/AppContext";

import NProgress from 'nprogress';
import "nprogress/nprogress.css";

import "../styles/index.css";
import "../styles/styles.scss";

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () =>  NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
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
  }, []);

  return (
    <AppContext.Provider 
      value={{
        user: user,
        isAuthenticated: !!user,
        setUser: setUser,
      }}>
      <Head>
        <meta name="dev:creator" content="Elomar" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous" />
      </Head>

      <Layout>
        <Component { ...pageProps } />
      </Layout>
    </AppContext.Provider>
  );
};

export default withData(MyApp);