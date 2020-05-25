/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import color from 'color';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme, Portal, FAB} from 'react-native-paper';
import {useSafeArea} from 'react-native-safe-area-context';
import {useIsFocused, RouteProp} from '@react-navigation/native';

import overlay from './overlay';
import {Feed} from './feed';
import {Message} from '../components/message';
import {Notifications} from './notifications';
import {StackNavigatorParamlist} from '../types';

const Tab = createMaterialBottomTabNavigator();

type Props = {
  route: RouteProp<StackNavigatorParamlist, 'FlashWash'>;
};

export const BottomTabs = () => {
  // const routeName = props.route.name ? props.route.name : 'Feed';

  const theme = useTheme();
  const safeArea = useSafeArea();
  const isFocused = useIsFocused();

  let requestIcon = 'car-electric';
  let scheduleIcon = 'calendar-clock';

  // switch (routeName) {
  //   case 'Messages':
  //     icon = 'email-plus-outline';
  //     break;
  //   default:
  //     icon = 'car-electric';
  //     break;
  // }

  const tabBarColor = theme.dark
    ? (overlay(6, theme.colors.surface) as string)
    : theme.colors.surface;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName={'Feed'}
        backBehavior={'initialRoute'}
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text)
          .alpha(0.6)
          .rgb()
          .string()}
        sceneAnimationEnabled={false}>
        <Tab.Screen
          name={'Inicio'}
          component={Feed}
          options={{
            tabBarIcon: 'home-account',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name={'Notificaciones'}
          component={Notifications}
          options={{
            tabBarIcon: 'bell-outline',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name={'Mensajes'}
          component={Message}
          options={{
            tabBarIcon: 'message-text-outline',
            tabBarColor,
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          accessibilityStates
          visible={isFocused}
          icon={scheduleIcon}
          small={true}
          accessibilityLabel={'Agendar Un Servicio'}
          style={{
            position: 'absolute',
            bottom: safeArea.bottom + 135,
            right: 23,
          }}
          color="white"
          theme={{
            colors: {
              accent: 'gray',
            },
          }}
          onPress={() => {}}
        />
        <FAB
          accessibilityStates
          visible={isFocused}
          icon={requestIcon}
          style={{
            position: 'absolute',
            bottom: safeArea.bottom + 65,
            right: 16,
          }}
          color="white"
          theme={{
            colors: {
              accent: theme.colors.primary,
            },
          }}
          onPress={() => {}}
        />
      </Portal>
    </React.Fragment>
  );
};