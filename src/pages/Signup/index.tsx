import React, {useRef, useCallback} from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
// import {Form} from '@unform/mobile';
// import * as Yup from 'yup';
// import {FormHandles} from '@unform/core';
// import getValidationErrors from '../../utils/getValidationErrors';
// import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Title, BackToSignInText, BackToSignIn} from './styles';
import logoImg from '../../assets/logo.png';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  // const formRef = useRef<FormHandles>(null);
  // const passwordInputRef = useRef<TextInput>(null);
  // const emailInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  // const handleSignUp = useCallback(
  //   async (data: SignUpFormData) => {
  //     try {
  //       formRef.current?.setErrors({});
  //       const schema = Yup.object().shape({
  //         name: Yup.string().required('Name required'),
  //         email: Yup.string()
  //           .required('E-mail required')
  //           .email('Enter a valid email address'),
  //         password: Yup.string().min(
  //           6,
  //           'Your password must be at least 6 digits',
  //         ),
  //       });

  //       await schema.validate(data, {
  //         abortEarly: false,
  //       });

  //       await api.post('users', data);
  //       Alert.alert(
  //         'Cadastro realizado com sucesso',
  //         'Você já pode realizar login na aplicação',
  //       );
  //       navigation.goBack();
  //     } catch (err) {
  //       console.log(err);
  //       if (err instanceof Yup.ValidationError) {
  //         const errors = getValidationErrors(err);
  //         formRef.current?.setErrors(errors);
  //         return;
  //       }

  //       Alert.alert(
  //         'Error no cadastro',
  //         'Ocorreu um erro ao fazer cadastro, tente novamente',
  //       );
  //     }
  //   },
  //   [navigation],
  // );

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Input
              autoCapitalize="words"
              name="name"
              icon="user"
              placeholder="Nome"
              returnKeyType="next"
            />
            <Input
              autoCorrect={false}
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="E-mail"
              returnKeyType="next"
            />
            <Input
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              textContentType="newPassword"
              returnKeyType="send"
            />
            <Button onPress={() => console.log('OK')}>Entrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Voltar para login</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;