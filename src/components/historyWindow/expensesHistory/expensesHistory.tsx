import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redusers/rootReducer';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const ExpensesHistory: React.FC = () => {
    const classes = useStyles();
    const expensesHistoryArr = useSelector((state: RootState) => state.historyExpenses.historyExpensesList)
    const rows = expensesHistoryArr;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
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
                    {expensesHistoryArr.length === 0 &&
                        <h4 className={"SomeClass"}
                            style={{ display: 'flex', margin: 0, padding: 10 + 'px' }}>
                            Здесь пока  ничего нету, добавьте свою первую трату
                            </h4>
                    }
                </TableBody>
            </Table>
        </TableContainer >
    );
}

export default ExpensesHistory