import React from 'react';

const ExpenseItem = ({ expense, onDelete }) => {
    const { id, title, amount, date } = expense;

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className="expense-item">
            <h2>{title}</h2>
            <div className="expense-item__description">
                <p>Amount: ${amount.toFixed(2)}</p>
                <p>Date: {new Date(date).toLocaleDateString()}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ExpenseItem;