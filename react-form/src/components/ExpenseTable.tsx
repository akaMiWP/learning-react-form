import { Product } from "../types/Product";

interface Props {
  products: Product[];
  onDelete: (id: string) => void;
}

const ExpenseTable = ({ products, onDelete }: Props) => {
  return (
    <div className="mb-3">
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
          {products.map((value) => {
            return (
              <tr key={value.id}>
                <th scope="row">{value.description}</th>
                <td>${value.amount}</td>
                <td>{value.category}</td>
                <td>
                  <button
                    onClick={() => onDelete(value.id)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
