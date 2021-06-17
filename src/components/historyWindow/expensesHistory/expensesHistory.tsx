import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redusers/rootReducer';

import s from '../HistoryWindow.module.scss'


const ExpensesHistory: React.FC = () => {
    const expensesHistoryArr = useSelector((state: RootState) => state.historyExpenses.historyExpensesList)
    const rows = expensesHistoryArr;

    return (
        <TableContainer component={Paper} className={s["HistoryTable"]}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Категория</TableCell>
                        <TableCell align="left">Сумма</TableCell>
                        <TableCell align="left">Дата</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expensesHistoryArr.length > 0 &&
                        rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.category}
                                </TableCell>
                                <TableCell align="left">-{row.sum}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
            {expensesHistoryArr.length === 0 &&
                <b className={s["HistoryModal-Subtitle"]}>
                    Здесь пока  ничего нету, добавьте свою первую трату
                </b>
            }
        </TableContainer >
    );
}

export default ExpensesHistory