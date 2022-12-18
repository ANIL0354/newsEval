/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import OfflineNotice from './src/components/offlineNotice';
import Home from './src/homeScreen';
import {useNetInfo} from '@react-native-community/netinfo';

const App: () => Node = () => {
  const netInfo = useNetInfo();
  const isDarkMode = useColorScheme() === 'dark';
  const isNotConnected =
    netInfo.type !== 'unknown' && netInfo.isInternetReachable === false;

  return (
    <SafeAreaView style={{flex: 1}}>
      {isNotConnected ? <OfflineNotice /> : <Home />}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </SafeAreaView>
  );
};

export default App;
