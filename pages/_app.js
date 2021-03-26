import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import Layout from "../components/Layout";
import withData from "../lib/apollo";

import Cookie from "js-cookie";
import fetch from "isomorphic-fetch";
import AppContext from "../context/AppContext";

import create from "zustand";

import NProgress from 'nprogress';
import "nprogress/nprogress.css";

import "../styles/index.css";
import "../styles/styles.scss";

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () =>  NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  const [user, setUser] = useState(null);
  // const [cart, setCart] = useState({
  //   items: [],
  //   total: 0
  // });

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
  }, []);

  // useEffect(() => {
  //   const cart = Cookie.get("cart");

  //   if (typeof cart === "string" && cart !== "undefined") {
  //     JSON.parse(cart).forEach((item) => {
  //       setCart({
  //         cart: { items: JSON.parse(cart), total: item.price * item.quantity },
  //       });
  //     });
  //   }
  // }, [cart]);


  // const addItem = (item) => {
  //   console.log(cart);
  //   let { items } = cart;
  //   //check for item already in cart
  //   //if not in cart, add item if item is found increase quanity ++
  //   const newItem = items.find((i) => i.id === item.id);
  //   // if item is not new, add to cart, set quantity to 1
  //   if (!newItem) {
  //     //set quantity property to 1
  //     item.quantity = 1;
  //     setCart(c => 
  //       c = {
  //         items: [...items, item],
  //         total: cart.total + item.price,
  //     }, Cookie.set("cart", cart.items));
  //   } else {
  //     setCart(c => 
  //       c = {
  //         items: cart.items.map((item) =>
  //           item.id === newItem.id
  //             ? Object.assign({}, item, { quantity: item.quantity + 1 })
  //             : item
  //         ),
  //         total: cart.total + item.price,
  //       }, Cookie.set("cart", cart.items));
  //   }
  // };
  // const removeItem = (item) => {
  //   let { items } = cart;
  //   //check for item already in cart
  //   //if not in cart, add item if item is found increase quanity ++
  //   const newItem = items.find((i) => i.id === item.id);
  //   if (newItem.quantity > 1) {
  //     setCart(c => 
  //       c = {
  //         items: this.state.cart.items.map((item) =>
  //           item.id === newItem.id
  //             ? Object.assign({}, item, { quantity: item.quantity - 1 })
  //             : item
  //         ),
  //         total: this.state.cart.total - item.price,
  //       }, Cookie.set("cart", items));
  //   } else {
  //     const items = [...cart.items];
  //     const index = items.findIndex((i) => i.id === newItem.id);

  //     items.splice(index, 1);
  //     setCart(c => 
  //       c = { cart: { items: items, total: cart.total - item.price } },
  //       Cookie.set("cart", items)
  //     );
  //   }
  // }


  return (
    <AppContext.Provider 
      value={{
        user: user,
        isAuthenticated: !!user,
        setUser: setUser,
        // cart: cart,
        // addItem: addItem,
        // removeItem: removeItem,
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