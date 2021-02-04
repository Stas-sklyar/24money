type itemsExpensesType = {
    expensesName: string
    moneySpend: number
    id: number
}

const initialState = {
    itemsExpenses: [
        { expensesName: "1 ex", moneySpend: 100, id: 1 },
        { expensesName: "2 ex", moneySpend: 100, id: 2 }
    ] as Array<itemsExpensesType>
}

export const itemsExpensesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_EXPENSE_ITEM":
            return { ...state, ...action.payload }

        default:
            return state;
    }
};
