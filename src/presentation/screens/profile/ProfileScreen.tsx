import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>{name}</Text>
      <Text style={styles.tittle}>{email}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Luna'})}>
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({email: 'luna@gmail.com'})}>
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('Mauri', 'mauri.monzon.dev@gmail.com')}>
        <Text>Regresar a Mauri</Text>
      </Pressable>
    </View>
  );
};
