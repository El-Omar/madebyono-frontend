import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Cookie from "js-cookie";

import path from "../../lib/path";
import Loader from "../../components/Loader";

import { useStore } from "../../store/cartStore";

const useOrder = session_id => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const { refreshCart } = useStore();
  const token = Cookie.get("token");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/confirm`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ checkout_session: session_id })
        });
        
        const data = await res.json();
        setOrder(data);
        refreshCart([]);
  
      } catch(err) {
        setOrder(null);
      }
      setLoading(false);
    }
    fetchOrder();
  }, [session_id]);

  return { order, loading };
};

const Success = () => {
  const router = useRouter();
  const { session_id } = router.query;

  const { order, loading } = useOrder(session_id);
  console.log(order);

  return (
    <>
      { loading && <Loader /> }
      <div className="main__container">
        <Head>
          <title>Purchase succeeded! - Madebyono</title>
        </Head>
        <div className="container">
          <header className="page__heading">
            <h1>
              Succeeded!
            </h1>
          </header>
          <p>
            Thank you for your purchase!
          </p>
        </div>
      </div>
    </>
  );
};

export default Success;