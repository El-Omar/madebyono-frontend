import React, { useEffect, useState } from "react";
import { useStore } from "../../store/cartStore";
import path from "../../lib/path";
import Link from "next/link";

const CartItems = ({ isInCheckout }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { items, addItem, removeItem, deleteItem } = useStore();

  useEffect(() => {
    setIsMobile(isInCheckout || window.innerWidth < 1024);
  }, []);
  
  return (
    <>
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
                      <img src={path(item.thumbnail.formats.small ? item.thumbnail.formats.small.url : item.thumbnail.formats.thumbnail.url)} alt="Image"/>
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
          <div className="item__info" style={{ justifyContent: isInCheckout ? "flex-end" : "" }}>
            { !isInCheckout && 
              <div className="thumbnail thumbnail--3by4">
                <Link href={`/shop/`}>
                  <a className="cover--link"></a>
                </Link>
                <img src={path(item.thumbnail.formats.small ? item.thumbnail.formats.small.url : item.thumbnail.formats.thumbnail.url)} alt="Image" />
              </div>
            }
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
    </>
  );
};

export default CartItems;