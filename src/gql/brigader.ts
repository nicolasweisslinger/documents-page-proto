/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DocumentCategories, DocumentType, DocumentVerificationDetailsEnum, SellerDocumentVerificationDetailsEnum, ProviderDocumentVerificationDetailsEnum } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: brigader
// ====================================================

export interface brigader_Brigader_UncompletedBrigader {
  __typename: "UncompletedBrigader";
  id: UUID;
}

export interface brigader_Brigader_CompletedBrigader_documents_needed {
  __typename: "GroupedDocumentTypes";
  category: DocumentCategories;
  types: DocumentType[];
}

export interface brigader_Brigader_CompletedBrigader_document_errors {
  __typename: "GroupedDocumentError";
  category: DocumentCategories;
  errors: DocumentVerificationDetailsEnum;
}

export interface brigader_Brigader_CompletedBrigader_seller_document_errors {
  __typename: "SellerGroupedDocumentError";
  category: DocumentCategories;
  errors: SellerDocumentVerificationDetailsEnum;
}

export interface brigader_Brigader_CompletedBrigader_provider_document_errors {
  __typename: "ProviderGroupedDocumentError";
  category: DocumentCategories;
  errors: ProviderDocumentVerificationDetailsEnum;
}

export interface brigader_Brigader_CompletedBrigader {
  __typename: "CompletedBrigader";
  id: UUID;
  documents_needed: brigader_Brigader_CompletedBrigader_documents_needed[];
  document_errors: brigader_Brigader_CompletedBrigader_document_errors[];
  seller_document_errors: brigader_Brigader_CompletedBrigader_seller_document_errors[];
  provider_document_errors: brigader_Brigader_CompletedBrigader_provider_document_errors[];
  last_documents_pending: DocumentCategories[];
}

export type brigader_Brigader = brigader_Brigader_UncompletedBrigader | brigader_Brigader_CompletedBrigader;

export interface brigader {
  Brigader: brigader_Brigader | null;
}

export interface brigaderVariables {
  id: UUID;
}
