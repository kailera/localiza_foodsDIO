import { createStore } from "redux";

// single source of truth

import rootReducer from './reducers';

const store = createStore(rootReducer)

export default store;