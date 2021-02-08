export const addNewExpenses = (expensesInfo) => ({
    type: "ADD_EXPENSE_ITEM",
    payload: expensesInfo,
})

export const toggleAddExpensesWindow = (e) => ({
    type: "TOGGLE_ADD_EXPENSES_WINDOW",
    payload: e,
})

export const inputExpenseSum = (id, sum) => ({
    type: "INPUT_EXPENSE_SUM",
    payload: {
        id: id,
        sum: sum
    },
})
