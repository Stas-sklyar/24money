import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from "../itemsExpenses.module.scss"
import { addNewExpenses } from "../../../actions/actions"
import { RootState } from '../../../redusers/rootReducer'


const AddExpenses = () => {

    return (
        <div className={s["ItemsExpenses-Item"]}>
            <div className={s["ItemsExpenses-Name"]} >Добавить</div>
            <div className={s["ItemsExpenses-WrapForIcon"]} >
                <img className={s["ItemsExpenses-Icon"]} src={"https://i.ibb.co/gwF9wSm/plus.png"} alt={"icon"} />
            </div>
        </div>
    );
}


export default AddExpenses;
