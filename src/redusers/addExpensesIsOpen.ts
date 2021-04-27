import { ActionsTypes } from "../actions/actions";

export type InitialStateType = {
    addExpensesIsOpen: boolean
}

const initialState: InitialStateType = {
    addExpensesIsOpen: false,
}

export const addExpensesIsOpen = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "TOGGLE_ADD_EXPENSES_WINDOW":
            return { ...state, addExpensesIsOpen: action.payload }

        default:
            return state;
    }
};

