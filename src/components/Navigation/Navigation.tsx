import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Home } from '../../screens/Home'
import { Quotes } from '../../screens/Quotes'
import { THEME } from '../../store/theme'

const Tab = createBottomTabNavigator()

const TABS: string[] = ['О приложении', 'Котировки']

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: THEME.snowColor,
          },
          tabBarActiveTintColor: THEME.primaryColor,
          tabBarStyle: {
            backgroundColor: THEME.snowColor,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: TABS[0],
            tabBarLabel: TABS[0],
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="information"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Quotes"
          component={Quotes}
          options={{
            title: TABS[1],
            tabBarLabel: TABS[1],
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="currency-usd"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
