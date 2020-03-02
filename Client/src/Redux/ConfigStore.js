import {createStore, compose, applyMiddleware} from "../../node_modules/redux";
import createSagaMiddleware from "../../node_modules/redux-saga";
import rootSaga from "../Saga";
import rootReducer from "../Reducer";
const composeEnhances = process.env.NODE_ENV !=="production" && 
        typeof window == "object" && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
               shouldHotReload: false
        }):compose;
const sagaMidedleware = createSagaMiddleware();
const configStore = ()=>{
    const middleware = [sagaMidedleware];
    const enhancers = [applyMiddleware(...middleware)];
    const store = createStore(rootReducer, composeEnhances(...enhancers));
    sagaMidedleware.run(rootSaga);
    return store;
}

export default configStore;