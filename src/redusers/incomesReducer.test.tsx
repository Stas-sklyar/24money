import { addIncome } from "../actions/actions"
import { incomesReducer, IncomeType, InitialStateIncomeType } from "./incomesReducer"

const initialState: InitialStateIncomeType = {
    incomes: [
        { moneyIncome: 4000, id: 0, comment: 'Заработная плата' },
        { moneyIncome: 1300, id: 1, comment: 'Стипендия' }
    ] as Array<IncomeType>
}

describe('test for adding new income', () => {
    // test data
    let action = addIncome({ moneyIncome: 777, id: 2, comment: 'new income' })

    // action 
    let newState = incomesReducer(initialState, action)

    it('state length should be incremented by 1', () => {

        // expectation
        expect(newState.incomes.length).toBe(3)
    })

    it('the amount of income must match', () => {
        // expectation
        expect(newState.incomes[2].moneyIncome).toBe(777)
    })

    it('the id should be incremented by 1', () => {
        // expectation
        expect(newState.incomes[2].id).toBe(2)
    })

    it('the comment of income must match', () => {
        // expectation
        expect(newState.incomes[2].comment).toBe('new income')
    })
})