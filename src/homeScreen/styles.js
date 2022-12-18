import {StyleSheet} from 'react-native';
import {normalize} from '../theme/responsive';

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
  noDataContainerStyle: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: normalize(15),
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  errorText: {
    fontSize: normalize(15),
    textTransform: 'capitalize',
    color: 'red',
    textAlign: 'center',
  },
});

export default styles;
