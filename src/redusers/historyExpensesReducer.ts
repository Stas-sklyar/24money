import { ActionsTypes } from "../actions/actions";

export type InitialStateType = {
    historyExpensesList: Array<ItemsExpensesType>
}

export type ItemsExpensesType = {
    category: string
    sum: number
    id: number
    date: string
}

const initialState: InitialStateType = {
    historyExpensesList: [
    ] as Array<ItemsExpensesType>
}

export const historyExpensesReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    let copyState = [...state.historyExpensesList]
    switch (action.type) {
        case "ADD_NEW_EXPENSES_HISTORY_ITEM":
            copyState.push(action.payload)
            return { historyExpensesList: [...copyState] }

        default:
            return state;
    }
};
