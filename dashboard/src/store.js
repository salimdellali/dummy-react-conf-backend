import { createStore, applyMiddleware } from 'redux';
import { compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	/**
	 * Comment this just before pushing to production
	 */
	// to use redux tools, we need to use compose
	// compose(
	// 	applyMiddleware(...middleware),
	// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	// )
	applyMiddleware(...middleware)
);

export default store;
