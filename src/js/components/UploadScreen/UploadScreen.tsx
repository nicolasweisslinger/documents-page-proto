import * as React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import blinkIDScanner from '../blinkid/blinkIDScanner';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {ReactNativeFile} from 'apollo-upload-client';
import {useCreateDocumentsFromMicroblinkResultMutation} from '../../../gql/useCreateDocumentsFromMicroblinkResultMutation';
import {useCreateDocumentMutation} from '../../../gql/useCreateDocumentMutation';
import {DocumentType, SessionDeviceTypeEnum} from '../../../../globalTypes';
import {useLoginWithPasswordMutation} from '../../../gql/useLoginWithPasswordMutation';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {ApolloClient, NormalizedCacheObject} from 'apollo-boost';

type ComponentProps = {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  token: string | null;
  documentsClient: ApolloClient<NormalizedCacheObject>;
};
const Component: React.FunctionComponent<ComponentProps> = ({
  setToken,
  token,
  documentsClient,
}) => {
  const [selectedDocumentType, setSelectedDocumentType] = useState<string>(
    DocumentType.PROOF_OF_ADDRESS,
  );

  const documentTypes = [
    DocumentType.PROOF_OF_ADDRESS,
    //In the ID document flow, users should only be able to upload the types below
    //(Driver's license has to be added to the designs)
    DocumentType.DRIVERS_LICENSE,
    DocumentType.IDENTITY_CARD,
    DocumentType.PASSPORT,
    DocumentType.RESIDENCE_PERMIT,
  ];

  const [
    loginWithPassword,
    {loading: loadingLogin},
  ] = useLoginWithPasswordMutation({
    onCompleted: (data) => {
      setToken(data.loginWithPassword);
    },
  });

  const [
    createDocumentsFromMicroBlinkResult,
    {loading: microBlinkLoading, error: microBlinkError},
  ] = useCreateDocumentsFromMicroblinkResultMutation({client: documentsClient});

  const [
    createDocument,
    {loading: uploadLoading, error: uploadError},
  ] = useCreateDocumentMutation({client: documentsClient});

  const login = () => {
    loginWithPassword({
      variables: {
        passwordData: {email: 'le-pinard@gmail.com', password: 'azertyui'},
        session: {device_type: SessionDeviceTypeEnum.JOB_BOARD},
      },
    });
  };

  const scan = async (recognizer: string) => {
    try {
      const scanResults = await blinkIDScanner(recognizer);
      await createDocumentsFromMicroBlinkResult({
        // microblink returns an array of results in the case you use multiple recognizers (we only use one)
        variables: {mbResult: scanResults[0]},
      }).catch(console.log);
    } catch {}
  };

  const upload = (response: ImagePickerResponse) => {
    if (!response.uri) {
      return;
    }
    //If the user wants to upload a passport or a proof of address, only prompt a front upload. Otherwise prompt both.
    const file1 = new ReactNativeFile({
      uri: response.uri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });
    const file2 = new ReactNativeFile({
      uri: response.uri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });
    createDocument({
      variables: {
        front_file: file1,
        back_file: file2,
        type: selectedDocumentType as DocumentType,
      },
    });
  };

  const takePhoto = () => {
    //Ideally, we want to keep the file size under 1mb
    launchCamera({mediaType: 'photo', quality: 0.3}, upload);
  };
  const uploadPhoto = () => {
    //Ideally, we want to keep the file size under 1mb
    launchImageLibrary({mediaType: 'photo', quality: 0.3}, upload);
  };

  return token ? (
    <View style={styles.centeredView}>
      {(microBlinkError || uploadError) && (
        <View style={styles.error}>
          <Text style={styles.textStyle}>
            There was an error. Please try again.
          </Text>
        </View>
      )}
      {(microBlinkLoading || uploadLoading) && (
        <View style={styles.loading}>
          <Text style={styles.textStyle}>Loading...</Text>
        </View>
      )}
      <TouchableHighlight
        style={{
          ...styles.openButton,
          marginTop: 20,
        }}
        onPress={() => {
          scan('blinkIDCombinedRecognizer');
        }}>
        <Text style={styles.textStyle}>Scan my document</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          ...styles.openButton,
          marginTop: 50,
        }}
        onPress={takePhoto}>
        <Text style={styles.textStyle}>Take photo</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          ...styles.openButton,
          marginTop: 20,
        }}
        onPress={uploadPhoto}>
        <Text style={styles.textStyle}>Upload photo</Text>
      </TouchableHighlight>
      <Picker
        selectedValue={selectedDocumentType}
        style={{height: 56, width: '100%', marginTop: 16}}
        onValueChange={(itemValue, _) => {
          if (typeof itemValue === 'string') {
            setSelectedDocumentType(itemValue);
          }
        }}>
        {documentTypes.map((el, i) => (
          <Picker.Item label={el} value={el} key={i} />
        ))}
      </Picker>
      <TouchableHighlight
        style={{
          ...styles.openButton,
          marginTop: 50,
        }}
        onPress={() => setToken(null)}>
        <Text style={styles.textStyle}>Logout</Text>
      </TouchableHighlight>
    </View>
  ) : (
    <View style={styles.centeredView}>
      <TouchableHighlight
        style={{
          ...styles.openButton,
          marginTop: 20,
        }}
        onPress={login}>
        <Text style={styles.textStyle}>
          {loadingLogin ? 'Loading...' : 'Login'}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    flex: 1,
    height: 56,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 16,
  },
  error: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 8,
    marginBottom: 50,
    width: '100%',
  },
  loading: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 8,
    marginBottom: 50,
    width: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    padding: 16,
  },
  openButton: {
    backgroundColor: '#03A9F4',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 56,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 4,
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageResult: {
    flex: 1,
    flexShrink: 1,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
});

export default Component;
