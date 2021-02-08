import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import { Fade } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Input } from '@material-ui/core';

import s from './InputOfExpenseAmount.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redusers/rootReducer'
import { inputExpenseSum } from '../../../actions/actions';

const InputOfExpenseAmount = ({ curentItem }: any) => {
    const dispatch = useDispatch()

    const [inputExpensesSum, setInputExpensesSum] = useState('');
    const handleChangeForSum = (e: any) => {
        setInputExpensesSum(e.target.value)
    }


    const addExpenses = () => {
        if (parseInt(inputExpensesSum) < 1) {
            alert("Введите сумму больше нуля")
        }
        else {
            dispatch(inputExpenseSum(curentItem, parseInt(inputExpensesSum)))
        }
    }

    return (
        <>
            <div className={s["InputOfExpenseAmount"]}>
                <Modal className={s["InputOfExpenseAmount-Body"]} open={true}>
                    <Fade in={true} timeout={400}>
                        <div className={s["InputOfExpenseAmount-Box"]}>
                            <div className={s["InputOfExpenseAmount-CloseIcon"]}>
                                ✕
                            </div>
                            <h1 className={s["InputOfExpenseAmount-Title"]}>Введите сумму которую вы потратили</h1>

                            <Input className={s["InputOfExpenseAmount-Input"]} placeholder="Введите сумму" autoFocus={true} type="number" required value={inputExpensesSum} onChange={handleChangeForSum} />

                            <Button variant="contained" size="large" onClick={addExpenses}>
                                Отправить сумму
                                </Button>

                        </div>
                    </Fade>
                </Modal>
            </div>
        </>
    );
}


export default InputOfExpenseAmount;
