import React, { useState, useContext } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

import AppContext from "../context/AppContext";
import { logout } from "../lib/auth";

import { Container as Styles } from '../styles/components/layoutStyle';

const Layout = props => {
  const title = "Made by Ono";
  const [bodyOverlay, setBodyOverlay] = useState(false);

  const { user, setUser } = useContext(AppContext);

  return (
    <Styles className={`${props.children.type?.name?.toString().toLowerCase()}${bodyOverlay ? ' no-scroll' : ''}`}>
      <Head>
        <title>{ title }</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <Header setBodyOverlay={setBodyOverlay} />
      {/* <NavItem className="ml-auto">
        {user ? (
          <h5>{user.username}</h5>
        ) : (
          <Link href="/register">
            <a className="nav-link"> Sign up</a>
          </Link>
        )}
      </NavItem>
      <NavItem>
        {user ? (
          <Link href="/">
            <a
              className="nav-link"
              onClick={() => {
                logout();
                setUser(null);
              }}
            >
              Logout
            </a>
          </Link>
        ) : (
          <Link href="/login">
            <a className="nav-link">Sign in</a>
          </Link>
        )}
      </NavItem> */}
      <div className={`body__overlay${bodyOverlay ? ' active' : ''}`}></div>
      <div className={`scrollable__padding${bodyOverlay ? ' active' : ''}`}></div>
      <div className="children__wrapper">
        { props.children }
      </div>
      <Footer />
    </Styles>
  );
}

export default Layout;
