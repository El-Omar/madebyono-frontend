import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Link from "next/link";
import Image from "next/image";

import AppContext from "../../context/AppContext"
import { useStore } from "../../store/cartStore";

import { Container as Styles } from "../../styles/components/projectStyle";

const QUERY = gql`
  {
    products(sort: "createdAt:DESC") {
      id
      name
      thumbnail {
        url
      }
      price
      slug
    }
  }
`;

const ProductList = () => {
  const appContext = useContext(AppContext);
  const { addItem } = useStore();

  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading products";
  if (loading) return <h2>Loading...</h2>;

  if (data.products && data.products.length) {
    return (
      <Styles className="main__container">
        <div className="container">
          <header className="page__heading">
            <h1>
              Showcase Your Work<br/>
              Like a Pro!
            </h1>
          </header>
          <div className="products__wrapper">
            <div className="col-row">
              {
                data.products.map(product => (
                  <article className="w-33 work__wrapper" key={ product.id }>
                    <Link href={`/shop/${product.id}/`}>
                      <a>
                        <div className="thumbnail thumbnail--3by4">
                          <img src={`${process.env.NEXT_PUBLIC_API_URL}${product.thumbnail.url}`} />
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
                ))
              }
            </div>
          </div>
        </div>
      </Styles>
    );
  } else {
    return <h2>No products articles</h2>
  }

};

export default ProductList;
