import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// import routerMiddleware from '';
import rootReducer from './reducers/index';

const initialState = {};

const middleware = [thunk];
// const middleware = applyMiddleware(
// 	routerMiddleware(browserHistory),
// 	thunk,
// 	authStateMiddleware
// );

const store = createStore(
    rootReducer, 
    initialState,
    compose( 
    applyMiddleware(...middleware),
    window.navigator.userAgent.includes('Chrome') ?
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__():compose,
    ),
);  

export default store;