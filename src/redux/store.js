import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import allReducers from './reducers';
import allSagas from './sagas';
import { storeReset } from './middleware';

export default function configApp(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const store = configureStore({
        reducer: allReducers,
        middleware: [...getDefaultMiddleware(), ...middleware],
        preloadedState: initialState,
        enhancers: [storeReset()],
    });
    sagaMiddleware.run(allSagas);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(allReducers);
        });
    }



    return store;
}