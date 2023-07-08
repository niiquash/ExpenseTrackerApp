interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select mb-3"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
    </select>
  );
};

export default ExpenseFilter;
