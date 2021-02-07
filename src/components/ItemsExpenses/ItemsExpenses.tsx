import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../redusers/rootReducer"
import s from "./itemsExpenses.module.scss"

import AddExpenses from './AddExpenses/AddExpenses'
import MainDiagram from './MainDiagram/MainDiagram'
import AddExpensesWindow from './AddExpensesWindow/AddExpensesWindow'
import { toggleAddExpensesWindow } from '../../actions/actions'

const ItemsExpenses = () => {
    const dispatch = useDispatch()

    const itemsExpenses = useSelector((state: RootState) => state.itemsExpenses.itemsExpenses)
    const addExpensesIsOpen = useSelector((state: RootState) => state.addExpensesIsOpen.addExpensesIsOpen)


    return (
        <div className={s["ItemsExpenses"]} >

            {
                itemsExpenses.length > 0 &&
                itemsExpenses.map(({ expensesName, moneySpend, id, icon, bgColor }: any) => {
                    return (
                        <div className={s["ItemsExpenses-Item"]} key={id}>
                            <div className={s["ItemsExpenses-Name"]} >{expensesName}</div>
                            <div className={s["ItemsExpenses-WrapForIcon"]} style={{ backgroundColor: bgColor }} >
                                <img className={s["ItemsExpenses-Icon"]} src={icon} alt={"icon"} />
                            </div>
                            <div className={s["ItemsExpenses-Money"]} >
                                {moneySpend}
                                <span> ₽</span>
                            </div>
                        </div>
                    )
                })
            }

            <div className={s["ItemsExpenses-Diagram"]}>
                <MainDiagram />
            </div>

            <div onClick={() => dispatch(toggleAddExpensesWindow(true))} >
                {
                    itemsExpenses.length < 10 &&
                    <AddExpenses />
                }
            </div>

            <div>
                {
                    addExpensesIsOpen &&
                    <AddExpensesWindow />
                }
            </div>

        </div >
    );
}


export default ItemsExpenses;
