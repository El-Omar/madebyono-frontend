import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";
import { useEffect } from 'react';

import { Styles } from "../../styles/components/productDetailStyle";
import carousel from '../../lib/carousel';

import { useStore } from "../../store/cartStore";

const GET_PRODUCT_DETAIL = gql`
  query($id: ID!) {
    product(id: $id) {
      name
      slogan
      price
      oldprice
      description
      thumbnail {
        url
      }
      images {
        url
      }
    }
  }
`;

const ProductDetail = () => {
  const addToCart = useStore(state => state.addItem);

  const router = useRouter();
  const { id } = router.query; 
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: { id: id },
  });

  if (error) return "Error Loading Dishes";
  if (loading) return <h1>Loading ...</h1>;


  // useEffect(() => {
  //   carousel();
  // },);

  if (data.product) {
    const { product } = data;
    console.log("product", product);
    
    return (
      <Styles>
        <div className="main__container">
          <div className="container">
            <h1 className="page__heading text-center">{product.name}</h1>
            <strong className="page__subtitle">{ product.slogan }</strong>
            <Link href="/shop">
              <a className="back-to-overview">
                <i className="icon icon--back"></i>
                <strong>Back to shop</strong>
              </a>
            </Link>
            <div className="thumbnail thumbnail--9by16">
              <img src={`${process.env.NEXT_PUBLIC_API_URL}${product.thumbnail.url}`} />
            </div>
            <div className="product__heading">
              { product.oldprice && 
                <div className="price__heading price__heading--oldprice">
                  <strong className="caption">Regular Bundle Price</strong>
                  <strong className="price price--old">&euro;{ product.oldprice.toFixed(2) }</strong>
              </div> }
              <div className="price__heading">
                <strong className="caption">Our deal price</strong>
                <strong className="price">&euro;{ product.price.toFixed(2) }</strong>
              </div>
              <div className="price__heading">
                <strong className="caption">Best Price</strong>
                <button className="btn btn--purchase" onClick={() => {
                  addToCart(product);
                  router.push("/cart");
                }}>Purchase</button>
              </div>
            </div>
            <div className="col-row">
              <div className="w-50">
                <p className="description">
                  { product.description }
                </p>
              </div>
              <div className="w-50">
                <i className="icon icon--arrow icon--arrow--down"></i>
              </div>
            </div>

            { product.images[0] && <div className="thumbnail thumbnail--9by16">
              <img src={`${process.env.NEXT_PUBLIC_API_URL}${product.images[0].url}`} />
            </div> }
            


            {/* <div className="slider__wrap">
              { product.images.map((img, i) => (
                <div key={i} className={`slide`} data-id={i + 2}>
                  <div className="slide__img" style={{ backgroundImage: "url(" + process.env.NEXT_PUBLIC_API_URL + img.url + ")" }}></div>
                </div>
              )) }

              <div className="slider__controllers">
                <strong data-action="prev" className="slider__btn slider__controllers__next"></strong>
                <strong data-action="next" className="slider__btn slider__controllers__previous"></strong>
              </div>

              <div className="slider__dots"></div>
            </div> */}


          </div>
        </div>
      </Styles>
    );
  }
  return <h1>Project</h1>;

};

export default ProductDetail;