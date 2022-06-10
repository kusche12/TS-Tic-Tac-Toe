import { ActionType } from "../action-types";
import { Dispatch } from 'redux';
import { Action } from "../actions/index";

export const changeName = (names: String[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CHANGENAME,
            payload: names
        })
    }
}

export const playerWin = (playerID: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.PLAYERWIN,
            payload: playerID
        })
    }
}