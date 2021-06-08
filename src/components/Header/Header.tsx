import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHistoryWindow, toggleIncomesWindow } from '../../actions/actions';
import { RootState } from "../../redusers/rootReducer"
import s from "./Header.module.scss"

const Header = () => {
    const dispatch = useDispatch()

    const itemsExpenses = useSelector((state: RootState) => state.itemsExpenses.itemsExpenses)
    let sumExpenses = 0;
    itemsExpenses.map(({ moneySpend }) => {
        sumExpenses += moneySpend
    })

    const incomesList = useSelector((state: RootState) => state.incomesList.incomes)
    let sumIncomes = 0;
    incomesList.map(({ moneyIncome }) => {
        sumIncomes += moneyIncome
    })

    return (
        <AppBar color="default" className={s.Header}>
            <Toolbar>
                <Grid container justify="space-between"
                    alignItems="center">

                    <Grid item className={s["Header-Column"]}>
                        <span className={s["Header-Logo"]}>24Money <span>(demo)</span></span>
                        <Button
                            variant="contained"
                            color="primary"
                            className={s["Header-Btn"]}
                            onClick={() => dispatch(toggleIncomesWindow(true))}
                        >Добавить доходы</Button>

                    </Grid>

                    <Grid item className={s["Header-Column"]}>
                        <Button
                            variant="outlined"
                            className={s["Header-Btn"]}
                            color="primary"
                            onClick={() => dispatch(toggleHistoryWindow('expenses'))}
                        >История трат</Button>

                        <Button
                            variant="outlined"
                            color="primary"
                            className={s["Header-Btn"]}
                            onClick={() => dispatch(toggleHistoryWindow('incomes'))}
                        >История доходов</Button>
                        <span className={s["Header-Label"]}>Расходы: <b>-{sumExpenses}₴</b></span>
                        <span className={s["Header-Label"]}> Доходы: <b>+{sumIncomes}₴</b> </span>
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar >
    );
}

export default Header;
