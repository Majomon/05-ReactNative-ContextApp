import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config';
import {useCounterStore} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';

export const CounterScreen = () => {
  const count = useCounterStore(state => state.count);
  const increment = useCounterStore(state => state.incrementBy);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Contador: ${count}`,
    });
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Count: {count}</Text>
      <Pressable onPress={() => increment(1)}>
        <Text style={styles.primaryButton}>+1</Text>
      </Pressable>
      <Pressable onPress={() => increment(-1)}>
        <Text style={styles.primaryButton}>-1</Text>
      </Pressable>
    </View>
  );
};
