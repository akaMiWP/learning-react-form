import { ChangeEvent, useState } from "react";
import Form from "./components/Form";
import Expense from "./components/Expense";
import ExpenseTable from "./components/ExpenseTable";
import { Product } from "./types/Product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("");

  const addProduct = (product: Product) => setProducts([...products, product]);
  const onDelete = (id: string) =>
    setProducts(products.filter((value) => value.id != id));
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);

    event.target.value != "All Categories"
      ? setFilter(event.target.value)
      : setFilter("");
  };

  const filteredProducts =
    filter != ""
      ? products.filter((value) => value.category == filter)
      : products;

  return (
    <div>
      <Form />
      <br></br>
      <Expense addProduct={addProduct} />
      <div className="mb-3">
        <select
          id="select-category"
          className="form-select"
          onChange={onChange}
        >
          <option>All Categories</option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
        <br></br>
      </div>
      {filteredProducts.length > 0 && (
        <ExpenseTable products={filteredProducts} onDelete={onDelete} />
      )}
    </div>
  );
}

export default App;
