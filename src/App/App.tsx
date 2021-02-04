import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import s from "./App.module.scss"

function App() {
  return (
    <>
      <CssBaseline />
      <div className={s.App} >
        <Container className={s["App-Body"]} maxWidth="lg" >
          <Paper className={s["App-Box"]} elevation={2} variant="outlined" />
        </Container>
      </div>
    </>
  );
}

export default App;
