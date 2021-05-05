import React from "react";
import { providers, signIn, getSession, csrfToken } from "next-auth/client";

const SignIn = ({ csrfToken }) => {

  return (
    <form method="post" action="/api/auth/signin/email">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Email address
        <input type="text" id="email" name="email" />
      </label>
      <button type="submit">Use your Email</button>
    </form>
  );
};

SignIn.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/cart",
    });
    res.end();
    return;
  }

  return {
    session: undefined,
    csrfToken: await csrfToken(context),
  };
};

export default SignIn;