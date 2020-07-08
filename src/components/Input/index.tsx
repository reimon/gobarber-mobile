import React, {useEffect, useRef, useState} from 'react';
import {TextInputProps} from 'react-native';

import {Container, TextInput, Icon} from './styles';
import {useField} from '@unform/core';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  containerStyle?: {};
}

interface InputValueReferente {
  value: string;
}

interface InputRef {
  focus(): void;
}
const Input: React.RefForwardingComponent<InputRef, InputProps> = ({
  name,
  icon,
  ...rest
}) => {
  const inputElementRef = useRef<any>(null);

  const {} = useField(name);

  const {registerField, defaultValue = '', fieldName, error} = useField(name);
  const inputValueRef = useRef<InputValueReferente>({value: defaultValue});

  const [isFocused, setIsFocused] = useState(false);
  const [isFielled, setIsFielled] = useState(false);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />

      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default Input;
