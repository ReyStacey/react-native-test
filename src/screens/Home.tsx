import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> О приложении </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
