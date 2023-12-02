import { config } from "@/config";
import store from "store2";
export namespace SendEmail {
  export type Request = {
    email: boolean;
  };
}
export const getSession = (): any => store.get("user") || {};

export const clearSession = () => store.remove("user")!;

export const setSession = (user: any) => store.set("user", user);

export const getSessionBooks = (): any => store.get("books") || [];

export const clearSessionBooks = () => store.remove("books")!;

export const setSessionBooks = (email: SendEmail.Request) =>
  store.set("books", email);

export const getSessionlogin = (): any => store.get("loginemail");

export const clearSessionlogin = () => store.remove("loginemail")!;

export const setSessionlogin = (email: false | true) =>
  store.set("loginemail", email);
