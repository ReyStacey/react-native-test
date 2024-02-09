import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { Table } from '../components/Table'
import ticker from '../store/ticker'
import { observer } from 'mobx-react-lite'
import { useFocusEffect } from '@react-navigation/native'

const Quotes = observer(() => {
  const { actionGetTickerData, tickerData, error } = ticker

  useFocusEffect(
    React.useCallback(() => {
      const interval = setInterval(actionGetTickerData, 5000)

      return () => clearInterval(interval)
    }, []),
  )

  const filteredTickerData = tickerData.map((item) => {
    const { displayName, markPrice, high, dailyChange } = item

    return { displayName, markPrice, high, dailyChange }
  })

  if (filteredTickerData.length) {
    return <Table data={filteredTickerData} error={error} />
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  )
})

export default Quotes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
