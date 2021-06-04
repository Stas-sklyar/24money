import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../redusers/rootReducer"
import s from "./itemsExpenses.module.scss"

import AddExpenses from './AddExpenses/AddExpenses'
import MainDiagram from './MainDiagram/MainDiagram'
import AddExpensesWindow from './AddExpensesWindow/AddExpensesWindow'
import { toggleAddExpensesWindow, toggleInputExpenseAmountWindow } from '../../actions/actions'
import InputOfExpenseAmount from './InputOfExpenseAmount/InputOfExpenseAmount'
import { ItemsExpensesType } from '../../redusers/itemsExpensesReducer'
import AddIncomesWindow from '../AddIncomesWindow/AddIncomesWindow'
import HistoryWindow from '../historyWindow/historyWindow'

const ItemsExpenses: React.FC = () => {
    const dispatch = useDispatch()

    const [curentItemForAddSum, setCurentItemForAddSum] = useState(0);
    const [curentCategoryForHistory, setCurentCategory] = useState('');

    const itemsExpenses = useSelector((state: RootState) => state.itemsExpenses.itemsExpenses)
    const addExpensesIsOpen = useSelector((state: RootState) => state.addExpensesIsOpen.addExpensesIsOpen)
    const inputExpenseAmountIsOpen = useSelector((state: RootState) => state.inputExpenseAmountWindow.inputExpenseAmountWindow)
    const incomeWindowIsOpen = useSelector((state: RootState) => state.incomesWindow.isOpen)
    const historyWindowIsOpen = useSelector((state: RootState) => state.historyWindow.isOpen)

    const handlerForExpensesItem = (id: number, category: string) => {
        setCurentItemForAddSum(id)
        setCurentCategory(category)
        dispatch(toggleInputExpenseAmountWindow(true))
    }

    return (
        <div className={s["ItemsExpenses"]} >

            {itemsExpenses.length > 0 &&
                itemsExpenses.map(({ expensesName, moneySpend, id, icon, bgColor }: ItemsExpensesType) => {
                    return (
                        <div className={s["ItemsExpenses-Item"]} key={id}>
                            <div className={s["ItemsExpenses-Name"]} >{expensesName}</div>
                            <div className={s["ItemsExpenses-WrapForIcon"]} style={{ backgroundColor: bgColor }}
                                onClick={() => handlerForExpensesItem(id, expensesName)} >
                                <img className={s["ItemsExpenses-Icon"]} src={icon} alt={"icon"} />
                            </div>
                            <div className={s["ItemsExpenses-Money"]} >
                                {moneySpend}
                                <span> ₴</span>
                            </div>
                        </div>
                    )
                })}

            {inputExpenseAmountIsOpen &&
                <InputOfExpenseAmount
                    curentItemId={curentItemForAddSum}
                    curentCategory={curentCategoryForHistory} />}

            <div className={s["ItemsExpenses-Diagram"]}>
                <MainDiagram />
            </div>

            <div onClick={() => dispatch(toggleAddExpensesWindow(true))} >
                {itemsExpenses.length < 9 && <AddExpenses />}
            </div>


            {addExpensesIsOpen && <AddExpensesWindow />}

            {incomeWindowIsOpen && <AddIncomesWindow />}

            {historyWindowIsOpen && <HistoryWindow />}

        </div >
    );
}


export default ItemsExpenses;
