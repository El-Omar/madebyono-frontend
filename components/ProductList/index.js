import Link from "next/link";
import Image from "next/image";

import path from "../../lib/path";


const ProductList = ({ products }) => {
  if (products && products.length) {
    return products.map(product => {
      return (
        <article className="w-33 work__wrapper" key={ product.id }>
          <Link href={`/shop/${product.id}/`}>
            <a>
              <div className="thumbnail thumbnail--3by4">
                <img src={path(product.thumbnail.url)} />
              </div>
              <h2 className="item__heading">{ product.name }</h2>
            </a>
          </Link>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn add-to-cart" onClick={() => addItem(product)}>
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
  // if (data.products && data.products.length) {
  //   return (
  //     <Styles className="main__container">
  //       <div className="container">
  //         <header className="page__heading">
  //           <h1>
  //             Showcase Your Work<br/>
  //             Like a Pro!
  //           </h1>
  //         </header>
  //         <div className="products__wrapper">
  //           <div className="col-row">
  //             {
  //               data.products.map(product => (
  //                 
  //               ))
  //             }
  //           </div>
  //         </div>
  //       </div>
  //     </Styles>
  //   );
  // } else {
  //   return <h2>No products articles</h2>
  // }

};

export default ProductList;
