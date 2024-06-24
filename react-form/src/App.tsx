import { useState } from "react";
import Form from "./components/Form";
import Expense from "./components/Expense";
import ExpenseTable from "./components/ExpenseTable";
import { Product } from "./types/Product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => setProducts([...products, product]);
  const onDelete = (id: string) =>
    setProducts(products.filter((value) => value.id != id));

  return (
    <div>
      <Form />
      <br></br>
      <Expense addProduct={addProduct} />
      <div className="mb-3">
        <select id="select-category" className="form-select">
          <option>All Categories</option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
        <br></br>
      </div>
      {products.length > 0 && (
        <ExpenseTable products={products} onDelete={onDelete} />
      )}
    </div>
  );
}

export default App;
