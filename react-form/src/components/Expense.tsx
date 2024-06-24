import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";

const schema = z.object({
  description: z
    .string()
    .min(1, { message: "Description must be at least 3 characters" }),
  amount: z.number({ invalid_type_error: "Age field is required" }),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

const Expense = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  const (products, setProducts) = useState([])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
      </div>
      <button className="btn btn-primary mb-3">Submit</button>
      <div className="mb-3">
        <select id="select-category" className="form-select">
          <option>All Categories</option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
        <br></br>
        <table className="table table-bordered mb-3">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <button className="btn btn-outline-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <button className="btn btn-outline-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default Expense;
