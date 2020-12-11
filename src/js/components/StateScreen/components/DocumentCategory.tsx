import React, {FunctionComponent} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  DocumentType,
  DocumentVerificationDetailsEnum,
  ProviderDocumentVerificationDetailsEnum,
  SellerDocumentVerificationDetailsEnum,
} from '../../../../../globalTypes';
import documentErrorCodeTranslations from '../utils/documentErrorCodeTranslations';

type DocumentCategoryProps = {
  documentCategoryTitle: string;
  isDocumentCategoryNeeded: boolean;
  isDocumentCategoryPending: boolean;
  documentErrorCodes: (
    | DocumentVerificationDetailsEnum
    | ProviderDocumentVerificationDetailsEnum
    | SellerDocumentVerificationDetailsEnum
  )[];
};

const DocumentCategory: FunctionComponent<DocumentCategoryProps> = ({
  documentCategoryTitle,
  isDocumentCategoryNeeded,
  isDocumentCategoryPending,
  documentErrorCodes,
}) => {
  const getDocumentStatusTag = () => {
    if (!isDocumentCategoryNeeded) {
      return (
        <View style={styles.tagContainerVerified}>
          <Text style={styles.tagText}>Verified</Text>
        </View>
      );
    }
    if (isDocumentCategoryPending) {
      return (
        <View style={styles.tagContainerPending}>
          <Text style={styles.tagText}>Pending</Text>
        </View>
      );
    }
    if (documentErrorCodes.length) {
      return (
        <View style={styles.tagContainerFailed}>
          <Text style={styles.tagText}>Failed</Text>
        </View>
      );
    }
    return (
      <View style={styles.tagContainerRequired}>
        <Text style={styles.tagText}>Required</Text>
      </View>
    );
  };

  return (
    <View style={styles.box}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{documentCategoryTitle}</Text>
        {getDocumentStatusTag()}
      </View>
      <View style={styles.errorsContainer}>
        {!isDocumentCategoryPending &&
          documentErrorCodes.map((el) => (
            <Text style={styles.errorText}>
              {documentErrorCodeTranslations[el]}
            </Text>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 16,
    marginBottom: 32,
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    marginRight: 24,
  },
  errorsContainer: {
    padding: 16,
  },
  errorText: {
    color: 'red',
  },
  tagContainerVerified: {
    backgroundColor: 'green',
    padding: 8,
  },
  tagContainerPending: {
    backgroundColor: '#696969',
    padding: 8,
  },
  tagContainerFailed: {
    backgroundColor: 'red',
    padding: 8,
  },
  tagContainerRequired: {
    backgroundColor: 'blue',
    padding: 8,
  },
  tagText: {
    color: 'white',
  },
});
export default DocumentCategory;
