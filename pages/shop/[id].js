import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import marked from "marked";
import { useAlert } from 'react-alert'

import { Styles } from "../../styles/components/productDetailStyle";
import path from "../../lib/path";

import { useStore } from "../../store/cartStore";

const GET_PRODUCT_DETAIL = gql`
  query($id: ID!) {
    product(id: $id) {
      id
      name
      slogan
      price
      oldprice
      description
      thumbnail {
        formats
      }
      images {
        url
      }
    }
  }
`;

const ProductDetail = () => {
  const { addItem } = useStore();
  const alert = useAlert();

  const router = useRouter();
  const { id } = router.query; 
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: { id: id },
  });

  if (error) return (
    <div className="container">
      <div className="col-row">
        <div className="w-50">
          <span className="no-results-found">Failed to load</span>
        </div>
      </div>
    </div>
  );

  if (loading) return (
    <div className="container">
      <div className="col-row">
        <div className="w-50">
          <div className="loading-box"></div>
        </div>
      </div>
    </div>
  );

  if (data.product) {
    const { product } = data;
    
    return (
      <Styles>
        <Head>
          <title>{product.name} - Madebyono</title>
        </Head>
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
              <Image layout="fill" src={path(product.thumbnail.url)} />
            </div>

            <div className="col-row row--prices">
              { product.oldprice && 
              <div className="w-33 price-col">
                  <div className="price__heading--oldprice">
                    <strong className="caption">Regular Bundle Price</strong>
                    <strong className="price price--old">&euro;{ product.oldprice.toFixed(2) }</strong>
                </div> 
              </div>
              }

              <div className="w-33 price-col">
                <strong className="caption">Our deal price</strong>
                <strong className="price">&euro;{ product.price.toFixed(2) }</strong>
              </div>

<div className="w-33"> <strong className="caption">Best Price</strong> <button className="btn btn--purchase" onClick={() => { addItem(product); alert.show("Product added to the cart"); router.push("/cart"); }}>Purchase</button> </div> </div>

            <div className="col-row">
              <div className="w-100">
                { product.description && <div className="description">
                  <div className="marked" dangerouslySetInnerHTML={{ __html: marked(product.description) }}></div>
                </div> }
              </div>

              { product.images.length > 0 && <div className="w-100">
                <i className="icon icon--arrow icon--arrow--down"></i>
              </div> }
              
            </div>

            { product.images.map((image, i) => (
              <div className="thumbnail thumbnail--9by16" key={i}>
                <Image layout="fill" src={path(image.url)} />
              </div>
            )) }

          </div>
        </div>
      </Styles>
    );
  }
  return <h1>Project</h1>;

};

export default ProductDetail;
