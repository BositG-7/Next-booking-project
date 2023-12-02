import { GENDER, JOB } from "./constants";

export namespace IEntity {
  export interface User {
    firstName: string;
    lastName: string;
    phone: string;
    img: string | null;
    balance: string;
    email: string;
    username: string;
    gender: GENDER;
    job: JOB;
    birthday: string;
    about: string;
    isActive: boolean;
    isSpiker: boolean;
  }
  export interface Tokens {
    email: any;
    access: string;
    refresh: string;
  }
}
export namespace IForm {
  export interface Login {
    username: string;
    password: string;
  }

  export interface Register {
    name: string;
    email: string;
    key: string;
    secret: string;
  }
}

export interface IToken {
  access: string;
  refresh: string;
}

export namespace IApi {
  export namespace Register {
    export interface Request extends IForm.Register {}
    export interface Response extends IForm.Register {}
  }
  export namespace Profile {
    export interface Request {}
    export interface Response extends IEntity.User {}
  }

  export namespace Login {
    export interface Request extends IForm.Login {}
    export interface Response extends IToken {
      data: any;
    }
  }

  export namespace EditProfil {
    export type Request = {
      username: string;
      first_name?: string;
      last_name?: string;
      fullname?: string;
      password?: string;
      image?: string;
      bio?: string;
      email: string;
      gender?: "male" | "female";
      social_links?: string;
    };
    export interface Response {}
  }
}
export namespace IContext {
  export interface Auth {
    user: IEntity.User | null;
    isLoading: boolean;
    methods: {
      login: (user: IEntity.User) => void;
      logout: () => void;
    };
  }
}
