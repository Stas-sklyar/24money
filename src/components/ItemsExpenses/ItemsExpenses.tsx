import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from "../../redusers/rootReducer"
import s from "./itemsExpenses.module.scss"

import icon from "../../img/expenses/3.png"
import AddExpenses from './AddExpenses/AddExpenses'

import { Doughnut } from 'react-chartjs-2';

const ItemsExpenses = () => {
    const data = {
        labels: [
            '',
            '',
            ''
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };


    const itemsExpenses = useSelector((state: RootState) => state.itemsExpenses.itemsExpenses)

    return (
        <div className={s["ItemsExpenses"]} >
            {/* {
                itemsExpenses.length > 0 &&
                itemsExpenses.map(({ expensesName, moneySpend, id, icon }: any) => {
                    return (
                        <div className={s["ItemsExpenses-Item"]} id={id}>
                            <div className={s["ItemsExpenses-Name"]} >{expensesName}</div>
                            <div className={s["ItemsExpenses-WrapForIcon"]} >
                                <img className={s["ItemsExpenses-Icon"]} src={icon} alt={"icon"} />
                            </div>
                            <div className={s["ItemsExpenses-Money"]} >
                                {moneySpend}
                                <span> ₽</span>
                            </div>
                        </div>
                    )
                })
            } */}

            <Doughnut data={data} width={500} height={160} />
            <AddExpenses />


        </div >
    );
}


export default ItemsExpenses;
