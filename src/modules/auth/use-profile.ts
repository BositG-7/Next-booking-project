import React, { Dispatch, SetStateAction, useEffect } from "react";

import { Api, Mappers, Types } from ".";
import { clearSession, getSession } from "@/services/store";

interface State {
  isLoading: boolean;
  user: Types.IEntity.User | null;
}

const useProfile = (): [State, Dispatch<SetStateAction<State>>] => {
  const { access } = getSession();
  const { refresh } = getSession();
  const [state, setState] = React.useState<State>({
    isLoading: !!access,
    user: null,
  });

  // useEffect(() => {
  //   const request = async () => {
  //     try {
  //       const { data } = await Api.Profile();

  //       setState({ user: data, isLoading: false });
  //     } catch (err: any) {
  //       clearSession();
  //       setState({ user: null, isLoading: false });
  //     }
  //   };

  //   if (access) request();
  // }, []);

  return [state, setState];
};

export default useProfile;
