export type AddNewExpensesType = {
    type: "ADD_EXPENSE_ITEM"
    payload: any
}

export const addNewExpenses = (expensesInfo: any): AddNewExpensesType => ({
    type: "ADD_EXPENSE_ITEM",
    payload: expensesInfo,
})


export type ToggleAddExpensesWindowType = {
    type: "TOGGLE_ADD_EXPENSES_WINDOW"
    payload: boolean
}

export const toggleAddExpensesWindow = (e: boolean): ToggleAddExpensesWindowType => ({
    type: "TOGGLE_ADD_EXPENSES_WINDOW",
    payload: e,
})


export type InputExpenseSumType = {
    type: "INPUT_EXPENSE_SUM",
    payload: {
        id: number
        sum: number
    },
}

export const inputExpenseSum = (id: number, sum: number): InputExpenseSumType => ({
    type: "INPUT_EXPENSE_SUM",
    payload: {
        id: id,
        sum: sum
    },
})


export type AddIncomeType = {
    type: "ADD_INCOME"
    payload: any
}

export const addIncome = (incomeInfo: any): AddIncomeType => ({
    type: "ADD_INCOME",
    payload: incomeInfo,
})

export type ToggleIncomesWindowType = {
    type: "TOGGLE_ADD_INCOMES_WINDOW"
    payload: boolean
}

export const toggleIncomesWindow = (e: boolean): ToggleIncomesWindowType => ({
    type: "TOGGLE_ADD_INCOMES_WINDOW",
    payload: e,
})


export type ToggleInputExpenseAmountWindowType = {
    type: "TOGGLE_INPUT_EXPENSE_AMOUNT_WINDOW"
    payload: boolean
}

export const toggleInputExpenseAmountWindow = (e: boolean): ToggleInputExpenseAmountWindowType => ({
    type: "TOGGLE_INPUT_EXPENSE_AMOUNT_WINDOW",
    payload: e,
})

export type ActionsTypes =
    ReturnType<typeof addNewExpenses> |
    ReturnType<typeof toggleAddExpensesWindow> |
    ReturnType<typeof inputExpenseSum> |
    ReturnType<typeof toggleInputExpenseAmountWindow> |
    ReturnType<typeof addIncome> |
    ReturnType<typeof toggleIncomesWindow>


