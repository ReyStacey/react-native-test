import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TableItem } from './TableItem'
import { tickerData } from '../../api/getTicker'

type tableProps = {
  error: string
  data: tickerData[]
}

export const Table = (props: tableProps) => {
  const cellNames: string[] = [
    'displayName',
    'markPrice',
    'high',
    'dailyChange',
  ]

  return (
    <View>
      {props.error ? (
        <View style={styles.row}>
          <Text style={[styles.cell, styles.error]}>{props.error}</Text>
        </View>
      ) : null}
      <View style={styles.row}>
        {cellNames.map((item, index) => (
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
}

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
  error: {
    color: 'red',
  },
})
