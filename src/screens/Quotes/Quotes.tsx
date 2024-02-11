import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { Table } from '../../components/Table'
import { tickerStore } from '../../store/ticker'
import { observer } from 'mobx-react-lite'
import { useFocusEffect } from '@react-navigation/native'

export const Quotes = observer(() => {
  const { actionGetTickerData, tickerData, error } = tickerStore

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
      <ActivityIndicator size="large" color="#d85a85" />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
