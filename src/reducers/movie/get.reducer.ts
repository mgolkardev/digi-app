/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import {
  GET_MOVIES_START,
  GET_MORE_MOVIES_START,
  GET_MOVIES_END,
  GET_MOVIES_ERROR,
  GET_MORE_MOVIES_ERROR,
} from "./movie.actions";
import { IMovieGetState, IMovieResult } from "interfaces/movie/IMovieState";
import * as api from "services/api.service";
import { getMoviePoster } from "utils";
import { IMovie } from "interfaces/movie/IMovie";

type ActionType = {
  type: string;
  data: IMovieResult;
};

const initialState: IMovieGetState = {
  data: { count: 0, next: "", previous: "", results: [] },
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
    case GET_MOVIES_START:
      return {
        ...state,
        fetching: true,
        done: false,
        error: false,
        data: { count: 0, next: "", previous: "", results: [] },
      };

    case GET_MORE_MOVIES_START:
      return {
        ...state,
        fetchingMore: true,
        done: false,
        error: false,
      };

    case GET_MOVIES_END:
      return {
        ...state,
        fetching: false,
        done: true,
        error: false,
        data: {
          ...action.data,
          results: [
            ...state.data.results,
            ...action.data.results.map((x: IMovie) => {
              x.poster = getMoviePoster(x.id);
              return x;
            }),
          ],
        },
      };

    case GET_MOVIES_ERROR:
      return {
        ...state,
        fetching: false,
        done: false,
        error: false,
      };

    case GET_MORE_MOVIES_ERROR:
      return {
        ...state,
        fetchingMore: false,
        done: false,
        error: false,
      };

    default:
      return state;
  }
}

export const getMovies = (
  distpach: any,
  tag: string = "",
  search: string = "",
  page: string = ""
) => {
  distpach({
    type: page ? GET_MORE_MOVIES_START : GET_MOVIES_START,
  });

  api
    .getMovieAPI(tag.toLowerCase(), search.toLowerCase(), page)
    .then((result) => result.data)
    .then((data: IMovieResult) => {
      distpach({
        type: GET_MOVIES_END,
        data,
      });
    })
    .catch((error: any) => {
      if (error.response && error.response.data && error.response.data.error) {
        distpach({
          type: GET_MOVIES_ERROR,
          data: { message: error.response.data.error.message },
        });
      } else {
        distpach({
          type: GET_MOVIES_ERROR,
          data: { message: "error" },
        });
      }
    });
};
