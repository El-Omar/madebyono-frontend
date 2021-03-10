import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";

const GET_PRODUCT_DETAIL = gql`
  query($id: ID!) {
    product(id: $id) {
      name
      price
      description
      thumbnail {
        url
      }
    }
  }
`;

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query; 
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: { id: id },
  });

  if (error) return "Error Loading Dishes";
  if (loading) return <h1>Loading ...</h1>;

  if (data.product) {
    const { product } = data;
    return (
      <div className="main__container">
        <div className="container">
          <h1 className="page__heading text-center">{product.name}</h1>
          <Link href="/shop">
            <a className="back-to-overview">Back to shop</a>
          </Link>
          <div className="thumbnail thumbnail--9by16">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}${product.thumbnail.url}`} />
          </div>
          <h2 className="price price--heading text-center">
            &euro;{ product.price.toFixed(2) }
          </h2>
          <p className="description">
            { product.description }
          </p>
        </div>
      </div>
    );
  }
  return <h1>Add Dishes</h1>;

};

export default ProductDetail;