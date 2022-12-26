import React from "react";
import { useForm } from "react-hook-form";

export default function Reacthookform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleError = (errors) => {
    console.log(errors);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  const registerOptions = {
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, handleError)}>
        <div className="form-control ">
          <label>Email</label>
          <input
            type="email"
            name="email"
            {...register("email", registerOptions.email)}
          />
          <div>{errors?.email && errors.email.message}</div>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", registerOptions.password)}
          />
          <div>{errors?.password && errors.password.message}</div>
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
