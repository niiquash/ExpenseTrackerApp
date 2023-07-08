import { FormEvent, useState } from "react";

interface Props {
  onSubmit: (item: any) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const [expense, setExpense] = useState({
    item: "",
    price: "",
    category: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(expense);
    setExpense({
      item: "",
      price: "",
      category: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="item" className="form-label">
          Item
        </label>
        <input
          onChange={(e) => setExpense({ ...expense, item: e.target.value })}
          required
          id="item"
          type="text"
          className="form-control"
          value={expense.item}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          onChange={(e) => setExpense({ ...expense, price: e.target.value })}
          required
          id="price"
          type="text"
          className="form-control"
          value={expense.price}
        />
      </div>
      <div className="">
        <label htmlFor="category" className="form-label">
          Category
        </label>
      </div>
      <select
        onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        required
        id="category"
        className="form-select mb-3"
        value={expense.category}
      >
        <option value=""></option>
        <option value="Entertainment">Entertainment</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
