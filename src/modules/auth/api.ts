/* eslint-disable no-useless-catch */

import http from "@/services/http";
import { IApi } from "./types";
import { objectToFormData } from "@/utils";
import axios from "axios";

export const Login = ({ ...params }: IApi.Login.Request) =>
  http.post<IApi.Login.Response>(
    "/api/v1/user/login/",
    objectToFormData({ ...params })
  );
export const Register = ({ ...params }: IApi.Register.Request) =>
  axios.post<IApi.Login.Response>("https://0001.uz/signup", { ...params });
