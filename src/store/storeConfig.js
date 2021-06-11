import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'

const reducers = combineReducers({
    user: userReducer,
})

export default storeConfig = () => {
    return createStore(reducers)
}