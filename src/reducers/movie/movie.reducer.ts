/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */

import { combineReducers } from "redux";

import get from "./get.reducer";
import last from "./last.reducer";
import category from "./category.reducer";
import { IMovieState } from "interfaces/movie/imoviestate.interface";

const purchaseReducer = combineReducers<IMovieState>({
  get,
  last,
  category,
});

export default purchaseReducer;
