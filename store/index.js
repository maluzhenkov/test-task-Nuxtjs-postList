import axios from "axios";

export const state = () => ({
  posts: []
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  delPost(state, id) {
    state.posts.splice(
      state.posts.findIndex(item => item.id === id),
      1
    );
  }
};

export const actions = {
  nuxtServerInit({ commit }) {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        commit("setPosts", res.data);
      })
      .catch(err => console.error(err));
  }
};

export const getters = {
  getPosts(state) {
    return state.posts;
  }
};
