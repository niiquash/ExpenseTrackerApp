import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, item: "Milk", price: 6, category: "Groceries" },
    { id: 2, item: "Phone", price: 35, category: "Utility" },
    { id: 3, item: "Movie Tickets", price: 12, category: "Entertainment" },
  ]);

  return (
    <div className="App">
      <ExpenseForm />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
