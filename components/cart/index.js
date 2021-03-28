import React, { useContext, useEffect } from "react";
import Link from "next/link";

import Cookie from "js-cookie";
import AppContext from "../../context/AppContext";
import { useStore } from "../../store/cartStore";

import { Styles } from "../../styles/components/cartStyle";
import CartItems from "./CartItems";

const Cart = ({ isInCheckout }) => {
  const appContext = useContext(AppContext);
  const { isAuthenticated } = appContext;
  const { items, total, refreshCart } = useStore();

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
                    { !isInCheckout && 
                    <Link href={isAuthenticated ? "/checkout" : "/login"}>
                      <a className="btn btn--black" style={!isInCheckout ? { marginTop: '1rem', display: 'block', } : {}}>PROCEED TO CHECKOUT</a>
                    </Link> }
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