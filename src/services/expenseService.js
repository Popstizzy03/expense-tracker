let expenses = [];

export const addExpense = (expense) => {
    expenses.push(expense);
    saveExpenses();
};

export const getExpenses = () => {
    return expenses;
};

export const deleteExpense = (id) => {
    expenses = expenses.filter(expense => expense.id !== id);
    saveExpenses();
};

const saveExpenses = () => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
};

const loadExpenses = () => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
        expenses = JSON.parse(storedExpenses);
    }
};

loadExpenses();