import { ActionsTypes } from "../actions/actions";

export type InitialStateType = {
    isOpen: string
}

const initialState: InitialStateType = {
    isOpen: 'none',
}

export const historyWindow = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "TOGGLE_HISTORY_WINDOW":
            return { ...state, isOpen: action.payload }

        default:
            return state;
    }
};

