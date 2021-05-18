import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './reducers/rootReducers'
import thunk from 'redux-thunk'

export const store = createStore(
    rootReducers,

    // Compose lägger ihop dessa saker
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)