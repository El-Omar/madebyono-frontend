import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Container as Styles } from "../../styles/components/projectStyle";
import Head from "next/head";

import ProductList from "../../components/ProductList";

const QUERY = gql`
  {
    products(sort: "createdAt:DESC") {
      id
      name
      thumbnail {
        formats
      }
      price
      slug
    }
  }
`;

const Shop = () => {
  const { loading, error, data } = useQuery(QUERY);

  return (
    <Styles className="main__container">
      <Head>
        <title>Shop - Madebyono</title>
      </Head>
      <div className="container">
        <header className="page__heading">
          <h1>
            Showcase Your Work<br/>
            Like a Pro!
          </h1>
        </header>

        <div className={`products__wrapper`}>
          <div className="col-row">
            
            {error && <div className="w-100">
              <span className="no-results-found">Failed to load the shop</span>
            </div>}
            
            {loading && <>
              <div className="w-33">
                <div className="loading-box"></div>
              </div>
              <div className="w-33">
                <div className="loading-box"></div>
              </div>
              <div className="w-33">
                <div className="loading-box"></div>
              </div>
            </>}
            
            {!error && !loading && <>
                <ProductList products={data.products}/>
            </>}
            
          </div>
        </div>
          
      </div>
    </Styles>
  );

};

export default Shop;