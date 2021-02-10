
const initialState = {
    inputExpenseAmountWindow: false,
}

export const inputExpenseAmountWindow = (state = initialState, action: any) => {
    switch (action.type) {
        case "TOGGLE_INPUT_EXPENSE_AMOUNT_WINDOW":
            return { ...state, inputExpenseAmountWindow: action.payload }

        default:
            return state;
    }
};

