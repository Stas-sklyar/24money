
const initialState = {
    addExpensesIsOpen: false,
}

export const addExpensesIsOpen = (state = initialState, action: any) => {
    switch (action.type) {
        case "TOGGLE_ADD_EXPENSES_WINDOW":
            return { ...state, addExpensesIsOpen: action.payload }

        default:
            return state;
    }
};

