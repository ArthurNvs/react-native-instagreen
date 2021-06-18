import { 
    createStore, 
    combineReducers,
    compose,
    applyMiddleware
 } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import postsReducer from './reducers/postsReducer'

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
})

export default storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}