import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const DetailsScreen = ({navigation}) => {
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
