import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redusers/rootReducer';

import s from '../HistoryWindow.module.scss'

const IncomesHistory: React.FC = () => {
    const incomesHistoryArr = useSelector((state: RootState) => state.historyIncomes.historyIncomesList)
    const rows = incomesHistoryArr;

    return (
        <TableContainer component={Paper} className={s["HistoryTable"]}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Сумма</TableCell>
                        <TableCell align="left">Дата</TableCell>
                        <TableCell align="left">Комментарий</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {incomesHistoryArr.length > 0 &&
                        rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="left">+{row.sum}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">{row.comment}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            {incomesHistoryArr.length === 0 &&
                <b className={s["HistoryModal-Subtitle"]}>
                    Здесь пока  ничего нету, добавьте какой-нибудь "доход"
                </b>
            }
        </TableContainer >
    );
}

export default IncomesHistory