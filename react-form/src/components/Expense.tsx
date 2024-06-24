import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { FieldValues, useForm } from "react-hook-form";
import { Product } from "../types/Product";
import { v4 } from "uuid";

const schema = z.object({
  description: z
    .string()
    .min(1, { message: "Description must be at least 3 characters" }),
  amount: z.number({ invalid_type_error: "Age field is required" }),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  addProduct: (product: Product) => void;
}

const Expense = ({ addProduct }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    const product: Product = {
      id: v4(),
      description: data["description"],
      amount: data["amount"],
      category: data["category"],
    };
    addProduct(product);
  };

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
    </form>
  );
};

export default Expense;
