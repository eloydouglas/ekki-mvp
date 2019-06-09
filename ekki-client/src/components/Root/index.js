import React from 'react';
import Router from '../../router'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";

import config from '../../config';
import ekkiApp from '../../redux/reducers'
import setAuthToken from '../../utils/setAuthToken'
import rootSaga from '../../sagas'

config();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(ekkiApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
}

const Root = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Provider>
    )
}

export default Root;