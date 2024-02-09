import { makeAutoObservable, runInAction } from 'mobx'
import { tickerData, getTickerData } from '../../api/getTicker'

class tickerStore {
  tickerData: tickerData[] = []
  isLoading = false
  error = null

  constructor() {
    makeAutoObservable(this)
  }

  actionGetTickerData = async () => {
    try {
      this.isLoading = true
      const response = await getTickerData()

      runInAction(() => {
        this.tickerData = response
        this.isLoading = false
        this.error = null
      })
    } catch (error) {
      console.error = error.message
      runInAction(() => {
        this.isLoading = false
        this.error = 'Ошибка'
      })
    }
  }
}

const ticker = new tickerStore()
export default ticker
