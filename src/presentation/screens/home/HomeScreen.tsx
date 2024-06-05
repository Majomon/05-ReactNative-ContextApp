import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../../config';
import { useProfileStore } from '../../store/profile-store';
import { useCounterStore } from '../../store/counter-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const counter = useCounterStore(state => state.count);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>{name}</Text>
      <Text style={styles.tittle}>{email}</Text>
      <Text style={styles.tittle}>{counter}</Text>
    </View>
  );
};
