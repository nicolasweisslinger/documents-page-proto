import React, {FunctionComponent, useEffect} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {SessionDeviceTypeEnum} from '../../../../globalTypes';
import {useLoginWithPasswordMutation} from '../../../gql/useLoginWithPasswordMutation';

type LoginScreenProps = {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

const LoginScreen: FunctionComponent<LoginScreenProps> = ({setToken}) => {
  const [
    loginWithPassword,
    {loading: loadingLogin},
  ] = useLoginWithPasswordMutation({
    onCompleted: (data) => {
      setToken(data.loginWithPassword);
    },
  });

  const login = () => {
    loginWithPassword({
      variables: {
        passwordData: {email: 'jcvd@brigad.co', password: 'azertyui'},
        session: {device_type: SessionDeviceTypeEnum.JOB_BOARD},
      },
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        padding: 16,
      }}>
      <TouchableHighlight
        style={{
          backgroundColor: '#03A9F4',
          borderRadius: 8,
          padding: 16,
          elevation: 2,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 56,
        }}
        onPress={login}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
          }}>
          {loadingLogin ? 'Loading...' : 'Login'}
        </Text>
      </TouchableHighlight>
    </View>
  );
};
export default LoginScreen;
