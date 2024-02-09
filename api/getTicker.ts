import axios from 'axios'
const BASE_URL = 'https://api.poloniex.com/markets/ticker24h'

export type tickerData = {
  displayName: string
  markPrice: string
  high: string
  dailyChange: string
}

export const getTickerData = async () => {
  return (await axios.get<tickerData[]>(BASE_URL)).data
}
