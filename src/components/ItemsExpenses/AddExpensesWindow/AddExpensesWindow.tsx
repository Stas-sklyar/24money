import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import { Fade } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'

import s from '../../GeneralStylesForModalWindows.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redusers/rootReducer'
import { addNewExpenses, toggleAddExpensesWindow } from '../../../actions/actions'

const AddExpensesWindow: React.FC = () => {
    const dispatch = useDispatch()

    const itemsExpenses = useSelector((state: RootState) => state.itemsExpenses.itemsExpenses)
    const addExpensesIsOpen = useSelector((state: RootState) => state.addExpensesIsOpen.addExpensesIsOpen)

    const [inputExpensesName, setInputExpensesName] = useState('');
    const handleChangeForName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputExpensesName(e.target.value);
    };

    const addExpenses = () => {
        if (inputExpensesName.length > 3) {
            dispatch(addNewExpenses({ expensesName: inputExpensesName, moneySpend: 0, id: itemsExpenses.length, icon: "https://i.ibb.co/587QCcb/1.png", bgColor: '#dddddd' }))
            dispatch(toggleAddExpensesWindow(false))
        }
        else {
            alert("Слишком короткое название! ")
        }

    }


    return (
        <div className={s["AddExpensesWindow"]}
            onKeyPress={(e) => {
                if (e.key === 'Enter') { addExpenses() }
            }}
            onClick={(e) => {
                if (!(e.target as Element).className) {
                    dispatch(toggleAddExpensesWindow(false))
                }
            }}>
            <Modal className={s["ModalWindow-Body"]} open={addExpensesIsOpen}>
                <Fade in={addExpensesIsOpen} timeout={400}>
                    <div className={s["ModalWindow-Box"]}>
                        <div className={s["ModalWindow-CloseIcon"]}
                            onClick={() => dispatch(toggleAddExpensesWindow(false))}>
                            ✕
                            </div>
                        <h1 className={s["ModalWindow-Title"]}>Введите название категории</h1>
                        <TextField id="outlined-basic" label="Введите название" variant="outlined"
                            fullWidth required placeholder="Например: Хобби" margin="normal"
                            value={inputExpensesName}
                            onChange={handleChangeForName} autoFocus={true}
                        />

                        <div style={{ marginTop: "25px" }}></div>
                        <Button variant="contained" size="large" onClick={addExpenses}>
                            Добавить категорию
                                </Button>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}


export default AddExpensesWindow;
