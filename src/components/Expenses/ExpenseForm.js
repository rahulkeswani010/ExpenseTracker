import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [expenseTitle, setTitle] = useState("");
  const [expenseAmount, setAmount] = useState("");
  const [expenseDate, setDate] = useState("");
  // const [userInput,setUserInput]=useState({
  //   expenseTitle:'',
  //   expenseAmount:'',
  //   expenseDate:''
  // });

  const titleInputHandler = (e) => {
    setTitle(e.target.value);
    // setUserInput((prevState)=>{
    //   return {
    //     ...prevState,expenseTitle:e.target.value
    //   }
    // })
  };
  const amountInputHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateInputHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title: expenseTitle,
      amount: +expenseAmount,
      date: new Date(expenseDate)
    };
    props.expenseFormData(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
  };
  const stopEditingHandler=()=>{
    props.onCancel();
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expenseTitle}
            onChange={titleInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.0.1"
            step="0.0.1"
            value={expenseAmount}
            onChange={amountInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-01"
            value={expenseDate}
            onChange={dateInputHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={stopEditingHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
