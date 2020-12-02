/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */

import axios from "axios";
import NetInfo from "@react-native-community/netinfo";
import * as AxiosLogger from "axios-logger";

import ILogin from "interfaces/user/ILogin";
import Toast from "react-native-toast-message";

import { saveToken, readToken } from "utils";

const getAxios = async () => {
  const instance = axios.create({
    baseURL: "https://imdb.hriks.com",
    headers: {
      "Content-Type": "application/json",
      Authorization: await readToken(),
    },
    timeout: 60 * 1000,
  });
  // instance.interceptors.request.use(AxiosLogger.requestLogger);
  instance.interceptors.request.use(
    (req) => {
      return NetInfo.fetch().then((state) => {
        if (!state.isConnected) {
          showToast({ message: "Check your internet connection!" });
        }
        return req;
      });
    },
    (err) => {
      showToast(err.request.data);
    }
  );

  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      showToast(err.response.data);
    }
  );
  return instance;
};

const showToast = (err: any) => {
  console.log("err", err);

  if (err instanceof Object) {
    Object.values(err).forEach((item: any) => {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: item,
      });
    });
  } else {
    Toast.show({
      type: "error",
      position: "bottom",
      text1: err.message,
    });
  }
};

const URLs = {
  Auth: `/user/auth-token`,
  Movie: `/movie`,
  Category: `/category`,
};

export const authAPI = (user: ILogin) => {
  return getAxios().then((axios) =>
    axios.post(URLs.Auth, user).then((response) => {
      if (response.data.token) {
        saveToken(response.data.token);

        axios.interceptors.request.use(function (config) {
          const token = response.data.token;
          config.headers.Authorization = token;

          return config;
        });
      }

      return response.data;
    })
  );
};

export const getMovieAPI = (
  tags: string = "",
  search: string = "",
  page: string = ""
) => {
  return getAxios().then((axios) => {
    if (page) return axios.get(page);
    return axios.get(URLs.Movie, { params: { tags, search } });
  });
};

export const getCategoryAPI = () => {
  return getAxios().then((axios) => axios.get(URLs.Category));
};
