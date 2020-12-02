/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
export interface IUserGetState {
  data: any;
  fetching: boolean;
  done: boolean;
  error: boolean;
}

export default interface IUserState {
  auth: IUserGetState;
}
