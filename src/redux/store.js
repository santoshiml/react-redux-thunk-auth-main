import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import airlineReducer from '../redux/reducers/airlineReducer';
import loginReducer from '../redux/reducers/loginReducer';

const reducer = combineReducers({
    airlines: airlineReducer,
    user: loginReducer,
});
const store = createStore(
  reducer, applyMiddleware(thunk)
)

export default store;