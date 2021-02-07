
import { combineReducers } from "redux";
import { addExpensesIsOpen } from "./addExpensesIsOpen";
import { itemsExpensesReducer } from "./itemsExpensesReducer"


export const rootReducer = combineReducers({
    itemsExpenses: itemsExpensesReducer,
    addExpensesIsOpen: addExpensesIsOpen
});
export type RootState = ReturnType<typeof rootReducer>