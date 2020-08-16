import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SetttingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setttings</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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

export default SetttingsScreen;
