import { AppState } from '../AppState'
import { api } from './AxiosService'

class BoardService {
  async getBoards() {
    try {
      const res = await api.get('/api/boards')
      console.log(res)
      AppState.boards.push(res)
    } catch (err) {
      console.error(err)
    }
  }

  async createBoard(boardData) {
    try {
      const res = await api.post('/boards', boardData)
      AppState.boards.push(res)
    } catch (err) {
      console.error(err)
    }
  }
}

export const boardService = new BoardService()
