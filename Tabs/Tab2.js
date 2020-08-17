import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

const Tab2 = () => {
  const isFocused = useIsFocused();
  console.log('is', isFocused);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
});

export default Tab2;
