import axios from 'axios'
import { Dispatch } from 'redux'

const nameSpace = 'trello:';

export const FETCT_DATA_TRELLO = `${nameSpace}FETCT_DATA_TRELLO`

type USER = {
  name: any
}

type TrellData = {
  name: string
}

export const actSetTrelloData = ({ trello }: USER) => {
  return {
    type: FETCT_DATA_TRELLO,
    payload: trello
  }
}

export const asyncFetchAllDataTrello = () => {
  return async (dispatch: Dispatch) => {
    try {
      const trelloData: any = await axios.get(`http://localhost:3000/trello`)
      if (trelloData.status !== 200 && trelloData.status !== 201) {
        return {
          ok: false,
          error: "Email was wrong.please input another email..."
        }
      }
      dispatch(actSetTrelloData({ trello: trelloData.data }))
    }
    } catch (err) {
    return { ok: false, error: "Error. Please register again.." }
  }
}
}