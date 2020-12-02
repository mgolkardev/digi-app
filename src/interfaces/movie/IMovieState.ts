/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
export interface IMovieGetState {
  data: any;
  fetching: boolean;
  fetchingMore: boolean;
  done: boolean;
  error: boolean;
}

export interface ICategoryGetState {
  data: any;
  fetching: boolean;
  done: boolean;
  error: boolean;
}

export default interface IMovieState {
  get: IMovieGetState;
  last: IMovieGetState;
  category: ICategoryGetState;
}
