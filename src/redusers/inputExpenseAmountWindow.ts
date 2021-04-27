import { ActionsTypes } from "../actions/actions";

export type InitialStateType = {
    inputExpenseAmountWindow: boolean
}

const initialState: InitialStateType = {
    inputExpenseAmountWindow: false,
}

export const inputExpenseAmountWindow = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "TOGGLE_INPUT_EXPENSE_AMOUNT_WINDOW":
            return { ...state, inputExpenseAmountWindow: action.payload }

        default:
            return state;
    }
};

