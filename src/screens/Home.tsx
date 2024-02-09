import React from 'react'
import { SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native'

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> О приложении </Text>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="red"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
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
