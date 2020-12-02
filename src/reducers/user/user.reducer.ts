/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */

import { combineReducers } from "redux";

import auth from "./auth.reducer";
import IUserState from "interfaces/user/IUserState";

const purchaseReducer = combineReducers<IUserState>({
  auth,
});

export default purchaseReducer;
