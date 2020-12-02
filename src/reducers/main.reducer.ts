/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import { combineReducers } from "redux";

import user from "./user/user.reducer";
import movie from "./movie/movie.reducer";

const rootReducer = () =>
  combineReducers({
    user,
    movie,
  });

export default rootReducer;
