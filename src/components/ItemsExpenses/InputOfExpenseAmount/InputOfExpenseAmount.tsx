import React, { useState } from 'react'
import { Fade, TextField, Button, Modal } from '@material-ui/core'

import s from '../../GeneralStylesForModalWindows.module.scss'


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
        else if (parseInt(inputExpensesSum) > 1000000) {
            alert("Слишком большая сумма")
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

            <Modal className={s["ModalWindow-Body"]} open={inputExpenseAmountIsOpen}>
                <Fade in={true} timeout={400}>
                    <div className={s["ModalWindow-Box"]}>
                        <div className={s["ModalWindow-CloseIcon"]}
                            onClick={() => dispatch(toggleInputExpenseAmountWindow(false))}>
                            ✕
                            </div>
                        <h1 className={s["ModalWindow-Title"]}>Введите сумму которую вы потратили</h1>

                        <TextField className={s["ModalWindow-Input"]} id="outlined-basic"
                            label="Введите сумму" variant="outlined"
                            fullWidth autoFocus margin="normal" placeholder="Сумма"
                            value={inputExpensesSum}
                            onChange={handleChangeForSum}
                        />

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
