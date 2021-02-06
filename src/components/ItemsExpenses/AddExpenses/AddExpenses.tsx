import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from "../itemsExpenses.module.scss"
import { addNewExpenses } from "../../../actions/actions"
import { RootState } from '../../../redusers/rootReducer'


const AddExpenses = () => {
    const itemsExpenses = useSelector((state: RootState) => state.itemsExpenses.itemsExpenses)
    const dispatch = useDispatch()

    const addExpenses = () => {
        dispatch(addNewExpenses({ expensesName: "test", moneySpend: 112, id: itemsExpenses.length, icon: "https://i.ibb.co/587QCcb/1.png", bgColor: '#000000' }))
    }

    return (
        <div className={s["ItemsExpenses-Item"]}>
            <div className={s["ItemsExpenses-Name"]} >Добавить</div>
            <div className={s["ItemsExpenses-WrapForIcon"]} onClick={addExpenses} >
                <img className={s["ItemsExpenses-Icon"]} src={"https://i.ibb.co/gwF9wSm/plus.png"} alt={"icon"} />
            </div>
        </div>
    );
}


export default AddExpenses;
