import { compose, createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../reducers/rootReducer";
import createSagaMiddleware from "redux-saga"
import watcherSaga from "../sagas/sagas"

export const createAppStore = () => {
    let store = configureStore(rootReducer, composeWithDevTools())

    return store;
}

export const createAppAsyncStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    let store = createStore(
        rootReducer,
        compose(
            sagaMiddleware, composeWithDevTools()
        ));

    //We init the Watcher Saga
    sagaMiddleware.run(watcherSaga);

    return store;
};