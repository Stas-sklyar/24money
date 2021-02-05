import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import s from "./App.module.scss"
import ItemsExpenses from '../ItemsExpenses/ItemsExpenses';
import { Provider } from 'react-redux';
import { store } from "../../store"

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <div className={s.App} >
        <Container className={s["App-Body"]} maxWidth="lg" >
          <Paper className={s["App-Box"]} elevation={2} variant="outlined" >
            <ItemsExpenses />
          </Paper>
        </Container>
      </div>
    </Provider >
  );
}

export default App;
