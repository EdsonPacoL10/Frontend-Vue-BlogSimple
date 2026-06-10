import api from "../api/axios"

export default {

  async getPosts() {
    return await api.get('/posts')
  }

}