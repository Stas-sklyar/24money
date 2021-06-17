import { AppBar, Toolbar, Button, Grid, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHistoryWindow, toggleIncomesWindow } from '../../actions/actions';
import { RootState } from "../../redusers/rootReducer"
import AdaptiveMenu from './AdaptiveMenu/AdaptiveMenu';
import s from "./Header.module.scss"

const Header = () => {
    const dispatch = useDispatch()

    const [adaptiveMenuVisble, setAdaptiveMenuVisble] = useState(false)

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
        <div>
            <AppBar color="default" className={s.Header}>
                <Toolbar>
                    <Grid container justify="space-between"
                        alignItems="center">

                        <Grid item className={s["Header-Column"]}>
                            <IconButton className={s["Header-MenuBtn"]}
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={() => setAdaptiveMenuVisble(!adaptiveMenuVisble)}>
                                <MenuIcon />
                            </IconButton>
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
            {adaptiveMenuVisble && <AdaptiveMenu />}
        </div>
    );
}

export default Header;
