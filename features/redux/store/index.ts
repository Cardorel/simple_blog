import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import {rootReducer} from '../post/combine'

// Note: this API requires redux@>=3.1.0
export const store = createStore(rootReducer , applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;