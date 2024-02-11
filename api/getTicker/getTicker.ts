import axios from 'axios'
const BASE_URL = 'https://api.poloniex.com/markets/ticker24h'

export interface TickerData {
  displayName: string
  markPrice: string
  high: string
  dailyChange: string
}

export const getTickerData = async () => {
  return (await axios.get<TickerData[]>(BASE_URL)).data
}
