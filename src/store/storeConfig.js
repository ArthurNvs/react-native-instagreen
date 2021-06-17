import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import postsReducer from './reducers/postsReducer'

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
})

export default storeConfig = () => {
    return createStore(reducers)
}