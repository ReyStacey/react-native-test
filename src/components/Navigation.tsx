import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Home } from '../screens/Home'
import Quotes from '../screens/Quotes'

const Tab = createBottomTabNavigator()

export const Navigation = () => {
  const tabsTitle: string[] = ['О приложении', 'Котировки']

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: tabsTitle[0],
            tabBarLabel: tabsTitle[0],
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Quotes"
          component={Quotes}
          options={{
            title: tabsTitle[1],
            tabBarLabel: tabsTitle[1],
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
