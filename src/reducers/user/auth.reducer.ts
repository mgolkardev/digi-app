/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import { AUTH_START, AUTH_END, AUTH_ERROR } from "./user.actions";
import { IUserGetState, IUserResult } from "interfaces/user/IUserState";
import * as api from "services/api.service";
import { ILogin } from "interfaces/user/ilogin.interface";

type ActionType = {
  type: string;
  data: IUserResult;
};

const initialState: IUserGetState = {
  data: { token: "", username: "" },
  fetching: false,
  done: false,
  error: false,
};

export default function (
  state = initialState,
  action: ActionType
): IUserGetState {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        fetching: true,
        done: false,
        error: false,
      };

    case AUTH_END:
      return {
        ...state,
        fetching: false,
        done: true,
        error: false,
        data: action.data,
      };

    case AUTH_ERROR:
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

export const auth = (user: ILogin, distpach: any) => {
  distpach({
    type: AUTH_START,
  });

  api
    .authAPI(user)
    .then((data: IUserResult) => {
      distpach({
        type: AUTH_END,
        data: { ...data, ...user },
      });
    })
    .catch((error: any) => {
      if (error.response && error.response.data && error.response.data.error) {
        distpach({
          type: AUTH_ERROR,
          data: { message: error.response.data.error.message },
        });
      } else {
        distpach({
          type: AUTH_ERROR,
          data: { message: "error" },
        });
      }
    });
};
