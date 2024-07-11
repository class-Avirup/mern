import React, { useState } from "react";
import NewCart from "./cartTable";
import { useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await axios("http://localhost:4001/api/auth/usercart");

        setCart(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, []);

  return (
    <>
      
      <div className="overflow-x-auto mt-52">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          {cart.map((item) => (
            <NewCart key={item.id} item={item} />
          ))}
        </table>
      </div>
    </>
  );
};

export default Cart;
