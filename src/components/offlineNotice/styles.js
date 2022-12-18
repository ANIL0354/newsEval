import {StyleSheet} from 'react-native';
import {hp, wp, normalize} from '../../theme/responsive';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    zIndex: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: normalize(25),
  },
});

export default styles;
