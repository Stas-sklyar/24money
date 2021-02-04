import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "../../redusers/rootReducer"

const ItemsExpenses = () => {

    const itemsExpenses = useSelector((state: RootState) => state.itemsExpenses.itemsExpenses)
    console.log(itemsExpenses)
    return (
        <div>
            {itemsExpenses.length > 0 &&
                itemsExpenses.map(({ expensesName, moneySpend, id }: any) => {
                    return (
                        <span id={id}>{expensesName}</span>
                    )
                })
            }
        </div>
    );
}


export default ItemsExpenses;
