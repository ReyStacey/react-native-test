import * as React from 'react'
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

  if (tickerData.length) {
    return <Table data={tickerData} error={error} />
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
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
