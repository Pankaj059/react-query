import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const ProductList = () => {
  const [newProduct, setNewProduct] = useState([
    { id: 0, title: "", price: "", quantity: 0 },
  ]);
  const [value, setValue] = useState("");

  function getProducts() {
    return axios("https://fakestoreapi.com/products");
  }
  const { isLoading, isSuccess, isError, data, error, refetch } = useQuery(
    ["joke"],
    getProducts
  );

  const items = data?.data || [];

  //for mutate button
  const showItems = () => {
    let newArr = [
      ...newProduct,
      { id: newProduct.length, title: "", price: "", quantity: 0 },
    ];
    setNewProduct(newArr);
  };
  console.log(newProduct);

  //setting quantity
  const handleQuantityChange = (id, value) => {
    setNewProduct((prev) =>
      prev.map((each) => {
        if (each.id === id) {
          return {
            ...each,
            quantity: +value,
          };
        }
        return each;
      })
    );
  };

  //deleting product through id
  const deleteProduct = (id) => {
    const newList = newProduct.filter((_, item) => item !== id);
    setNewProduct(newList);
    console.log(newList);
  };

  console.log(data, error);

  //showing price value comparing product id and id
  const handleOnChange = (id, itemId, field) => {
    const item = items.find((item) => item.id === id);
    console.log({ item });
    // debugger;

    setNewProduct((prev) =>
      prev.map((i) => {
        console.log("sdsadadasd", i);
        if (i.id == itemId) {
          return {
            ...i,
            [field]: item[field],
          };
        }
        console.log(i.id, item.id);
        return i;
      })
    );
  };

  if (!items || !items.length) return null;
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
            {newProduct?.map((item) => {
              return (
                <>
                  <tr key={item.id}>
                    <td>
                      <select
                        name="title"
                        onChange={(e) =>
                          handleOnChange(+e.target.value, item.id, "price")
                        }
                      >
                        {items.map((product) => (
                          <>
                            <option key={product.id} option value={product.id}>
                              {product.title}
                            </option>
                          </>
                        ))}
                      </select>
                    </td>
                    <td>{item.price}</td>

                    <td>
                      <input
                        type="number"
                        name="quantity"
                        value={item.quantity}
                        onChange={(e) => {
                          console.log("aaaaa", e.target.value);
                          handleQuantityChange(item.id, e.target.value);
                        }}
                      />
                    </td>

                    <td>{item.price * item.quantity}</td>

                    <td>
                      {item.id != 0 && (
                        <button
                          className="btn btn-primary"
                          onClick={() => deleteProduct(item.id)}
                        >
                          <CloseIcon boxSize={10} />
                        </button>
                      )}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div>
          <button class="btn btn-primary" onClick={showItems}>
            <AddIcon boxSize={10} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
