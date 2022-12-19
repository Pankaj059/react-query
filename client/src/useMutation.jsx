import axios from "axios";
import React from "react";
import { QueryClient, useMutation } from "react-query";


export default function UseMutation() {
    const queryClient = new QueryClient();
  const { mutate, isLoading, isError, isSuccess } = useMutation((data) =>
    axios.post("https://jsonplaceholder.typicode.com/posts", data)
  );
  return (
    <div>
      <div>{isLoading && "loading"}</div>
      <div>{isError && "error"}</div>
      <div>{isSuccess && "success"}</div>
      <button
        onClick={() => {
          mutate({
            title: "foo",
            body: "bar",
            userId: 1
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}