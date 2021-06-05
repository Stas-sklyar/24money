import { ActionsTypes } from "../actions/actions";

export type InitialStateType = {
    historyIncomesList: Array<ItemsIncomesType>
}

export type ItemsIncomesType = {
    sum: number
    comment: string
    id: number
    date: string
}

const initialState: InitialStateType = {
    historyIncomesList: [
    ] as Array<ItemsIncomesType>
}

export const historyIncomesReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    let copyState = [...state.historyIncomesList]
    switch (action.type) {
        case "ADD_NEW_INCOMES_HISTORY_ITEM":
            copyState.push(action.payload)
            return { historyIncomesList: [...copyState] }

        default:
            return state;
    }
};
