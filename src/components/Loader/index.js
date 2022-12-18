import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const Loader = ({size = 'large', color = 'grey'}) => (
  <View style={styles.centered}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

export default Loader;
