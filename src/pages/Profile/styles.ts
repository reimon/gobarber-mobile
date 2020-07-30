import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
export const Button = styled.Button``;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
