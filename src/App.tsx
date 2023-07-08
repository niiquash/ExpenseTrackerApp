import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, item: "Milk", price: 6.36, category: "Groceries" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleCategory = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const onSubmit = (newExpense: any) => {
    setExpenses([
      ...expenses,
      {
        id: expenses.length + 1,
        item: newExpense.item,
        price: parseFloat(newExpense.price),
        category: newExpense.category,
      },
    ]);
  };

  return (
    <div className="App">
      <div className="mb-3">
        <ExpenseForm onSubmit={onSubmit} />
      </div>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList handleDelete={handleDelete} expenses={visibleCategory} />
    </div>
  );
}

export default App;
