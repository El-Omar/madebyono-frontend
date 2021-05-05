import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Cookie from "js-cookie";

import { getSession } from "next-auth/client";

import path from "../../lib/path";
import Loader from "../../components/Loader";

import { useStore } from "../../store/cartStore";

const useOrder = session_id => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const { refreshCart } = useStore();
  
  
  useEffect(() => {
    const fetchOrder = async () => {
      const authenticatedSession = await getSession();

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/confirm`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ checkout_session: session_id, email: authenticatedSession.user.email })
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
  const error = order && order.error && (order.statusCode === 500 || order.statusCode === 400);

  return (
    <>
      { loading && <Loader /> }
      <div className="main__container">
        <Head>
          <title>{error
          ? order.error 
          : "Purchase succeeded!" } - Madebyono</title>
        </Head>
        <div className="container">
          <header className="page__heading">
            <h1>
            {error
            ? order.error 
            : "Succeeded!" }
            </h1>
          </header>
          <p>
          {error
            ? order.message 
            : `Thank you for your purchase!
              You will shortly receive an email with the purchased products!` }
          </p>
        </div>
      </div>
    </>
  );
};

export default Success;