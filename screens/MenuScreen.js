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
import {ScrollView} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {userStoreContext} from '../context/UserContext';

export default function MenuScreen({navigation}) {
  const userStore = React.useContext(userStoreContext);

  React.useEffect(() => {
    const getProfile = async () => {
      const profile = await AsyncStorage.getItem('@profile');
      if (profile) {
        userStore.updateProfile(JSON.parse(profile));
      }
    };
    getProfile();
  }, []);
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: undefined,
          height: 150,
        }}>
        <Text
          style={{
            color: 'blue',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 20,
          }}>
          เมนูหลัก
        </Text>
        {/* from native base */}
        {userStore.profile && (
          <>
            <Text style={{fontSize: 18, color: '#f4511e', fontWeight: 'bold'}}>
              ยินดีต้อนรับคุณ {userStore.profile.name}
            </Text>
            <Text style={{fontSize: 14, color: '#f4511e', fontWeight: 'bold'}}>
              Welcome {userStore.profile.email}
            </Text>
          </>
        )}
      </View>
      <View>
        <Content>
          <ListItem
            icon
            style={{marginBottom: 10, marginTop: 10}}
            onPress={() => navigation.navigate('Home')}>
            <Left>
              <Button style={{backgroundColor: '#FF9501'}}>
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
          <ListItem
            icon
            style={{marginBottom: 10, marginTop: 10}}
            onPress={() => navigation.navigate('Product')}>
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
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
          {/* <ListItem
            icon
            style={{marginBottom: 10, marginTop: 10}}
            onPress={() => navigation.navigate('Login')}>
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>เข้าสู่ระบบ</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem> */}
          {!userStore.profile && (
            <ListItem icon onPress={() => navigation.navigate('LoginScreen')}>
              <Left>
                <Button style={{backgroundColor: '#007AFF'}}>
                  <Icon active name="log-in" />
                </Button>
              </Left>
              <Body>
                <Text>เข้าสู่ระบบ</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
          )}

          {userStore.profile && (
            <ListItem icon 
              onPress={ async()=>{
                await AsyncStorage.removeItem('@token');
                await AsyncStorage.removeItem('@profile');
                userStore.updateProfile(null);
                navigation.closeDrawer();
            }}>
              <Left>
                <Button style={{backgroundColor: '#bb4a54'}}>
                  <Icon active name="log-out" />
                </Button>
              </Left>
              <Body>
                <Text>ออกจากระบบ</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
          )}
        </Content>
      </View>
    </ScrollView>
  );
}
