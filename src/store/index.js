import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        body: "Start where you are. Use what you have. Do what you can.",
        createdAt: "2025-10-18T07:24:00Z",
        author: { name: "Andre Poll" },
        likes: 0
      },
      {
        id: 2,
        body: "Don’t watch the clock; do what it does. Keep going.",
        createdAt: "2025-10-19T10:15:00Z",
        author: { name: "Andre Poll" },
        imageUrl: '/images/quote_1.jpeg',
        likes: 0
      },
      {
        id: 3,
        body: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        createdAt: "2025-10-20T14:42:00Z",
        author: { name: "Andre Poll" },
        imageUrl: '/images/quote_3.jpeg',
        likes: 0
      },
      {
        id: 4,
        body: "It always seems impossible until it’s done.",
        createdAt: "2025-10-21T09:58:00Z",
        author: { name: "Andre Poll" },
        imageUrl: '/images/quote_4.jpeg',
        likes: 0
      },
      {
        id: 5,
        body: "Push yourself, because no one else is going to do it for you.",
        createdAt: "2025-10-22T18:33:00Z",
        author: { name: "Andre Poll" },
        likes: 0
      },
      {
        id: 6,
        body: "Discipline is doing what needs to be done, even when you don’t feel like doing it.",
        createdAt: "2025-10-23T12:10:00Z",
        author: { name: "Andre Poll" },
        likes: 0
      },
      {
        id: 7,
        body: "Dream big. Start small. Act now.",
        createdAt: "2025-10-24T20:45:00Z",
        author: { name: "Andre Poll" },
        likes: 0
      },
      {
        id: 8,
        body: "You don’t have to be great to start, but you have to start to be great.",
        createdAt: "2025-10-25T08:27:00Z",
        author: { name: "Andre Poll" },
        likes: 0
      },
      {
        id: 9,
        body: "The harder you work for something, the greater you’ll feel when you achieve it.",
        createdAt: "2025-10-26T15:05:00Z",
        author: { name: "Andre Poll" },
        likes: 0
      },
      {
        id: 10,
        body: "Doubt kills more dreams than failure ever will.",
        createdAt: "2025-10-27T11:56:00Z",
        author: { name: "Andre Poll" },
        imageUrl: '/images/quote_5.jpeg',
        likes: 0
      }
    ]
  },

  mutations: {
    incrementLikes(state, id) {
      const post = state.posts.find(p => p.id === id)
      if (post) post.likes++
    },
    resetLikes(state) {
      state.posts.forEach(p => (p.likes = 0))
    }
  }
})

