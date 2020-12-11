import * as React from 'react';
import {ApolloClient, InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import UploadScreen from './components/UploadScreen/UploadScreen';
import StateScreen from './components/StateScreen/StateScreen';
import {createUploadLink} from 'apollo-upload-client';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './components/LoginScreen/LoginScreen';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

const App = () => {
  const [token, setToken] = useState<string | null>(null);

  const Tab = createBottomTabNavigator();

  const documentsClient = new ApolloClient({
    link: createUploadLink({
      uri: 'https://services.brigad.tools/env-514/documents/graphql',
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    }),
    cache: new InMemoryCache(),
  });

  const gatewayClient = new ApolloClient({
    link: createUploadLink({
      uri: 'https://services.brigad.tools/env-514/gateway/graphql',
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    }),
    cache: new InMemoryCache(),
  });

  // const DocumentIcon = (props) => <Icon name="file-outline" {...props} />;
  // const PersonIcon = (props) => <Icon name="person-outline" {...props} />;

  const UploadScreenComponent = () => (
    <UploadScreen
      setToken={setToken}
      token={token}
      documentsClient={documentsClient}
    />
  );

  const StateScreenComponent = () => <StateScreen token={token || undefined} />;

  const BottomTabBar = ({navigation, state}) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title="UPLOAD" />
      <BottomNavigationTab title="STATE" />
    </BottomNavigation>
  );

  const TabNavigator = () => (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="UPLOAD" component={UploadScreenComponent} />
      <Tab.Screen name="STATE" component={StateScreenComponent} />
    </Tab.Navigator>
  );

  return (
    <ApolloProvider client={gatewayClient}>
      <ApplicationProvider {...eva} theme={eva.light}>
        {token ? (
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        ) : (
          <LoginScreen setToken={setToken} />
        )}
      </ApplicationProvider>
    </ApolloProvider>
  );
};

export default App;
