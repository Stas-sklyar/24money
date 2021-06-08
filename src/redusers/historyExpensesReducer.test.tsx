import { ActionsTypes, addExpenseHistoryItem } from "../actions/actions";
import { historyExpensesReducer, InitialStateType, ItemsExpensesType } from "./historyExpensesReducer";

const initialState: InitialStateType = {
    historyExpensesList: [
    ] as Array<ItemsExpensesType>
}

describe('test for adding a new item of spending to the spending history', () => {
    // test data
    let action = addExpenseHistoryItem('some category', 888, 0, 'some date')

    // action 
    let newState = historyExpensesReducer(initialState, action)

    it('state length should be incremented by 1', () => {
        // expectation
        expect(newState.historyExpensesList.length).toBe(1)
    })

    it('the category of expense must match', () => {
        // expectation
        expect(newState.historyExpensesList[0].category).toBe('some category')
    })

    it('the sum of expense must match', () => {
        // expectation
        expect(newState.historyExpensesList[0].sum).toBe(888)
    })

    it('the id should be start from 0', () => {
        // expectation
        expect(newState.historyExpensesList[0].id).toBe(0)
    })

    it('the date of expense must match', () => {
        // expectation
        expect(newState.historyExpensesList[0].date).toBe('some date')
    })

})