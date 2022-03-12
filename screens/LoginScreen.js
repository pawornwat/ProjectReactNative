import {View} from 'react-native';
import React from 'react';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
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
  Form,
  Label,
  Item,
  Input,
  Icon,
} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { userStoreContext } from '../context/UserContext';

const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email('รูปแบบอีเมลไม่ถูกต้อง')
      .required('กรุณากรอกอีเมลใหม่'),
    password: Yup.string()
      .min(3, 'รหัสผ่านต้อง 3 ตัวอักษรขิ้นไป')
      .required('กรุณาป้อนรหัสผ่าน'),
  });
export default function LoginScreen({navigation}) {
  return (
    <Container>
      <Content padder>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          onSubmit={async (value,{setSubmitting}) => {
            try {
              const url = 'https://api.codingthailand.com/api/login';
              const res = await axios.post(url, {
                email: values.email,
                password: values.password,
              });
            //   alert(JSON.stringify(res.data));
            //   navigation.navigate('Home');
            await AsyncStorage.setItem('@token',JSON.stringify(res.data))
            const urlProfile = "https://api.codingthailand.com/api/profile"
            const resProfile = await axios.get(urlProfile,{
                headers:{
                    Authorization :'Bearer ' + res.data.access_token
                }
            })
            // alert(JSON.stringify(resProfile.data.data.user))
            await AsyncStorage.setItem('@profile',JSON.stringify(resProfile.data.data.user))
            const profile = await AsyncStorage.getItem('@profile')
            userStore.updateProfile(JSON.parse(profile))

            alert('เข้าสู่ระบบเรียบร้อยแล้ว')
            navigation.navigate('HomeScreen')
            } catch (error) {
              alert(error.response.data.message);
            }finally{ //ให้ปุ่มสามารถกลับมาคลิกได้อีก
              setSubmitting(false);
            }
          }}>
          {({
            errors,
            touched,
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <Item
                fixedLabel
                error={errors.email && touched.email ? true : false}>
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && <Icon name="close-circle" />}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{color: 'red'}}>{errors.email}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                error={errors.password && touched.password ? true : false}>
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  keyboardType="number-pad"
                  secureTextEntry={true}
                />
                {errors.password && touched.password && (
                  <Icon name="close-circle" />
                )}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{color: 'red'}}>{errors.password}</Label>
                </Item>
              )}
              <Button full light onPress={handleSubmit} disabled={isSubmitting}>
                <Text>Login</Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
}
