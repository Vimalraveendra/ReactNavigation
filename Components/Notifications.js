import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const NotificationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications</Text>
      <Button
        title="Go to Profile "
        onPress={() => navigation.navigate('Profile')}
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

export default NotificationScreen;
