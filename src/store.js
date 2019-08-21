import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import reducer from '../src/reducers'

let finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore);

export default function configureStore(initialState = { videos: [] }) {
    return finalCreateStore(reducer, initialState)
}

