import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// Import getNews from news.js
import {getNews} from '../helpers/apis';
import Article from '../components/articles';
import styles from './styles';
import Loader from '../components/Loader';
import {Button} from 'react-native-elements';

const Home = ({params}) => {
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [bottomLoader, setBottomLoader] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [changeLayout, setChangeLayout] = useState(true);

  useEffect(() => {
    fetchNews(
      page,
      articles => {
        setArticles([...articles]);
        setLoading(false);
      },
      error => {
        setError(error?.msg || 'Something went wrong');
        setLoading(false);
      },
    );
  }, []);
  const renderItem = ({item}) => {
    return <Article article={item} />;
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchNews(
      0,
      articles => {
        setArticles([...articles]);
        setPage(0);
        setRefreshing(false);
      },
      error => {
        setRefreshing(false);
        setError(error?.msg || 'Something went wrong');
      },
    );
  };

  function fetchNews(page = 0, onSuccess = () => {}, onFailure = () => {}) {
    getNews(page)
      .then(articles => {
        onSuccess(articles);
      })
      .catch(error => {
        onFailure(error);
      });
  }

  function onEndReached() {
    setBottomLoader(true);
    fetchNews(
      page + 1,
      newArticles => {
        let tempArticles = [...articles, ...newArticles];
        setArticles(tempArticles);
        setPage(page + 1);
        setBottomLoader(false);
      },
      () => {
        setBottomLoader(false);
      },
    );
  }

  function ListFooterComponent() {
    return bottomLoader ? <Loader size="small" color="#13988E" /> : null;
  }

  function ListEmptyComponent() {
    return (
      <View style={styles.emptyContainerStyle}>
        <Text style={!!error ? styles.errorText : styles.emptyText}>
          {!error ? `No data found` : `Something went wrong\n`}
          {!!error && (
            <Text onPress={handleRefresh} style={styles.emptyText}>
              Retry
            </Text>
          )}
        </Text>
      </View>
    );
  }
  return loading ? (
    <Loader />
  ) : (
    <View>
      {!!articles?.length && (
        <Button
          title={!changeLayout ? 'List View' : 'Grid View'}
          color="white"
          backgroundColor="royalblue"
          onPress={() => {
            setChangeLayout(!changeLayout);
          }}
        />
      )}
      <FlatList
        data={articles || []}
        onEndReached={onEndReached}
        renderItem={renderItem}
        contentContainerStyle={
          articles?.length
            ? styles.contentContainerStyle
            : styles.noDataContainerStyle
        }
        onEndReachedThreshold={0.8}
        ListFooterComponent={ListFooterComponent}
        extraData={changeLayout}
        keyExtractor={item => item?._id}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        key={changeLayout ? 1 : 0}
        initialNumToRender={10}
        numColumns={changeLayout ? 1 : 2}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

export default Home;
