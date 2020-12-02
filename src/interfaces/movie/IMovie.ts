/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
export default interface IMovie {
  id: number;
  email: string;
  name: string;
}
export interface IMovieFilterabale extends IMovie {
  status: number[];
}
