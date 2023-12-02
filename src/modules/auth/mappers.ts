import { get } from "lodash";

import { IEntity } from "./types";

export const User = (item: any): IEntity.User => ({
  firstName: get(item, "first_name") || "",
  lastName: get(item, "last_name") || "",
  phone: get(item, "phone") || "",
  img: get(item, "image") || "",
  balance: get(item, "balance") || "",
  email: get(item, "email") || "",
  username: get(item, "username") || "",
  gender: get(item, "gender") || "",
  job: get(item, "job") || "",
  birthday: get(item, "birthday") || "",
  about: get(item, "about") || "",
  isActive: get(item, "is_active") || false,
  isSpiker: get(item, "is_spiker") || false,
});
