/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import {
  GET_LAST_MOVIES_START,
  GET_LAST_MOVIES_END,
  GET_LAST_MOVIES_ERROR,
  ADD_LAST_MOVIE_TO_GRID,
} from "./movie.actions";
import IMovie from "interfaces/movie/IMovie";
import { IMovieGetState } from "interfaces/movie/IMovieState";
import * as api from "services/api.service";
import { getMoviePoster } from "utils";

type ActionType = {
  type: string;
  data: any;
  item: IMovie;
};

const initialState: IMovieGetState = {
  data: { results: [] },
  fetching: false,
  fetchingMore: false,
  done: false,
  error: false,
};

export default function (
  state = initialState,
  action: ActionType
): IMovieGetState {
  switch (action.type) {
    case GET_LAST_MOVIES_START:
      return {
        ...state,
        fetching: true,
        done: false,
        error: false,
      };

    case GET_LAST_MOVIES_END:
      return {
        ...state,
        fetching: false,
        done: true,
        error: false,
        data: {
          ...action.data,
          results: [
            ...action.data.results.map((x: any) => {
              x.poster = getMoviePoster(x.id);
              return x;
            }),
          ],
        },
      };

    case GET_LAST_MOVIES_ERROR:
      return {
        ...state,
        fetching: false,
        done: false,
        error: false,
      };

    case ADD_LAST_MOVIE_TO_GRID:
      return {
        ...state,
        data: [...state.data, action.item],
      };

    default:
      return state;
  }
}

export const getLastMovies = (distpach: any) => {
  distpach({
    type: GET_LAST_MOVIES_START,
  });

  api
    .getMovieAPI()
    .then((result: any) => result.data)
    .then((data: any) => {
      distpach({
        type: GET_LAST_MOVIES_END,
        data,
      });
    })
    .catch((error: any) => {
      if (error.response && error.response.data && error.response.data.error) {
        distpach({
          type: GET_LAST_MOVIES_ERROR,
          data: { message: error.response.data.error.message },
        });
      } else {
        distpach({
          type: GET_LAST_MOVIES_ERROR,
          data: { message: "error" },
        });
      }
    });
};
