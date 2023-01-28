import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	const [expenseYear, setExpenseYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setExpenseYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === expenseYear;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={expenseYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />

			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};
export default Expenses;
