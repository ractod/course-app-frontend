"use client";

import DotsLoading from "@components/elements/DotsLoading";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import ItemCard from "./ItemCard";

import useUser from "@hooks/useUser";

import isEmpty from "lodash/isEmpty";

const CartPageTemplate = () => {
  const { user, loading } = useUser()
  const cart = user?.cart || null

  if (loading) {
    return (
      <div className="h-screen">
        <DotsLoading />
      </div>
    );
  }

  if(isEmpty(cart?.items)) {
    return <EmptyCart />
  }

  return (
    <main className="container mx-auto flex gap-10 mt-5 max-xl:flex-col">
      <section className="flex-1 flex flex-col gap-y-3">
        {cart.items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </section>
      <section className="xl:min-w-[350px]">
        <CartSummary cart={cart} />
      </section>
    </main>
  );
};

export default CartPageTemplate;
