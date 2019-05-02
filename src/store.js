import promiseMiddleware from 'redux-promise-middleware';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import budgetReducer from './ducks/budgetReducer';
import userReducer from './ducks/userReducer';

const rootReducer = combineReducers({ budget: budgetReducer, user: userReducer })

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));