import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';

export default function MenuScreen({navigation}) {
  const {email} = route.params;
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: 'blue',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 20,
          }}>
          เมนูหลัก
        </Text>
        <Content>
          <ListItem icon onPress={() => navigation.navigate('HomeStack')}>
            <Left>
              <Button style={{backgroundColor: '#FF9501'}}>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>หน้าหลัก</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon onPress={() => navigation.navigate('ProductStack')}>
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="product" />
              </Button>
            </Left>
            <Body>
              <Text>สินค้า</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </View>
    </ScrollView>
  );
}
