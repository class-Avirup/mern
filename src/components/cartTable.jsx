import React from "react";

const cartTable = ({ item }) => {
  const deleteCart = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `http://localhost:4001/api/auth/adminDelCart/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tbody>
      <tr>
        <td className="w-36">
          <img src={`${item.image}`} />
        </td>
        <td>{item.name}</td>
        <td>{item.title}</td>
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td>
          <button
            className="btn btn-outline btn-error"
            onClick={()=>deleteCart(item._id)}
          >
            delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default cartTable;
