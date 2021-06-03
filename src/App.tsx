import { Provider } from 'react-redux';
import { store } from "./store"
import Expenses from "./components/Expenses/Expenses";
import Header from './components/Header/Header';


const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Expenses />
    </Provider >
  );
}

export default App;
