
import { combineReducers } from "redux";
import { itemsExpensesReducer } from "./itemsExpensesReducer"


export const rootReducer = combineReducers({
    itemsExpenses: itemsExpensesReducer,
});
export type RootState = ReturnType<typeof rootReducer>