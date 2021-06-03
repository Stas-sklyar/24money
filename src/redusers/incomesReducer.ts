import { ActionsTypes } from "../actions/actions";

export type InitialStateIncomeType = {
    incomes: Array<IncomeType>
}

export type IncomeType = {
    moneyIncome: number
    id: number
    comment: string
}

const initialState: InitialStateIncomeType = {
    incomes: [
        { moneyIncome: 4000, id: 0, comment: 'Заработная плата' },
        { moneyIncome: 1300, id: 1, comment: 'Стипендия' }
    ] as Array<IncomeType>
}

export const incomesReducer = (state = initialState, action: ActionsTypes): InitialStateIncomeType => {
    let copyState = [...state.incomes]
    switch (action.type) {
        case "ADD_INCOME":
            copyState.push(action.payload)
            return { incomes: [...copyState] }

        default:
            return state;
    }
};
