import React, {useCallback} from 'react';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Header, BackButton, HeaderTitle, UserAvatar} from './styles';
import {useAuth} from '../../hooks/auth';

interface RouteParms {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const {user} = useAuth();
  const route = useRoute();
  const providerId = route.params as RouteParms;
  const {goBack} = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>
        <HeaderTitle>Cabeleireiro</HeaderTitle>

        <UserAvatar source={{uri: user.avatar_url}} />
      </Header>
    </Container>
  );
};

export default CreateAppointment;
