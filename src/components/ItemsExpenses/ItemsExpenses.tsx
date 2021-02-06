import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from "../../redusers/rootReducer"
import s from "./itemsExpenses.module.scss"

import AddExpenses from './AddExpenses/AddExpenses'
import MainDiagram from './MainDiagram/MainDiagram'

const ItemsExpenses = () => {

    const itemsExpenses = useSelector((state: RootState) => state.itemsExpenses.itemsExpenses)

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

            <AddExpenses />

        </div >
    );
}


export default ItemsExpenses;
