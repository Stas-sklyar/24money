type itemsExpensesType = {
    expensesName: string
    moneySpend: number
    id: number
    icon: string
    bgColor: string
}

const initialState = {
    itemsExpenses: [
        { expensesName: "Продукты", moneySpend: 10, id: 0, icon: "https://i.ibb.co/587QCcb/1.png", bgColor: '#FF6384' },
        { expensesName: "Кафе", moneySpend: 20, id: 1, icon: "https://i.ibb.co/K5vBxYX/2.png", bgColor: '#36A2EB' },
        { expensesName: "Досуг", moneySpend: 100, id: 2, icon: "https://i.ibb.co/DfSGjwY/3.png", bgColor: '#FFCE56' },
        { expensesName: "Транспорт", moneySpend: 5, id: 3, icon: "https://i.ibb.co/KwDCn5q/4.png", bgColor: '#FF1156' },
        { expensesName: "Здоровье", moneySpend: 45, id: 4, icon: "https://i.ibb.co/2MwCWLZ/5.png", bgColor: '#FF9E56' },
        { expensesName: "Подарки", moneySpend: 50, id: 5, icon: "https://i.ibb.co/7gHHM1r/6.png", bgColor: '#e01a4b' },
        { expensesName: "Семья", moneySpend: 20, id: 6, icon: "https://i.ibb.co/jz4N7kG/7.png", bgColor: '#197b94' },
        { expensesName: "Покупки", moneySpend: 150, id: 7, icon: "https://i.ibb.co/jrc4bwQ/8.png", bgColor: '#c2351f' },
    ] as Array<itemsExpensesType>
}

export const itemsExpensesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_EXPENSE_ITEM":
            let copyState = { ...state }
            copyState.itemsExpenses.push(action.payload)
            return copyState

        default:
            return state;
    }
};
