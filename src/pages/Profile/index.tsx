import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Button, Header} from './styles';
import {useAuth} from '../../hooks/auth';

const Profile: React.FC = () => {
  const {signOut} = useAuth();

  const {navigate} = useNavigation();
  const navigateToDashboard = useCallback(() => {
    navigate('Dashboard');
  }, [navigate]);
  return (
    <Container>
      <Button title="Logout" onPress={signOut} />
    </Container>
  );
};

export default Profile;
