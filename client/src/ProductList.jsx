import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useEffect } from "react";

const ProductList = () => {
  const [newProduct, setNewProduct] = useState([
    { title: "", price: "", quantity: "" },
  ]);
  const [value, setValue] = useState("");
  const [datalist, setDataList] = useState([]);

  function getProducts() {
    return axios("https://fakestoreapi.com/products");
  }

  const { isLoading, isSuccess, isError, data, error, refetch } = useQuery(
    ["joke"],
    getProducts
  );

  console.log(datalist);

  //select func
  const handleWheelScroll = (event) => {
    if (event.deltaY > 0) {
      setValue(value - 1);
    } else {
      setValue(value + 1);
    }
  };

  console.log(data, error);
  useEffect(() => {
    const price = data?.data.map((price, i) => price.price);
    console.log(price);
    setDataList(price);
  }, [isSuccess]);

  return (
    <>
      <div className="container">
        <h3 className="header">Product List</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product name</th>
              <th scope="col">Price</th>

              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {newProduct?.map((item, id) => {
              return (
                <>
                  <tr key={item.id}>
                    <td>
                      <select name="products">
                        {data?.data?.map((product) => (
                          <>
                            <option key={product.id} option value="true">
                              {product.title}
                            </option>

                            {/* {product.price} */}
                          </>
                        ))}
                      </select>
                    </td>
                    <td>{datalist}</td>
                    <td>
                      <input
                        onWheel={handleWheelScroll}
                        type="number"
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </td>
                    <td>{}</td>

                    <td>
                      <button>Calculate</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div>{value}</div>
      </div>
    </>
  );
};

export default ProductList;
