import Link from "next/link";
import Image from "next/image";
import path from "../../lib/path";
import { useStore } from "../../store/cartStore";

import { useAlert } from 'react-alert'

const ProductList = ({ products }) => {
  const { addItem } = useStore();
  const alert = useAlert();
  
  if (products && products.length) {
    return products.map(product => {
      return (
        <article className="w-33 work__wrapper" key={ product.id }>
          <Link href={`/shop/${product.id}/`}>
            <a>
              <div className="thumbnail thumbnail--3by4">
                <Image layout="fill" src={path(product.thumbnail.formats.small ? product.thumbnail.formats.small.url : product.thumbnail.formats.thumbnail.url)} />
              </div>
              <h2 className="item__heading">{ product.name }</h2>
            </a>
          </Link>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn add-to-cart" onClick={() => {
              addItem(product);
              alert.show("Product added to the cart");
            }}>
              <strong className="price">&euro; { product.price.toFixed(2) }</strong>
              <strong className="add-title">Add to cart</strong>  
            </button>
          </div>
        </article>
      )
    });
  } else {
    return <div className="w-100">
      <h2 className="no-results-found" style={{ paddingLeft: `8px` }}>No products found</h2>
    </div>
  }
};

export default ProductList;
