import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useFocusEffect, useNavigationState} from '@react-navigation/native';

const DetailsScreen = ({navigation}) => {
  const state = useNavigationState((state) => state);

  console.log('Na', state);

  useFocusEffect(
    React.useCallback(() => {
      fetch('https://restcountries.eu/rest/v2/callingcode/372')
        .then((response) => response.json())
        .then((data) => console.log(data));
      return () => console.log('lost focus');
    }),
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details</Text>
      <Button
        title="Go to BottomTab"
        onPress={() => navigation.navigate('BottomTab')}
      />
      <Button
        title="Go to TopTab"
        onPress={() => navigation.navigate('TopTab')}
      />
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

export default DetailsScreen;
