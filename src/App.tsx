import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, item: "Milk", price: 6.36, category: "Groceries" },
    { id: 7, item: "Movie Tickets", price: 12.0, category: "Entertainment" },
    { id: 4, item: "Phone", price: 35.97, category: "Utilities" },
    { id: 2, item: "Cabbages", price: 5.09, category: "Groceries" },
    { id: 5, item: "Water", price: 25.99, category: "Utilities" },
    { id: 3, item: "Hot dogs", price: 2.99, category: "Groceries" },
    { id: 6, item: "Electricity", price: 100.00, category: "Utilities" },
    { id: 9, item: "Restaurant", price: 29.57, category: "Entertainment" },
    { id: 8, item: "Water Park", price: 5.99, category: "Entertainment" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleCategory = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div className="App">
      <ExpenseForm />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList handleDelete={handleDelete} expenses={visibleCategory} />
    </div>
  );
}

export default App;
