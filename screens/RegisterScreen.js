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

const validateSchema = Yup.object().shape({
  name: Yup.string().required('กรุณาป้อนชื่อสกุล'),
  email: Yup.string()
    .email('รูปแบบอีเมลไม่ถูกต้อง')
    .required('กรุณากรอกอีเมลใหม่'),
  password: Yup.string()
    .min(3, 'รหัสผ่านต้อง 3 ตัวอักษรขิ้นไป')
    .required('กรุณาป้อนรหัสผ่าน'),
});

export default function RegisterScreen({navigation}) {
  return (
    <Container>
      <Content padder>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          onSubmit={async (value,{setSubmitting}) => {
            try {
              const url = 'https://api.codingthailand.com/api/register';
              const res = await axios.post(url, {
                name: values.name,
                email: values.email,
                password: values.password,
              });
              alert(res.data.message);
              navigation.navigate('Home');
            } catch (error) {
              alert(error.response.data.errors.email[0]);
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
                error={errors.name && touched.name ? true : false}>
                <Label>Name</Label>
                <Input
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                {errors.name && touched.name && <Icon name="close-circle" />}
              </Item>
              {errors.name && touched.name && (
                <Item>
                  <Label style={{color: 'red'}}>{errors.name}</Label>
                </Item>
              )}
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
                <Text>Register</Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
}
