import PostService from "../services/PostService"
export default {

  async getPosts() {
    const response = await PostService.getPosts()
    return response.data
  }

}