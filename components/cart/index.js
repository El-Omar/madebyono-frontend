import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookie from "js-cookie";

import { loadStripe } from '@stripe/stripe-js';

import { signIn, signOut, useSession, getSession } from "next-auth/client";

import AppContext from "../../context/AppContext";
import { useStore } from "../../store/cartStore";

import { Styles } from "../../styles/components/cartStyle";
import CartItems from "./CartItems";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK || `pk_test_51IYzxPDiW4xe7ZTqTx0JTxUbzi55iNuZQ5yz4RAXCaZMi1Jm3BKcMxYzo05dFxbAkZXimkAoENeJB0wMsP5baVLe00eyEGxFlq`);

const Cart = ({ isInCheckout }) => {
  const { items, total, refreshCart } = useStore();
  
  const [session, loading] = useSession();

  useEffect(() => {
    const cart = Cookie.get("cart");

    if (typeof cart === "string" && cart !== "undefined") {
      let total = 0;
      JSON.parse(cart).forEach((item) => {
        total += (item.price * item.quantity);
      });

      refreshCart(JSON.parse(cart), total);
    }
  }, []);

  const handleBuy = async () => {
    const stripe = await stripePromise;

    const authenticatedSession = await getSession();

    if (authenticatedSession) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
        method: `POST`,
        body: JSON.stringify({ products: items, email: authenticatedSession.user.email }),
        headers: {
          'Content-type': 'application/json',
          // 'Authorization': `Bearer ${token}`,
        }
      });

      const session = await res.json();
      
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    }
  };

  return (
    <Styles>
      <div className={!isInCheckout ? "main__container" : ""}>
        <div className={!isInCheckout ? "container" : ""}>
          
          <div className="cart__heading">
            <button onClick={() => window.history.back()}>BACK</button>
            <Link href="/shop">
              <a>Continue Shopping</a>
            </Link>
          </div>

          <CartItems isInCheckout={isInCheckout} />

          { items.length > 0 && <div style={{ display: 'flex', flexFlow: 'column' }}>
            <div className="coupon__wrapper" style={{ order: isInCheckout ? 2 : 0  }}>
              <input type="text" name="coupon" className="coupon" placeholder="Coupon code" />
              <button className="btn btn--black" style={isInCheckout ? { width: '100%', height: '100%', } : {}}>APPLY COUPON</button>
            </div>
          
            <div className="col-row total__wrapper">
              <div className={!isInCheckout ? "w-50" : "w-100"}>
                <div className="total__wrapper">
                  <h2>Cart totals</h2>
                  <div className="totals">
                    <div className="total">
                      <strong className="caption">Subtotal</strong>
                      <strong className="value">&euro; {total.toFixed(2)}</strong>
                    </div>
                    <div className="total total--vat">
                      <strong className="caption">VAT 21%</strong>
                      <strong className="value">&euro; { (total * .21).toFixed(2) }</strong>
                    </div>
                    <div className="total">
                      <strong className="caption">Total</strong>
                      <strong className="value">&euro; { ((total * .21) + total).toFixed(2) }</strong>
                    </div>
                    
                    {
                      session && <>
                        <span className="user-email-label">Products will be sent to: </span>
                        <strong className="user-email">{session.user.email}</strong>, <button className="btn-signout" onClick={signOut}>Sign out</button>
                      </>
                    }
                    <button className="btn btn--black btn--purchase" onClick={() => !session ? signIn() : handleBuy()}>
                      { !session ? `LOGIN TO PROCEED` : `BUY` }
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>}

        </div>
      </div>
    </Styles>
  );
};

export default Cart;