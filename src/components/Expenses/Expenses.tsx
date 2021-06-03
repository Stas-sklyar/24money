import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import s from "./Expenses.module.scss"
import ItemsExpenses from '../ItemsExpenses/ItemsExpenses';

const Expenses = () => {
  return (
    <>
      <CssBaseline />
      <div className={s.Expenses} >
        <Container className={s["Expenses-Body"]} maxWidth="lg" >
          <Paper className={s["Expenses-Box"]} elevation={2} variant="outlined" >
            <ItemsExpenses />
          </Paper>
        </Container>
      </div>
    </>
  );
}

export default Expenses;
