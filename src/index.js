import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Using bootstrap to supplement the website css layout, influences the footer,header and product page. Also needs to change font through font-family here.
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//  import thunk from 'redux-thunk';
// applyMiddleware, compose,

import { combineReducers,  createStore } from 'redux';

import { Provider } from 'react-redux';
import neighborhoodReducer from './components/redux-reducers/neighborhood-reducer.js';
import propertyReducer from './components/redux-reducers/property-reducer.js';
import tierReducer from './components/redux-reducers/tier-reducer.js';
import tokenReducer from './components/redux-reducers/token-reducer.js';
import userReducer from './components/redux-reducers/user-reducer.js';


const allReducers = combineReducers({
    neighborhood: neighborhoodReducer,
    property: propertyReducer,
    tier: tierReducer,
    token: tokenReducer,
    user: userReducer
});

// const allStoreEnchancers = compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension && window.devToolsExtension()
// );

const store = createStore(
    allReducers,
    {
        neighborhood: {},
        property: {},
        tier: '',
        token: '',
        user: {}
    },
);

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Route path="/" component={App} />
            </Router>
        </Provider>
, document.getElementById('root'));    
serviceWorker();

