/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum DocumentCategories {
  CV = "CV",
  ID = "ID",
  OTHER = "OTHER",
  PROOF_OF_ADDRESS = "PROOF_OF_ADDRESS",
}

export enum DocumentType {
  CONSULAR_IDENTITY_CARD = "CONSULAR_IDENTITY_CARD",
  DRIVERS_LICENSE = "DRIVERS_LICENSE",
  DRIVERS_LICENSE_PUBLIC_SERVICES_CARD = "DRIVERS_LICENSE_PUBLIC_SERVICES_CARD",
  EMPLOYMENT_PASS = "EMPLOYMENT_PASS",
  FIN_CARD = "FIN_CARD",
  GREEN_CARD = "GREEN_CARD",
  IDENTITY_CARD = "IDENTITY_CARD",
  IKAD = "IKAD",
  MILITARY_IDENTITY_CARD = "MILITARY_IDENTITY_CARD",
  MULTIPURPOSE_IDENTITY_CARD = "MULTIPURPOSE_IDENTITY_CARD",
  MYKAD = "MYKAD",
  MYKAS = "MYKAS",
  MYKID = "MYKID",
  MYPR = "MYPR",
  MYTENTERA = "MYTENTERA",
  OTHER = "OTHER",
  PAN_CARD = "PAN_CARD",
  PASSPORT = "PASSPORT",
  PROFESSIONAL_IDENTITY_CARD = "PROFESSIONAL_IDENTITY_CARD",
  PROOF_OF_ADDRESS = "PROOF_OF_ADDRESS",
  PUBLIC_SERVICES_CARD = "PUBLIC_SERVICES_CARD",
  RESIDENCE_PERMIT = "RESIDENCE_PERMIT",
  RESIDENT_IDENTITY_CARD = "RESIDENT_IDENTITY_CARD",
  SOCIAL_SECURITY_CARD = "SOCIAL_SECURITY_CARD",
  TEMPORARY_RESIDENCE_PERMIT = "TEMPORARY_RESIDENCE_PERMIT",
  VISA = "VISA",
  VOTER_IDENTITY_CARD = "VOTER_IDENTITY_CARD",
  WORK_PERMIT = "WORK_PERMIT",
}

export enum DocumentVerificationDetailsEnum {
  DOCUMENT_BLURRED = "DOCUMENT_BLURRED",
  DOCUMENT_CROPPED = "DOCUMENT_CROPPED",
  DOCUMENT_DOB_MISMATCH = "DOCUMENT_DOB_MISMATCH",
  DOCUMENT_EXPIRED = "DOCUMENT_EXPIRED",
  DOCUMENT_GLARED = "DOCUMENT_GLARED",
  DOCUMENT_GREYSCALE = "DOCUMENT_GREYSCALE",
  DOCUMENT_NAME_MISMATCH = "DOCUMENT_NAME_MISMATCH",
  DOCUMENT_NOT_READABLE = "DOCUMENT_NOT_READABLE",
  DOCUMENT_TYPE_NOT_SUPPORTED = "DOCUMENT_TYPE_NOT_SUPPORTED",
  OTHER = "OTHER",
}

export enum ProviderDocumentVerificationDetailsEnum {
  DOCUMENT_ADDRESS_MISMATCH = "DOCUMENT_ADDRESS_MISMATCH",
  DOCUMENT_CORRUPT = "DOCUMENT_CORRUPT",
  DOCUMENT_COUNTRY_NOT_SUPPORTED = "DOCUMENT_COUNTRY_NOT_SUPPORTED",
  DOCUMENT_DOB_MISMATCH = "DOCUMENT_DOB_MISMATCH",
  DOCUMENT_EXPIRED = "DOCUMENT_EXPIRED",
  DOCUMENT_FAILED_COPY = "DOCUMENT_FAILED_COPY",
  DOCUMENT_FAILED_GREYSCALE = "DOCUMENT_FAILED_GREYSCALE",
  DOCUMENT_FAILED_OTHER = "DOCUMENT_FAILED_OTHER",
  DOCUMENT_FRAUDULENT = "DOCUMENT_FRAUDULENT",
  DOCUMENT_ID_COUNTRY_NOT_SUPPORTED = "DOCUMENT_ID_COUNTRY_NOT_SUPPORTED",
  DOCUMENT_ID_NUMBER_MISMATCH = "DOCUMENT_ID_NUMBER_MISMATCH",
  DOCUMENT_ID_TYPE_NOT_SUPPORTED = "DOCUMENT_ID_TYPE_NOT_SUPPORTED",
  DOCUMENT_INCOMPLETE = "DOCUMENT_INCOMPLETE",
  DOCUMENT_INVALID = "DOCUMENT_INVALID",
  DOCUMENT_MANIPULATED = "DOCUMENT_MANIPULATED",
  DOCUMENT_MISSING_BACK = "DOCUMENT_MISSING_BACK",
  DOCUMENT_MISSING_FRONT = "DOCUMENT_MISSING_FRONT",
  DOCUMENT_NAME_MISMATCH = "DOCUMENT_NAME_MISMATCH",
  DOCUMENT_NOT_READABLE = "DOCUMENT_NOT_READABLE",
  DOCUMENT_NOT_UPLOADED = "DOCUMENT_NOT_UPLOADED",
  DOCUMENT_PHOTO_MISMATCH = "DOCUMENT_PHOTO_MISMATCH",
  DOCUMENT_TOO_LARGE = "DOCUMENT_TOO_LARGE",
  DOCUMENT_TYPE_NOT_SUPPORTED = "DOCUMENT_TYPE_NOT_SUPPORTED",
  FAILED_KEYED_IDENTITY = "FAILED_KEYED_IDENTITY",
  FAILED_OTHER = "FAILED_OTHER",
}

export enum SellerDocumentVerificationDetailsEnum {
  DOCUMENT_BLURRED = "DOCUMENT_BLURRED",
  DOCUMENT_CROPPED = "DOCUMENT_CROPPED",
  DOCUMENT_DOB_MISMATCH = "DOCUMENT_DOB_MISMATCH",
  DOCUMENT_EXPIRED = "DOCUMENT_EXPIRED",
  DOCUMENT_GLARED = "DOCUMENT_GLARED",
  DOCUMENT_GREYSCALE = "DOCUMENT_GREYSCALE",
  DOCUMENT_NAME_MISMATCH = "DOCUMENT_NAME_MISMATCH",
  DOCUMENT_NON_EU = "DOCUMENT_NON_EU",
  DOCUMENT_NOT_READABLE = "DOCUMENT_NOT_READABLE",
  DOCUMENT_TYPE_NOT_SUPPORTED = "DOCUMENT_TYPE_NOT_SUPPORTED",
  OTHER = "OTHER",
}

export enum SessionDeviceTypeEnum {
  ADMIN_PANEL = "ADMIN_PANEL",
  CYPRESS = "CYPRESS",
  INTERNAL = "INTERNAL",
  JOB_BOARD = "JOB_BOARD",
  MOBILE_STAFFING_BRIGADER = "MOBILE_STAFFING_BRIGADER",
  MOBILE_STAFFING_BUSINESS = "MOBILE_STAFFING_BUSINESS",
  WORKTIME = "WORKTIME",
}

export interface CreateDeviceInput {
  token: string;
  push_enabled: boolean;
}

export interface CreateSessionInput {
  device_type: SessionDeviceTypeEnum;
  device?: CreateDeviceInput | null;
  version?: string | null;
  user_agent?: string | null;
}

export interface PasswordPassportInput {
  email: EmailAddress;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
