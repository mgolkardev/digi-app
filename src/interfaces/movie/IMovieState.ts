import { ICategory } from "./ICategory";
import { IMovie } from "./IMovie";

/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */

export interface IMovieResult {
  count: number;
  next: string;
  previous: string;
  results: IMovie[];
}

export interface IMovieGetState {
  data: IMovieResult;
  fetching: boolean;
  fetchingMore: boolean;
  done: boolean;
  error: boolean;
}

export interface ICategoryResult {
  count: number;
  next: string;
  previous: string;
  results: ICategory[];
}

export interface ICategoryGetState {
  data: ICategoryResult;
  fetching: boolean;
  done: boolean;
  error: boolean;
}

export interface IMovieState {
  get: IMovieGetState;
  last: IMovieGetState;
  category: ICategoryGetState;
}
