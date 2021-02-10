
import { combineReducers } from "redux";
import { addExpensesIsOpen } from "./addExpensesIsOpen";
import { inputExpenseAmountWindow } from "./inputExpenseAmountWindow";
import { itemsExpensesReducer } from "./itemsExpensesReducer"


export const rootReducer = combineReducers({
    itemsExpenses: itemsExpensesReducer,
    addExpensesIsOpen: addExpensesIsOpen,
    inputExpenseAmountWindow: inputExpenseAmountWindow
});
export type RootState = ReturnType<typeof rootReducer>