/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_END,
  GET_CATEGORIES_ERROR,
} from "./movie.actions";
import ICategory from "interfaces/movie/ICategory";
import { ICategoryGetState } from "interfaces/movie/IMovieState";
import * as api from "services/api.service";

type ActionType = {
  type: string;
  data: ICategory[];
  item: ICategory;
};

const initialState: ICategoryGetState = {
  data: [],
  fetching: false,
  done: false,
  error: false,
};

export default function (
  state = initialState,
  action: ActionType
): ICategoryGetState {
  switch (action.type) {
    case GET_CATEGORIES_START:
      return {
        ...state,
        fetching: true,
        done: false,
        error: false,
      };

    case GET_CATEGORIES_END:
      return {
        ...state,
        fetching: false,
        done: true,
        error: false,
        data: action.data,
      };

    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        fetching: false,
        done: false,
        error: false,
      };

    default:
      return state;
  }
}

export const getCategories = (distpach: any) => {
  distpach({
    type: GET_CATEGORIES_START,
  });

  api
    .getCategoryAPI()
    .then((result) => result.data)
    .then((data: any) => {
      distpach({
        type: GET_CATEGORIES_END,
        data,
      });
    })
    .catch((error: any) => {
      if (error.response && error.response.data && error.response.data.error) {
        distpach({
          type: GET_CATEGORIES_ERROR,
          data: { message: error.response.data.error.message },
        });
      } else {
        distpach({
          type: GET_CATEGORIES_ERROR,
          data: { message: "error" },
        });
      }
    });
};
