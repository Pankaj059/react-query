import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const ProductList = () => {
  const [newProduct, setNewProduct] = useState([
    { id: "", title: "", price: "", quantity: "" },
  ]);
  let obj = { id: "", title: "", price: "", quantity: "" };
  const [value, setValue] = useState("");

  function getProducts() {
    return axios("https://fakestoreapi.com/products");
  }

  const { isLoading, isSuccess, isError, data, error, refetch } = useQuery(
    ["joke"],
    getProducts
  );

  const showItems = () => {
    let newArr = [...newProduct, obj];
    setNewProduct(newArr);
  };
  console.log(newProduct);

  const deleteProduct = (id) => {
    const newList = newProduct.filter((_, index) => index !== id);
    setNewProduct([...newList]);
  };

  console.log(data, error);

  const handleOnChange = (e, index) => {
    let price = data[index].price;
    let newArr = newProduct;
    newArr[index][e.target.name] = e.target.value;
    setNewProduct([...newArr], price);
    console.log(e, index);
  };
  console.log(newProduct.price);
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
            {newProduct?.map((item, index) => {
              return (
                <>
                  <tr key={item.index}>
                    <td>
                      <select
                        name="title"
                        onChange={(e) => handleOnChange(e, index)}
                      >
                        {data?.data?.map((product) => (
                          <>
                            <option
                              key={product.id}
                              option
                              value={product.title}
                            >
                              {product.title}
                            </option>

                            {/* {product.price} */}
                          </>
                        ))}
                      </select>
                    </td>
                    <td>{newProduct.price}</td>

                    <td>
                      <input
                        type="number"
                        name="quantity"
                        value={item.quantity}
                        onChange={(e) => handleOnChange(e, index)}
                      />
                    </td>

                    <td>{item.price * item.quantity}</td>

                    <td>
                      {index != 0 && (
                        <button
                          class="btn btn-primary"
                          onClick={() => deleteProduct(index)}
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
        <div>{value}</div>
      </div>
    </>
  );
};

export default ProductList;
