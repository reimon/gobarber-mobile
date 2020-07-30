import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Button, Header} from './styles';

const Profile: React.FC = () => {
  const {navigate} = useNavigation();
  const navigateToDashboard = useCallback(() => {
    navigate('Dashboard');
  }, [navigate]);
  return (
    <Container>
      <Button title="Dashboard" onPress={navigateToDashboard} />
    </Container>
  );
};

export default Profile;
