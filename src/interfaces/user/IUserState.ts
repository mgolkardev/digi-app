/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
export interface IUserResult {
  token: string;
  username: string;
}

export interface IUserGetState {
  data: IUserResult;
  fetching: boolean;
  done: boolean;
  error: boolean;
}

export interface IUserState {
  auth: IUserGetState;
}
