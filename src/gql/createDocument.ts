/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DocumentType } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: createDocument
// ====================================================

export interface createDocument_createDocument {
  __typename: "Document";
  id: UUID;
}

export interface createDocument {
  createDocument: createDocument_createDocument;
}

export interface createDocumentVariables {
  front_file: Upload;
  back_file?: Upload | null;
  type: DocumentType;
  data?: JSON | null;
  expiresAt?: DateTime | null;
}
