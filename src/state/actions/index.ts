import { ActionType } from '../action-types/index';

interface ChangeNameAction {
    type: ActionType.CHANGENAME,
    payload: String[]
}

interface PlayerWinAction {
    type: ActionType.PLAYERWIN,
    payload: number
}

export type Action = ChangeNameAction | PlayerWinAction;