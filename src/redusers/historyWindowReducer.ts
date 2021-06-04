import { ActionsTypes } from "../actions/actions";

export type InitialStateType = {
    isOpen: boolean
}

const initialState: InitialStateType = {
    isOpen: false,
}

export const historyWindow = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "TOGGLE_HISTORY_WINDOW":
            return { ...state, isOpen: action.payload }

        default:
            return state;
    }
};

