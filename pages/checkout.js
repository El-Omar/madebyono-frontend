import React, { useContext } from "react";

import { Row, Col, Container } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import InjectedCheckoutForm from "../components/checkout/CheckoutForm";
import AppContext from "../context/AppContext";

const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || "pk_test_51IYzxPDiW4xe7ZTqTx0JTxUbzi55iNuZQ5yz4RAXCaZMi1Jm3BKcMxYzo05dFxbAkZXimkAoENeJB0wMsP5baVLe00eyEGxFlq";

import Cart from "../components/cart/";

function Checkout() {
  // get app context
  const appContext = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  const { isAuthenticated } = appContext;

  // load stripe to inject into elements components
  const stripePromise = loadStripe(STRIPE_PK);

  return (
    <Container>
      <Row>
        <Col md={{ size: 6, order: 1 }}>
          <h1 style={{ margin: 20 }}>Checkout</h1>
          <Cart isInCheckout={true} isAuthenticated={isAuthenticated} />
        </Col>
        <Col style={{ paddingLeft: 5 }} md={{ size: 6, order: 2 }}>
          <Elements stripe={stripePromise}>
            <InjectedCheckoutForm />
          </Elements>
        </Col>
      </Row>
    </Container>
  );
  // }
}
export default Checkout;