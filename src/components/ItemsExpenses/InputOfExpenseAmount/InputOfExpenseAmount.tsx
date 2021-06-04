import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import { Fade } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Input } from '@material-ui/core';

import s from './InputOfExpenseAmount.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redusers/rootReducer'
import { addExpenseHistoryItem, inputExpenseSum, toggleInputExpenseAmountWindow } from '../../../actions/actions';

const InputOfExpenseAmount: React.FC<{ curentItemId: number, curentCategory: string }> = ({ curentItemId, curentCategory }) => {
    const dispatch = useDispatch()
    const inputExpenseAmountIsOpen = useSelector((state: RootState) => state.inputExpenseAmountWindow.inputExpenseAmountWindow)
    const expensesHistoryArr = useSelector((state: RootState) => state.historyExpenses.historyExpensesList)

    const [inputExpensesSum, setInputExpensesSum] = useState('');
    const handleChangeForSum = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputExpensesSum(e.target.value)
    }


    const addExpenses = () => {
        if (parseInt(inputExpensesSum) <= 0 || isNaN(parseInt(inputExpensesSum))) {
            alert("Введите сумму больше нуля")
        }
        else {
            dispatch(inputExpenseSum(curentItemId, parseInt(inputExpensesSum)))

            let date = new Date()
            let month = date.getMonth() + 1

            let dateNewFormat = "" + date.getDate() + " " + month + " " + date.getFullYear()
            dispatch(addExpenseHistoryItem(curentCategory, parseInt(inputExpensesSum), expensesHistoryArr.length, dateNewFormat))

            dispatch(toggleInputExpenseAmountWindow(false))
        }
    }

    return (
        <div className={s["InputOfExpenseAmount"]}
            onKeyPress={(e) => { if (e.key === 'Enter') { addExpenses() } }}
            onClick={(e) => {
                if (!(e.target as Element).className) {
                    dispatch(toggleInputExpenseAmountWindow(false))
                }
            }} >

            <Modal className={s["InputOfExpenseAmount-Body"]} open={inputExpenseAmountIsOpen}>
                <Fade in={true} timeout={400}>
                    <div className={s["InputOfExpenseAmount-Box"]}>
                        <div className={s["InputOfExpenseAmount-CloseIcon"]}
                            onClick={() => dispatch(toggleInputExpenseAmountWindow(false))}>
                            ✕
                            </div>
                        <h1 className={s["InputOfExpenseAmount-Title"]}>Введите сумму которую вы потратили</h1>

                        <Input className={s["InputOfExpenseAmount-Input"]} placeholder="Введите сумму" autoFocus={true}
                            type="number" required
                            value={inputExpensesSum} onChange={handleChangeForSum} />

                        <Button variant="contained" size="large" onClick={addExpenses}>
                            Отправить сумму
                                </Button>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}


export default InputOfExpenseAmount;
