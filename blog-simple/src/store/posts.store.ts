import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {

  state: () => ({
    posts: []
  }),

  actions: {

    setPosts(posts:any) {
      this.posts = posts
    }

  }

})