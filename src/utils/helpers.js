// src/utils/helpers.js

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

export const calculateTotal = (expenses) => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
};

export const validateExpense = (expense) => {
    return expense.description && expense.amount > 0;
};