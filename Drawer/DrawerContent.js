import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';

const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoContent}>
            <View style={styles.headContent}>
              <Avatar.Image
                source={require('../assests/myimage.png')}
                size={50}
              />
              <View style={styles.titleContent}>
                <Title style={styles.title}>Vimal Kumar</Title>
                <Caption sytle={styles.caption}>@it's Me</Caption>
              </View>
            </View>
            <View style={styles.followingContent}>
              <View>
                <Paragraph>80</Paragraph>
                <Caption>Following</Caption>
              </View>
              <View>
                <Paragraph>100</Paragraph>
                <Caption>Followers</Caption>
              </View>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => {
            <Icon name="exit-to-app" color={color} size={size} />;
          }}
          label="sign-out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headContent: {
    flexDirection: 'row',
    marginTop: 15,
  },
  titleContent: {
    marginLeft: 15,
  },

  followingContent: {
    flexDirection: 'row',
  },
});

export default DrawerContent;
