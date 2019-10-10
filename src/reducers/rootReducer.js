import { combineReducers } from 'redux';
import authReducer from './authReducer';
import updateReducer from './updateReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    update: updateReducer
});

export default rootReducer;