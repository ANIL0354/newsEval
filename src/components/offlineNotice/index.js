import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const OfflineNotice = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Internet Connection</Text>
    </View>
  );
};

export default OfflineNotice;
