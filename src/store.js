import { createStore, applyMiddleware} from "redux";
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

// applyMiddleware - виконує функцію connect
// В Middleware, state може приймати тільки getState і dispatch
// next теж що і dispatch, позначається як наступний етап

const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware))

store.dispatch('HELLO_WORLD')

export default store;