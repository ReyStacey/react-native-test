import { makeObservable, runInAction, action, observable } from 'mobx'
import { tickerData, getTickerData } from '../../api/getTicker'

class TickerStore {
  @observable public tickerData: tickerData[] = []

  @observable public error: string | null = null

  constructor() {
    makeObservable(this)
  }

  @action
  public actionGetTickerData = async () => {
    let isLoading = true

    try {
      const response = await getTickerData()

      runInAction(() => {
        this.tickerData = response
        this.error = null
        isLoading = false
      })
    } catch (error) {
      console.error(error.message)

      runInAction(() => {
        this.error = 'Ошибка'
        isLoading = false
      })
    }
  }
}

export const tickerStore = new TickerStore()
