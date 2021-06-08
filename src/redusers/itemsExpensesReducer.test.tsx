import { addNewExpenses, inputExpenseSum } from "../actions/actions"
import { InitialStateType, itemsExpensesReducer, ItemsExpensesType } from "./itemsExpensesReducer"


const initialState: InitialStateType = {
    itemsExpenses: [
        { expensesName: "Продукты", moneySpend: 10, id: 0, icon: "https://i.ibb.co/587QCcb/1.png", bgColor: '#FF6384' },
        { expensesName: "Кафе", moneySpend: 20, id: 1, icon: "https://i.ibb.co/K5vBxYX/2.png", bgColor: '#36A2EB' },
        { expensesName: "Досуг", moneySpend: 100, id: 2, icon: "https://i.ibb.co/DfSGjwY/3.png", bgColor: '#FFCE56' },
        { expensesName: "Транспорт", moneySpend: 5, id: 3, icon: "https://i.ibb.co/KwDCn5q/4.png", bgColor: '#FF1156' },
        { expensesName: "Здоровье", moneySpend: 45, id: 4, icon: "https://i.ibb.co/2MwCWLZ/5.png", bgColor: '#FF9E56' },
        { expensesName: "Подарки", moneySpend: 50, id: 5, icon: "https://i.ibb.co/7gHHM1r/6.png", bgColor: '#e01a4b' },
        { expensesName: "Семья", moneySpend: 20, id: 6, icon: "https://i.ibb.co/jz4N7kG/7.png", bgColor: '#197b94' },
        { expensesName: "Покупки", moneySpend: 150, id: 7, icon: "https://i.ibb.co/jrc4bwQ/8.png", bgColor: '#c2351f' },
    ] as Array<ItemsExpensesType>
}

describe('test for adding a new item of expenses', () => {
    // test data
    let action = addNewExpenses({ expensesName: "кастомное название", moneySpend: 0, id: 8, icon: "https://i.ibb.co/587QCcb/1.png", bgColor: '#dddddd' })

    // action 
    let newState = itemsExpensesReducer(initialState, action)

    it('state length should be incremented by 1', () => {

        // expectation
        expect(newState.itemsExpenses.length).toBe(9)
    })

    it('money spend should be 0 ever in new expenses item', () => {

        // expectation
        expect(newState.itemsExpenses[8].moneySpend).toBe(0)
    })

    it('icon and background color should be default', () => {

        // expectation
        expect(newState.itemsExpenses[8].icon).toBe("https://i.ibb.co/587QCcb/1.png")
        expect(newState.itemsExpenses[8].bgColor).toBe("#dddddd")
    })


})

describe('test for adding an amount for a certain category of expenses', () => {
    // test data
    let action = inputExpenseSum(0, 777)

    // action 
    let newState = itemsExpensesReducer(initialState, action)

    it('the amount must increase by the specified number of units (in the right category)', () => {

        // expectation
        expect(newState.itemsExpenses[0].moneySpend).toBe(787)
    })



})
