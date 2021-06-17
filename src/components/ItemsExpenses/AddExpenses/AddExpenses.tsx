import React from 'react'
import s from "../itemsExpenses.module.scss"


const AddExpenses: React.FC = () => {

    return (
        <div className={s["ItemsExpenses-Item"]}>
            <div className={s["ItemsExpenses-Name"]} >Добавить</div>
            <div className={s["ItemsExpenses-WrapForIcon"] + " " + s["ItemsExpenses-WrapForIcon__AddExpenseBtn"]} >
                <img className={s["ItemsExpenses-Icon"]} src={"https://i.ibb.co/gwF9wSm/plus.png"} alt={"icon"} />
            </div>
        </div>
    );
}


export default AddExpenses;
