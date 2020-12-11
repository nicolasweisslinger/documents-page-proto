import React, {FunctionComponent} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {getUserIdFromToken} from '../../../../utils';
import {useBrigaderQuery} from '../../../gql/useBrigaderQuery';
import {Button} from '@ui-kitten/components';
import {
  DocumentCategories,
  DocumentVerificationDetailsEnum,
  ProviderDocumentVerificationDetailsEnum,
  SellerDocumentVerificationDetailsEnum,
} from '../../../../globalTypes';
import documentErrorCodeTranslations from './utils/documentErrorCodeTranslations';
import DocumentCategory from './components/DocumentCategory';

type StateScreenProps = {token?: string};

const StateScreen: FunctionComponent<StateScreenProps> = ({token}) => {
  const {brigader, refetch} = useBrigaderQuery({
    variables: {id: getUserIdFromToken(token as string)},
    skip: !token,
  });

  console.log(getUserIdFromToken(token as string));

  console.log(JSON.stringify(brigader));

  const documentsNeeded =
    (brigader && 'documents_needed' in brigader && brigader.documents_needed) ||
    [];
  const documentErrors =
    (brigader && 'document_errors' in brigader && brigader.document_errors) ||
    [];
  const providerDocumentErrors =
    (brigader &&
      'provider_document_errors' in brigader &&
      brigader.provider_document_errors) ||
    [];
  const sellerDocumentErrors =
    (brigader &&
      'seller_document_errors' in brigader &&
      brigader.seller_document_errors) ||
    [];
  const lastDocumentsPending =
    (brigader &&
      'last_documents_pending' in brigader &&
      brigader.last_documents_pending) ||
    [];

  //////////////////////////////////////////////////
  // ID VERIFICATION STATE ////////////////////////
  //////////////////////////////////////////////////
  const isIdRequired = documentsNeeded?.some(
    (el) => el.category === DocumentCategories.ID,
  );

  const isIdPending = lastDocumentsPending?.some(
    (el) => el === DocumentCategories.ID,
  );

  // Use this data in the id type selection (useless if using microblink)
  const acceptedDocumentTypesForId = documentsNeeded.find(
    (el) => el.category === DocumentCategories.ID,
  )?.types;

  const idErrorCodes = [
    documentErrors?.find((el) => el.category === DocumentCategories.ID)?.errors,
    providerDocumentErrors.find((el) => el.category === DocumentCategories.ID)
      ?.errors,
    sellerDocumentErrors.find((el) => el.category === DocumentCategories.ID)
      ?.errors,
  ].filter(Boolean) as (
    | DocumentVerificationDetailsEnum
    | SellerDocumentVerificationDetailsEnum
    | ProviderDocumentVerificationDetailsEnum
  )[];
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  ///PROOF OF ADDRESS VERIFICATION STATE ///////////
  //////////////////////////////////////////////////
  const isProofOfAddressRequired = documentsNeeded?.some(
    (el) => el.category === DocumentCategories.PROOF_OF_ADDRESS,
  );

  const isProofOfAddressPending = lastDocumentsPending?.some(
    (el) => el === DocumentCategories.PROOF_OF_ADDRESS,
  );

  // Use this data in the id type selection (useless if using microblink)
  const acceptedDocumentTypesForProofOfAddress = documentsNeeded.find(
    (el) => el.category === DocumentCategories.PROOF_OF_ADDRESS,
  )?.types;

  const proofOfAddressErrorCodes = [
    documentErrors?.find(
      (el) => el.category === DocumentCategories.PROOF_OF_ADDRESS,
    )?.errors,
    providerDocumentErrors.find(
      (el) => el.category === DocumentCategories.PROOF_OF_ADDRESS,
    )?.errors,
    sellerDocumentErrors.find(
      (el) => el.category === DocumentCategories.PROOF_OF_ADDRESS,
    )?.errors,
  ].filter(Boolean) as (
    | DocumentVerificationDetailsEnum
    | SellerDocumentVerificationDetailsEnum
    | ProviderDocumentVerificationDetailsEnum
  )[];
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  // Some errors from Stripe may concern both id and proof of address
  // (ie name mismatch / address mismatch). These errors need to be displayed outside
  // the scope of the id and proof of address, such as a flag below (see with Mathieu)
  const globalErrorCode = providerDocumentErrors.find(
    (el) => el.category === DocumentCategories.OTHER,
  )?.errors;
  //////////////////////////////////////////////////

  return (
    <View style={styles.box}>
      <View style={styles.reloadButton}>
        <Button onPress={() => refetch()} appearance="outline">
          Reload
        </Button>
      </View>
      <DocumentCategory
        documentCategoryTitle="ID Document"
        isDocumentCategoryNeeded={isIdRequired}
        isDocumentCategoryPending={isIdPending}
        documentErrorCodes={idErrorCodes}
      />
      <DocumentCategory
        documentCategoryTitle="Proof of address"
        isDocumentCategoryNeeded={isProofOfAddressRequired}
        isDocumentCategoryPending={isProofOfAddressPending}
        documentErrorCodes={proofOfAddressErrorCodes}
      />
      {globalErrorCode && (
        <View>
          <Text style={styles.globalErrorCode}>
            {documentErrorCodeTranslations[globalErrorCode]}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
  },
  reloadButton: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 32,
  },
  globalErrorCode: {
    color: 'red',
  },
});

export default StateScreen;
