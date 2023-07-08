interface Expense {
  id: number;
  item: string;
  price: number;
  category: string;
}

interface Props {
    expenses: Expense[];
    handleDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, handleDelete }: Props) => {
  const total = expenses
    .reduce((acc, expense) => expense.price + acc, 0)
    .toFixed(2);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Expense</th>
          <th>Price</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses &&
          expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.item}</td>
              <td>$ {expense.price.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  onClick={() => handleDelete(expense.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>$ {total}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
