/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */

import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";

import rootReducer from "reducers/main.reducer";

function noop() {}

// configure middlewares
let middlewares: any = [
    // logger
];
// compose enhancers
const enhancer = compose(applyMiddleware(...middlewares));

// create store
export const store = createStore(rootReducer(), enhancer);
