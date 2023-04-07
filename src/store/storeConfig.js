import { legacy_createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'

const reducers = combineReducers({
    user: userReducer,
})

const storeConfig = () => {
    return legacy_createStore(reducers)
}

export default storeConfig