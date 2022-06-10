import { combineReducers } from 'redux';
import playerReducer from './playerReducer';

const reducers = combineReducers({
    players: playerReducer
});

export default reducers;

// IMPORTANT: This exports the type of the reducer so that you can explicitly
// identify it within the application code
export type State = ReturnType<typeof reducers>