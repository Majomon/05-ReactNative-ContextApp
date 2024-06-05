import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../config';
import {useProfileStore} from '../../store/Profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>{name}</Text>
      <Text style={styles.tittle}>{email}</Text>
    </View>
  );
};
