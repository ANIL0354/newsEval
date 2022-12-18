import {StyleSheet} from 'react-native';
import {normalize, wp, hp} from '../../theme/responsive';

const styles = StyleSheet.create({
  noteStyle: {
    margin: wp(5),
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: normalize(10),
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: {width: normalize(3), height: normalize(3)},
    textShadowRadius: normalize(3),
    overflow: 'hidden',
  },
  gridStyle: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  abstractxt: {
    marginBottom: 10,
    overflow: 'hidden',
    height: hp(10),
  },
  detailtxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
});

export default styles;
