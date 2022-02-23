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
  ListItem,
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default function MenuScreen({navigation}) {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            color: "blue",
            fontSize: 20,
            fontWeight: "bold",
            padding: 20,
          }}
        >
          เมนูหลัก
        </Text>
        {/* from native base */} 
        <Content>
          <ListItem icon style={{marginBottom:10,marginTop:10}} onPress={()=> navigation.navigate('Home')}>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>หน้าหลัก</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon style={{marginBottom:10,marginTop:10}} onPress={()=> navigation.navigate('Product')}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
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
