import React from "react";

function Ecards({ item }) {
  const getUser = async (id) => {
    try {
      console.log(id);
      const response = await fetch(
        `http://localhost:4001/api/auth/cart/:${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mt-4 my-3 p-3 w-full ">
        <div className="card w-56 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure className="h-32 w-full">
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>

              <button
                className="btn btn-outline btn-accent rounded-3xl"
                onClick={() => getUser(item._id)}
              >
                Add to Cart
              </button>
              <div className=" cursor-pointer  px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ecards;
