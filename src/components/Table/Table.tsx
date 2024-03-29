import * as React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TableItem } from '../TableItem'
import { TickerData } from '../../../api/getTicker'
import { observer } from 'mobx-react-lite'
import { THEME } from '../../store/theme'

interface TableProps {
  error: string
  data: TickerData[]
}

const CELL_NAMES: string[] = ['displayName', 'markPrice', 'high', 'dailyChange']

export const Table = observer((props: TableProps) => {
  return (
    <View>
      {!!props.error ?? (
        <View style={styles.row}>
          <Text style={[styles.cell, styles.error]}>{props.error}</Text>
        </View>
      )}
      <View style={styles.row}>
        {CELL_NAMES.map((item, index) => (
          <Text style={styles.cell} key={index + item}>
            {item}
          </Text>
        ))}
      </View>
      <ScrollView>
        {props.data.map((item, index) => (
          <TableItem item={item} key={index} />
        ))}
      </ScrollView>
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
    color: THEME.primaryColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: THEME.errorColor,
  },
})
