import {
  DocumentVerificationDetailsEnum,
  ProviderDocumentVerificationDetailsEnum,
  SellerDocumentVerificationDetailsEnum,
} from '../../../../../globalTypes';

type ErrorTranslations = Record<
  | DocumentVerificationDetailsEnum
  | ProviderDocumentVerificationDetailsEnum
  | SellerDocumentVerificationDetailsEnum,
  string
>;

const documentErrorCodeTranslations: ErrorTranslations = {
  DOCUMENT_CORRUPT: 'The last document was not sent correctly.',
  DOCUMENT_FAILED_COPY: "The last document's quality was too poor.",
  DOCUMENT_FAILED_GREYSCALE:
    'The last document sent was black and white. Please send a color image.',
  DOCUMENT_INCOMPLETE:
    'The last document sent was cropped. Please make sure the entire document is visible on the photo.',
  DOCUMENT_NOT_READABLE:
    "The last document sent was unreadable. Please make sure the photo's quality is high enough.",
  DOCUMENT_NOT_UPLOADED: 'The last document was not sent correctly.',
  DOCUMENT_MISSING_BACK:
    "The back of your document wasn't sent. Please send the front and the back of this document.",
  DOCUMENT_MISSING_FRONT:
    "The front of your document wasn't sent. Please send the front and the back of this document.",
  DOCUMENT_TOO_LARGE: 'The last file sent was too large.',
  DOCUMENT_COUNTRY_NOT_SUPPORTED:
    'The country of issue of the last document you sent is not accepted.',
  DOCUMENT_INVALID: 'The type of the last document you sent is not accepted.',
  DOCUMENT_TYPE_NOT_SUPPORTED:
    'The type of the last document you sent is not accepted.',
  FAILED_OTHER:
    'The last document you sent was refused for an unknown reason. Please get in contact with the Brigad assistance.',
  DOCUMENT_FAILED_OTHER:
    'The last document you sent was refused for an unknown reason. Please get in contact with the Brigad assistance.',
  DOCUMENT_NAME_MISMATCH:
    'The first name / last name on the last document you sent did not match those of your Brigad account.',
  DOCUMENT_DOB_MISMATCH:
    'The date of birth on the last document you sent did not match the one on you Brigad account.',
  DOCUMENT_ADDRESS_MISMATCH:
    'The postal address on the last document you sent did not match the one on you Brigad account.',
  DOCUMENT_ID_NUMBER_MISMATCH:
    'The last document you sent was refused for an unknown reason. Please get in contact with the Brigad assistance.',
  DOCUMENT_EXPIRED: 'The last document you sent was expired.',
  DOCUMENT_FRAUDULENT:
    'The last document you sent was refused for an unknown reason. Please get in contact with the Brigad assistance.',
  DOCUMENT_ID_COUNTRY_NOT_SUPPORTED:
    'The country of issue of the last document you sent is not accepted.',
  DOCUMENT_ID_TYPE_NOT_SUPPORTED: 'This type of document is not accepted.',
  DOCUMENT_MANIPULATED:
    'The last document you sent was refused for an unknown reason. Please get in contact with the Brigad assistance.',
  DOCUMENT_PHOTO_MISMATCH:
    'The last document you sent was refused for an unknown reason. Please get in contact with the Brigad assistance.',
  DOCUMENT_BLURRED:
    'The document you have sent is unreadable because the photo is too blurry.',
  DOCUMENT_CROPPED: 'The last document you have sent is cropped.',
  DOCUMENT_GLARED:
    'The last document you have sent is unreadable because of a glare (reflection).',
  DOCUMENT_GREYSCALE:
    'The last document sent was black and white. Please send a color image.',
  DOCUMENT_NON_EU:
    'The country of issue of the last document you sent is not a country of the European Union.',
  OTHER:
    'The last document you sent was refused for an unknown reason. Please get in contact with the Brigad assistance.',
  FAILED_KEYED_IDENTITY: 'Your identity needs to be (re) verified.',
};

export default documentErrorCodeTranslations;
