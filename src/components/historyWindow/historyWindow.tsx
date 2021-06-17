import React from 'react'
import { Fade, Modal } from '@material-ui/core'

import s from '../GeneralStylesForModalWindows.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redusers/rootReducer'
import { toggleHistoryWindow } from '../../actions/actions'
import ExpensesHistory from './ExpensesHistory/ExpensesHistory'
import IncomesHistory from './IncomesHistory/IncomesHistory'

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
            <Modal className={s["ModalWindow-Body"]} open={historyWindowIsOpen === 'expenses'}>
                <Fade in={historyWindowIsOpen === 'expenses'} timeout={400} style={{ maxHeight: 90 + 'vh', overflowY: 'auto' }} >
                    <div className={s["ModalWindow-Box"]}>
                        <div className={s["ModalWindow-CloseIcon"]}
                            onClick={() => dispatch(toggleHistoryWindow('none'))}>
                            ✕
                            </div>
                        <h1 className={s["ModalWindow-Title"]}>История трат</h1>
                        <ExpensesHistory />
                    </div>
                </Fade>
            </Modal>

            <Modal className={s["ModalWindow-Body"]} open={historyWindowIsOpen === 'incomes'}>
                <Fade in={historyWindowIsOpen === 'incomes'} timeout={400} style={{ maxHeight: 90 + 'vh', overflowY: 'auto' }} >
                    <div className={s["ModalWindow-Box"]}>
                        <div className={s["ModalWindow-CloseIcon"]}
                            onClick={() => dispatch(toggleHistoryWindow('none'))}>
                            ✕
                            </div>
                        <h1 className={s["ModalWindow-Title"]}>История доходов</h1>
                        <IncomesHistory />
                    </div>
                </Fade>
            </Modal >

        </div >
    );
}


export default HistoryWindow;
