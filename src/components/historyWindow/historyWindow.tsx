import React from 'react'
import { Fade, Modal } from '@material-ui/core'

import s from '../ItemsExpenses/AddExpensesWindow/AddExpensesWindow.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redusers/rootReducer'
import { toggleHistoryWindow } from '../../actions/actions'
import ExpensesHistory from './expensesHistory/expensesHistory'
import IncomesHistory from './incomesHistory/incomesHistory'

const HistoryWindow: React.FC = () => {
    const dispatch = useDispatch()

    const historyWindowIsOpen = useSelector((state: RootState) => state.historyWindow.isOpen)

    return (
        <div className={s["AddExpensesWindow"]}
            onClick={(e) => {
                if (!(e.target as Element).className) {
                    dispatch(toggleHistoryWindow('none'))
                }
            }}
        >
            <Modal className={s["AddExpensesWindow-Body"]} open={historyWindowIsOpen === 'expenses'}>
                <Fade in={historyWindowIsOpen === 'expenses'} timeout={400} style={{ height: 'auto', width: 800 + 'px' }} >
                    <div className={s["AddExpensesWindow-Box"]}>
                        <div className={s["AddExpensesWindow-CloseIcon"]}
                            onClick={() => dispatch(toggleHistoryWindow('none'))}>
                            ✕
                            </div>
                        <h1 className={s["AddExpensesWindow-Title"]}>История трат</h1>
                        <ExpensesHistory />
                    </div>
                </Fade>
            </Modal>

            <Modal className={s["AddExpensesWindow-Body"]} open={historyWindowIsOpen === 'incomes'}>
                <Fade in={historyWindowIsOpen === 'incomes'} timeout={400} style={{ height: 'auto', width: 800 + 'px' }} >
                    <div className={s["AddExpensesWindow-Box"]}>
                        <div className={s["AddExpensesWindow-CloseIcon"]}
                            onClick={() => dispatch(toggleHistoryWindow('none'))}>
                            ✕
                            </div>
                        <h1 className={s["AddExpensesWindow-Title"]}>История доходов</h1>
                        <IncomesHistory />
                    </div>
                </Fade>
            </Modal>

        </div>
    );
}


export default HistoryWindow;
