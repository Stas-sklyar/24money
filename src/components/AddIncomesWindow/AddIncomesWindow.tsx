import React, { useState } from 'react'
import { Fade, TextField, Button, Modal } from '@material-ui/core'

import s from '../GeneralStylesForModalWindows.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redusers/rootReducer'
import { addIncome, addIncomesHistoryItem, toggleIncomesWindow } from '../../actions/actions'

const AddIncomesWindow: React.FC = () => {
    const dispatch = useDispatch()

    const incomesList = useSelector((state: RootState) => state.incomesList.incomes)
    const incomeWindowIsOpen = useSelector((state: RootState) => state.incomesWindow.isOpen)

    const [sumIncome, setSumIncome] = useState('');
    const handleChangeForSum = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSumIncome(e.target.value)
    };

    const [commentIncome, setCommentIncome] = useState('');
    const handleChangeForComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentIncome(e.target.value)
    }

    const addIncomeHandler = () => {
        if (parseInt(sumIncome) <= 0 || isNaN(parseInt(sumIncome))) {
            alert("Введите сумму больше нуля")
        }
        else if (parseInt(sumIncome) > 1000000) {
            alert("Слишком большая сумма")
        }
        else {
            let date = new Date()
            let month = date.getMonth() + 1

            let dateNewFormat = "" + date.getDate() + " " + month + " " + date.getFullYear()

            dispatch(addIncome({ moneyIncome: parseInt(sumIncome), id: incomesList.length, comment: commentIncome }))
            dispatch(addIncomesHistoryItem(parseInt(sumIncome), commentIncome, incomesList.length, dateNewFormat))
            dispatch(toggleIncomesWindow(false))
        }

    }


    return (
        <div className={s["AddExpensesWindow"]}
            onKeyPress={(e) => {
                if (e.key === 'Enter') { addIncomeHandler() }
            }}
            onClick={(e) => {
                if (!(e.target as Element).className) {
                    dispatch(toggleIncomesWindow(false))
                }
            }}>
            <Modal className={s["ModalWindow-Body"]} open={incomeWindowIsOpen}>
                <Fade in={incomeWindowIsOpen} timeout={400} style={{ height: 350 + "px" }} >
                    <div className={s["ModalWindow-Box"]}>
                        <div className={s["ModalWindow-CloseIcon"]}
                            onClick={() => dispatch(toggleIncomesWindow(false))}>
                            ✕
                            </div>
                        <h1 className={s["ModalWindow-Title"]}>Доход</h1>

                        <TextField id="outlined-basic" label="Введите сумму" variant="outlined"
                            fullWidth required placeholder="Сумма" margin="normal"
                            value={sumIncome}
                            onChange={handleChangeForSum} autoFocus={true}
                        />
                        <TextField id="outlined-basic" label="Введите комментарий" variant="outlined"
                            fullWidth placeholder="Комментарий" margin="normal"
                            value={commentIncome}
                            onChange={handleChangeForComment}
                        />

                        <div style={{ marginTop: "25px" }}></div>
                        <Button variant="contained" size="large" onClick={addIncomeHandler}>
                            Добавить доход
                                </Button>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}


export default AddIncomesWindow;
