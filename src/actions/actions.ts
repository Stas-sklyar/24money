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

export type ToggleHistoryWindowType = {
    type: "TOGGLE_HISTORY_WINDOW"
    payload: string
}

export const toggleHistoryWindow = (e: string): ToggleHistoryWindowType => ({
    type: "TOGGLE_HISTORY_WINDOW",
    payload: e,
})

export type AddExpenseHistoryItemType = {
    type: "ADD_NEW_EXPENSES_HISTORY_ITEM",
    payload: {
        category: string
        sum: number
        id: number
        date: string
    },
}

export const addExpenseHistoryItem = (category: string, sum: number, id: number, date: string): AddExpenseHistoryItemType => ({
    type: "ADD_NEW_EXPENSES_HISTORY_ITEM",
    payload: {
        category: category,
        sum: sum,
        id: id,
        date: date
    },
})

export type AddIncomesHistoryItemType = {
    type: "ADD_NEW_INCOMES_HISTORY_ITEM",
    payload: {
        sum: number
        comment: string
        id: number
        date: string
    },
}

export const addIncomesHistoryItem = (sum: number, comment: string, id: number, date: string): AddIncomesHistoryItemType => ({
    type: "ADD_NEW_INCOMES_HISTORY_ITEM",
    payload: {
        sum: sum,
        comment: comment,
        id: id,
        date: date
    },
})


export type ActionsTypes =
    ReturnType<typeof addNewExpenses> |
    ReturnType<typeof toggleAddExpensesWindow> |
    ReturnType<typeof inputExpenseSum> |
    ReturnType<typeof toggleInputExpenseAmountWindow> |
    ReturnType<typeof addIncome> |
    ReturnType<typeof toggleIncomesWindow> |
    ReturnType<typeof toggleHistoryWindow> |
    ReturnType<typeof addExpenseHistoryItem> |
    ReturnType<typeof addIncomesHistoryItem>


