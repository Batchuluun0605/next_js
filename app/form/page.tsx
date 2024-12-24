"use client";

import { useForm } from "react-hook-form";

type fieldTypes = {
  name: string;
  email: string;
  password: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<fieldTypes>({
    defaultValues: {
      email: "bataa@gmail.com",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (data: fieldTypes) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(JSON.stringify(data));
    } catch (error) {
      setError("root", {
        message: "this email is already taken",
      });
    }
  };

  return (
    <div className="p-[100px] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  p-5 w-1/2 "
      >
        <h1 className="text-center">Form</h1>
        <input
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 5,
              message: "Name must be at least 5 characters",
            },
          })}
          //   aria-invalid={errors.name ? "true" : "false"}
          className="error"
        />

        {errors.name && (
          <p role="alert" className="text-red-500">
            {errors.name.message}
          </p>
        )}

        <input
          {...register("email", {
            required: "Email Address is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email must include @";
              }
              return true;
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
          className="border rounded-md mt-2"
        />
        {errors.email && (
          <p role="alert" className="text-red-500">
            {errors.email.message}
          </p>
        )}

        <input
          {...register("password", {
            required: "password Address is required",
            minLength: 8,
            validate: (value) =>
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value) ||
              "Password must contain at least one number, one lowercase letter, and one uppercase letter",
          })}
          aria-invalid={errors.password ? "true" : "false"}
          className="border rounded-md mt-2"
        />
        {errors.password && (
          <p role="alert" className="text-red-500">
            {errors.password.message}
          </p>
        )}

        <button className="bg-black text-white p-2 rounded-md">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Page;
