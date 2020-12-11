/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PasswordPassportInput, CreateSessionInput } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: loginWithPassword
// ====================================================

export interface loginWithPassword {
  loginWithPassword: string;
}

export interface loginWithPasswordVariables {
  passwordData: PasswordPassportInput;
  session: CreateSessionInput;
}
