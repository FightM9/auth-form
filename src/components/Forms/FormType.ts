export type LoginFormState = {
  name: string;
  password: string;
  savePasword: boolean;
};

export interface LoginFormProps {
  setUserData: (data: LoginFormState) => void;
  loading?: boolean;
}

export interface InputProps {
  readonly error?: boolean;
}
