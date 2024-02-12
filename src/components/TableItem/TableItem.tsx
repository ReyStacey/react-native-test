import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TickerData } from '../../../api/getTicker'
import { observer } from 'mobx-react-lite'

interface TableItemProps {
  item: TickerData
}

export const TableItem = observer((props: TableItemProps) => {
  const { displayName, markPrice, high, dailyChange } = props.item

  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{displayName}</Text>
      <Text style={styles.cell}>{markPrice}</Text>
      <Text style={styles.cell}>{high}</Text>
      <Text style={styles.cell}>{dailyChange}</Text>
    </View>
  )
})

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
