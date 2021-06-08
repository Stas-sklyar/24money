import { ActionsTypes, addIncomesHistoryItem } from "../actions/actions";
import { historyIncomesReducer, InitialStateType, ItemsIncomesType } from "./historyIncomesReducer";

const initialState: InitialStateType = {
    historyIncomesList: [
    ] as Array<ItemsIncomesType>
}

describe('test for adding a new income item to the income history', () => {
    // test data
    let action = addIncomesHistoryItem(123, 'some comment', 0, 'some date')

    // action 
    let newState = historyIncomesReducer(initialState, action)

    it('state length should be incremented by 1', () => {
        // expectation
        expect(newState.historyIncomesList.length).toBe(1)
    })

    it('the sum of incomes must match', () => {
        // expectation
        expect(newState.historyIncomesList[0].sum).toBe(123)
    })

    it('the id should be start from 0', () => {
        // expectation
        expect(newState.historyIncomesList[0].id).toBe(0)
    })

    it('the date of incomes must match', () => {
        // expectation
        expect(newState.historyIncomesList[0].date).toBe('some date')
    })

})