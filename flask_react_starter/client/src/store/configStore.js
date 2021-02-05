import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let storeEnhancer;

if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = composeEnhancers(applyMiddleware(thunk));
} else {
    storeEnhancer = applyMiddleware(thunk);
}

export default function configStore(initState) {
    return createStore(
        rootReducer,
        initState,
        storeEnhancer
    )
};