import React from 'react';
import Router from '../../router'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ekkiApp from '../../redux/reducers'

const store = createStore(ekkiApp);


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