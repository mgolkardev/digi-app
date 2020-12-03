/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import { IUserState } from "./user/IUserState";
import { IMovieState } from "./movie/IMovieState";

export interface IRootState {
  user: IUserState;
  movie: IMovieState;
}
