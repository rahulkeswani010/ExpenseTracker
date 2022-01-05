import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">No Record Found!!!!!!</h2>;
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
          />
        );
      })}
    </ul>
  );
};
export default ExpenseList;
