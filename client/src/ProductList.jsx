import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const ProductList = () => {
  const [newProduct, setNewProduct] = useState([
    { title: "", price: "", quantity: "" },
  ]);
  const [value, setValue] = useState("");
  const [datalist, setDataList] = useState("");

  function getProducts() {
    return axios("https://fakestoreapi.com/products");
  }
  const { isLoading, isError, data, error, refetch } = useQuery(
    ["joke"],
    getProducts
  );
  const deleteItem = () => {};

  // const queryClient = useQueryClient()
  // const [productList,setProductList]= useState('')

  // const fetchUsers =async()=>{
  //     const res= await axios.get("https://fakestoreapi.com/products")
  //     .then(response=>{
  //         console.log(response.data)
  //         setProductList(response.data)
  //       })
  //       const { data, status } = useQuery("products", fetchUsers);

  console.log(data, error);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

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
                            <h2>{product.description}</h2>
                            {/* {product.price} */}
                          </>
                        ))}
                      </select>
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <input
                        type="number"
                        id="number"
                        name="number"
                        onChange={onChangeHandler}
                        value={value}
                      />
                    </td>
                    <td>{}</td>

                    <td>
                      <button onClick={() => calculate}>Calculate</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
