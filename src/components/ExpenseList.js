import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDelete }) => {
    if (expenses.length === 0) {
        return <h2>No expenses found.</h2>;
    }

    return (
        <ul>
            {expenses.map(expense => (
                <ExpenseItem 
                    key={expense.id} 
                    expense={expense} 
                    onDelete={onDelete} 
                />
            ))}
        </ul>
    );
};

export default ExpenseList;