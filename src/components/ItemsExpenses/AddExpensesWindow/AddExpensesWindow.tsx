import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import { Fade } from '@material-ui/core';

import s from './AddExpensesWindow.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redusers/rootReducer'
import { toggleAddExpensesWindow } from '../../../actions/actions'

const AddExpensesWindow = () => {
    const dispatch = useDispatch()
    const addExpensesIsOpen = useSelector((state: RootState) => state.addExpensesIsOpen.addExpensesIsOpen)

    const toggleWindowIsOpen = () => dispatch(toggleAddExpensesWindow(false))

    return (
        <>
            <div className={s["AddExpensesWindow"]}>
                <Modal className={s["AddExpensesWindow-Body"]} open={addExpensesIsOpen}>
                    <Fade in={addExpensesIsOpen} timeout={400}>
                        <div className={s["AddExpensesWindow-Box"]}>
                            <div className={s["AddExpensesWindow-CloseIcon"]}
                                onClick={() => toggleWindowIsOpen()}>
                                ✕
                        </div>
                            <h1>title1</h1>
                            <h1>title1</h1>
                            <h1>title1</h1>
                        </div>
                    </Fade>
                </Modal>
            </div>
        </>
    );
}


export default AddExpensesWindow;
