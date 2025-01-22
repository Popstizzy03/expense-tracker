import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { getExpenses, addExpense, deleteExpense } from './services/expenseService';

const App = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const data = await getExpenses();
            setExpenses(data);
        };
        fetchExpenses();
    }, []);

    const handleAddExpense = async (expense) => {
        await addExpense(expense);
        setExpenses([...expenses, expense]);
    };

    const handleDeleteExpense = async (id) => {
        await deleteExpense(id);
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    return (
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseForm onAddExpense={handleAddExpense} />
            <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
        </div>
    );
};

export default App;