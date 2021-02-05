type itemsExpensesType = {
    expensesName: string
    moneySpend: number
    id: number
    icon: string
}

const initialState = {
    itemsExpenses: [
        { expensesName: "Продукты", moneySpend: 0, id: 0, icon: "https://i.ibb.co/587QCcb/1.png" },
        { expensesName: "Кафе", moneySpend: 0, id: 1, icon: "https://i.ibb.co/K5vBxYX/2.png" },
        { expensesName: "Досуг", moneySpend: 0, id: 2, icon: "https://i.ibb.co/DfSGjwY/3.png" },
        { expensesName: "Транспорт", moneySpend: 0, id: 3, icon: "https://i.ibb.co/KwDCn5q/4.png" },
        { expensesName: "Здоровье", moneySpend: 0, id: 4, icon: "https://i.ibb.co/2MwCWLZ/5.png" },
        { expensesName: "Подарки", moneySpend: 0, id: 5, icon: "https://i.ibb.co/7gHHM1r/6.png" },
        { expensesName: "Семья", moneySpend: 0, id: 6, icon: "https://i.ibb.co/jz4N7kG/7.png" },
        { expensesName: "Покупки", moneySpend: 0, id: 7, icon: "https://i.ibb.co/jrc4bwQ/8.png" },
        { expensesName: "Обучение", moneySpend: 0, id: 8, icon: "https://i.ibb.co/9qQr6kL/9.png" },
    ] as Array<itemsExpensesType>
}

export const itemsExpensesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_EXPENSE_ITEM":
            return { ...state, ...action.payload }

        default:
            return state;
    }
};
