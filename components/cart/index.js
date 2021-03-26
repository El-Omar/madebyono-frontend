import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Cookie from "js-cookie";
import AppContext from "../../context/AppContext";
import { useStore } from "../../store/cartStore";

import { Styles } from "../../styles/components/cartStyle";

const Cart = () => {
  const router = useRouter();
  const appContext = useContext(AppContext);
  const { isAuthenticated } = appContext;
  const { items, addItem, removeItem, deleteItem, total, refreshCart } = useStore();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const cart = Cookie.get("cart");

    if (typeof cart === "string" && cart !== "undefined") {
      let total = 0;
      JSON.parse(cart).forEach((item) => {
        total += (item.price * item.quantity);
      });

      console.log(JSON.parse(cart))
      refreshCart(JSON.parse(cart), total);
    }
  }, []);

  console.log(total)

  return (
    <Styles>
      <div className="main__container">
        <div className="container">
          <div className="cart__heading">
            <button onClick={() => window.history.back()}>BACK</button>
            <Link href="/shop">
              <a>Continue Shopping</a>
            </Link>
          </div>

          { !isMobile && (
            <table className="cart__items">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                { items.map(item => (
                  <tr key={item.id}>
                    <td>
                        <button className="remove-item" aria-label="Remove item" onClick={() => deleteItem(item)}>x</button>
                    </td>
                    <td>
                      <div className="item__info">
                        <div className="thumbnail thumbnail--3by4">
                          <Link href={`/shop/${item.id}/`}>
                            <a className="cover--link"></a>
                          </Link>
                          <img src={`${process.env.NEXT_PUBLIC_API_URL}${item.thumbnail.url}`} alt="Image"/>
                        </div>
                      </div>
                    </td>

                    <td>
                      <Link href={`/shop/${item.id}/`}>
                        <a>{ item.name }</a>
                      </Link>
                    </td>
                    <td>&euro; {item.price.toFixed(2)}</td>
                    <td>
                      <div className="item__amount__info">
                        <button className="item-adjust-amount decrease-amount" onClick={() => removeItem(item)}>-</button>
                        <strong className="item-amount">{ item.quantity }</strong>
                        <button className="item-adjust-amount increase-amount" onClick={() => addItem(item)}>+</button>
                      </div>
                    </td>
                    <td>
                      <strong className="item-subtotal">&euro; { (item.price * item.quantity).toFixed(2) }</strong>
                    </td>
                  </tr>
                )) }
              </tbody>
            </table>
          ) }

          { !items.length && <div className="w-100">
              <h2 className="no-results-found">No items</h2>
            </div> }
          
          { isMobile && items.map(item =>
            <div className="item-component" key={item.id}>
              <div className="item__info">
                <div className="thumbnail thumbnail--3by4">
                  <Link href={`/shop/`}>
                    <a className="cover--link"></a>
                  </Link>
                  <img src={`${process.env.NEXT_PUBLIC_API_URL}${item.thumbnail.url}`} alt="Image"/>
                </div>
                <button className="remove-item" aria-label="Remove item" onClick={() => deleteItem(item)}>x</button>
              </div>

              <div className="item__detail-row">
                <strong className="caption">Product:</strong>
                <strong className="value">{item.name}</strong>
              </div>

              <div className="item__detail-row">
                <strong className="caption">Price:</strong>
                <strong className="value">&euro; {item.price}</strong>
              </div>

              <div className="item__detail-row">
                <strong className="caption">Quantity:</strong>
                <div className="item__amount__info">
                  <button className="item-adjust-amount decrease-amount" onClick={() => removeItem(item)}>-</button>
                  <strong className="item-amount">{ item.quantity }</strong>
                  <button className="item-adjust-amount increase-amount" onClick={() => addItem(item)}>+</button>
                </div>
              </div>

              <div className="item__detail-row">
                <strong className="caption">Subtotal:</strong>
                <strong className="subtotal">&euro; { (item.price * item.quantity).toFixed(2) }</strong>
              </div>
            </div>
          ) }

          { items.length > 0 && <>
            <div className="coupon__wrapper">
              <input type="text" name="coupon" className="coupon" placeholder="Coupon code" />
              <button className="btn btn--black">APPLY COUPON</button>
            </div>
          
            <div className="col-row total__wrapper">
              <div className="w-50">
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
                    <Link href={isAuthenticated ? "/checkout" : "/login"}>
                      <a className="btn btn--black">PROCEED TO CHECKOUT</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>}


        </div>
      </div>
    </Styles>
  );
};

export default Cart;