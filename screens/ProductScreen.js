import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Ionicons} from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Badge,
} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';

const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([false]);
  let cancelToken
  const getData = async () => {
    setLoading(true);
    const res = await axios.get('https://api.codingthailand.com/api/course', {
      cancelToken: cancelToken.token,
    });
    setProduct(res.data.data); //Update Product จากค่าที่ดึงมา
    setLoading(false);
  };
  useFocusEffect(
    React.useCallback(() => {
      cancelToken = axios.CancelToken.source();
      getData();
      return () => {
        // alert('Exit ProductScreen');
        cancelToken.cancel()
      };
    }, []),
  );

  useEffect(() => {
    getData();
  }, []);

  if (loading === true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }
  const _onRefresh = () => {
    getData();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading} //if refreshing = true : waiting for data refresh!
        renderItem={({item}) => (
          <ListItem
            thumbnail
            onPress={() => {
              navigation.navigate('Detail', {
                id: item.id,
                title: item.title,
              });
            }}>
            <Left>
              <Thumbnail square source={{uri: item.picture}} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
