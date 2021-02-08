import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../redusers/rootReducer"
import s from "./itemsExpenses.module.scss"

import AddExpenses from './AddExpenses/AddExpenses'
import MainDiagram from './MainDiagram/MainDiagram'
import AddExpensesWindow from './AddExpensesWindow/AddExpensesWindow'
import { toggleAddExpensesWindow } from '../../actions/actions'
import InputOfExpenseAmount from './InputOfExpenseAmount/InputOfExpenseAmount'

const ItemsExpenses = () => {
    const dispatch = useDispatch()

    const [curentItemForAddSum, setCurentItemForAddSum] = useState(0);

    const itemsExpenses = useSelector((state: RootState) => state.itemsExpenses.itemsExpenses)
    const addExpensesIsOpen = useSelector((state: RootState) => state.addExpensesIsOpen.addExpensesIsOpen)


    return (
        <div className={s["ItemsExpenses"]} >

            {itemsExpenses.length > 0 &&
                itemsExpenses.map(({ expensesName, moneySpend, id, icon, bgColor }: any) => {
                    return (
                        <div className={s["ItemsExpenses-Item"]} key={id}>
                            <div className={s["ItemsExpenses-Name"]} >{expensesName}</div>
                            <div className={s["ItemsExpenses-WrapForIcon"]} style={{ backgroundColor: bgColor }}
                                onClick={() => setCurentItemForAddSum(id)} >
                                <img className={s["ItemsExpenses-Icon"]} src={icon} alt={"icon"} />
                            </div>
                            <div className={s["ItemsExpenses-Money"]} >
                                {moneySpend}
                                <span> ₽</span>
                            </div>
                        </div>
                    )
                })}

            <InputOfExpenseAmount curentItem={curentItemForAddSum} />

            <div className={s["ItemsExpenses-Diagram"]}>
                <MainDiagram />
            </div>

            <div onClick={() => dispatch(toggleAddExpensesWindow(true))} >
                {itemsExpenses.length < 9 && <AddExpenses />}
            </div>

            {addExpensesIsOpen && <AddExpensesWindow />}

        </div >
    );
}


export default ItemsExpenses;
