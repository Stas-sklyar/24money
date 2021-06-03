
import { combineReducers } from "redux";
import { addExpensesIsOpen } from "./addExpensesIsOpen";
import { addIncomesWindow } from "./addIncomesWindow";
import { incomesReducer } from "./incomesReducer";
import { inputExpenseAmountWindow } from "./inputExpenseAmountWindow";
import { itemsExpensesReducer } from "./itemsExpensesReducer"


export const rootReducer = combineReducers({
    itemsExpenses: itemsExpensesReducer,
    addExpensesIsOpen: addExpensesIsOpen,
    inputExpenseAmountWindow: inputExpenseAmountWindow,
    incomesWindow: addIncomesWindow,
    incomesList: incomesReducer,
});
export type RootState = ReturnType<typeof rootReducer>