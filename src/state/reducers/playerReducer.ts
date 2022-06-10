import { Action } from '../actions/index';
import { ActionType } from '../action-types/index';
import { Player } from '../../types';

const initialState = [
    {
        id: 1,
        playerName: 'Kyle',
        wins: 2,
        losses: 0,
        totalGamesPlayed: 0
    },
    {
        id: 2,
        playerName: 'Emily',
        wins: 8,
        losses: 0,
        totalGamesPlayed: 0
    }
];

const reducer = (state: Player[] = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.CHANGENAME:
            let res;
            res = JSON.parse(JSON.stringify(state));
            res[0].playerName = action.payload[0];
            res[1].playerName = action.payload[1];
            return res;
        case ActionType.PLAYERWIN:
            let res2;
            res2 = JSON.parse(JSON.stringify(state));
            res2[action.payload].wins++;
            res2[action.payload].totalGamesPlayed++;
            return res2;
        default:
            return state;
    }
}

export default reducer;