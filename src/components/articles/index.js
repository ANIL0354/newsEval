import React from 'react';
import {View, Linking, Pressable} from 'react-native';
import {Text, Card, Divider} from 'react-native-elements';
import moment from 'moment';
import styles from './styles';
import {hp} from '../../theme/responsive';

const Article = ({...props}) => {
  const {
    headline,
    abstract,
    pub_date,
    news_desk,
    multimedia,
    web_url,
  } = props.article;
  const {noteStyle, featuredTitleStyle} = styles;

  const time = moment(pub_date || moment.now()).fromNow();

  const defaultImg =
    'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';
  return (
    <Pressable
      useForeground
      style={styles.gridStyle}
      onPress={() => Linking.openURL(web_url)}>
      <Card
        featuredTitle={headline?.main}
        containerStyle={{
          minHeight: hp(20),
        }}
        featuredTitleStyle={featuredTitleStyle}
        image={{
          uri: multimedia?.length
            ? `https://www.nytimes.com/${multimedia[0].url}`
            : defaultImg,
        }}>
        <Text
          style={styles.abstractxt}
          numberOfLines={15}
          ellipsizeMode={'tail'}>
          {abstract || 'Read More..'}
        </Text>
        <Divider style={{backgroundColor: '#dfe6e9'}} />
        <View style={styles.detailtxt}>
          <Text style={noteStyle} numberOfLines={2} ellipsizeMode={'tail'}>
            {news_desk?.toUpperCase() || 'none'}
          </Text>
          <Text style={noteStyle} numberOfLines={2} ellipsizeMode={'tail'}>
            {time}
          </Text>
        </View>
      </Card>
    </Pressable>
  );
};

export default Article;
