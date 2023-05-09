import { compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../reducers/rootReducer";
import createSagaMiddleware from '@redux-saga/core'

export const createAppStore = () => {
    let store = createStore(rootReducer, composeWithDevTools())

    return store;
}

export const createAppAsyncStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    let store = createStore(
        rootReducer,
        compose(),
        composeWithDevTools())

    return store;
}