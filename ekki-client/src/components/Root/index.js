import React from 'react';
import Router from '../../router'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ekkiApp from '../../redux/reducers'

const store = createStore(ekkiApp, applyMiddleware(thunk));


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