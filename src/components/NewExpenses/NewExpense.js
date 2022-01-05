import { useState } from "react";
import ExpenseForm from "../Expenses/ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const ExpenseFormHandler = (newExpense) => {
    newExpense = {
      ...newExpense,
      id: Math.random().toString()
    };
    props.addNewExpenseHandler(newExpense);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          expenseFormData={ExpenseFormHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
