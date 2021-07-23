import { createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import reducer from "./reducers/reducer";

const logMiddleware = ({getState}) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action)
}

const stringMiddleware = (state) => (dispatch) => (action) => {
    if(typeof action === 'string') {
        return dispatch({type: action})
    }
    return dispatch(action)
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware))

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(()=> dispatch({type: "DELAYED_ACTION"}), 2000)
}

store.dispatch(delayedActionCreator(3000))

export default store;