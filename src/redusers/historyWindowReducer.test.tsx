import { toggleHistoryWindow } from "../actions/actions"
import { historyWindow, InitialStateType } from "./historyWindowReducer"

const initialState: InitialStateType = {
    isOpen: 'none',
}

describe('test for opening the correct history window', () => {
    it('value should be `none` on the start', () => {
        // expectation
        expect(initialState.isOpen).toBe('none')
    })


    it('the string must match when passed value - `expenses` ', () => {
        // test data
        let action = toggleHistoryWindow('expenses')

        // action 
        let newState = historyWindow(initialState, action)

        // expectation
        expect(newState.isOpen).toBe('expenses')
    })

    it('the string must match when passed value - `incomes`', () => {
        // test data
        let action = toggleHistoryWindow('incomes')

        // action 
        let newState = historyWindow(initialState, action)

        // expectation
        expect(newState.isOpen).toBe('incomes')
    })


})