import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Ionicons} from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
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

export default function DetailScreen({navigation, route}) {
  const {id, title} = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation]);
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState([false]);
  const getData = async id => {
    setLoading(true);
    const res = await axios.get(
      'https://api.codingthailand.com/api/course/' + id,
    );
    setDetail(res.data.data); //Update Product จากค่าที่ดึงมา
    setLoading(false);
  };

  useEffect(() => {
    getData(id);
  }, []);
  const _onRefresh = () => {
    getData(id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={detail}
        keyExtractor={(item, index) => item.ch_id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading} //if refreshing = true : waiting for data refresh!
        renderItem={({item,index}) => (
          <ListItem thumbnail>
            <Left>
              <Text>{index+1}</Text>
            </Left>
            <Body>
              <Text>{item.ch_title}</Text>
              {/* <Text note numberOfLines={1}>
                {item.ch_title}
              </Text> */}
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.ch_view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
