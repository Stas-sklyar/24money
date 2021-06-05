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

const IncomesHistory: React.FC = () => {
    const classes = useStyles();
    const incomesHistoryArr = useSelector((state: RootState) => state.historyIncomes.historyIncomesList)
    const rows = incomesHistoryArr;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
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
                    {incomesHistoryArr.length === 0 &&
                        <h4 style={{ display: 'flex', margin: 0, padding: 10 + 'px' }}>
                            Здесь пока  ничего нету, добавьте свою первую трату
                            </h4>
                    }
                </TableBody>
            </Table>
        </TableContainer >
    );
}

export default IncomesHistory