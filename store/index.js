import axios from "axios";

export const state = () => ({
  posts: [],
  errors: "",
  loading: false
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setErrors(state, errors) {
    state.errors = errors.message;
  },
  clearErrors(state) {
    state.errors = "";
  },
  delPost(state, id) {
    state.posts.splice(
      state.posts.findIndex(item => item.id === id),
      1
    );
  },
  changeLoading(state) {
    state.loading = !state.loading;
  }
};

export const actions = {
  nuxtServerInit({ commit }) {
    commit("changeLoading");
    // Эмуляция задержки ответа от сервера
    setTimeout(() => {
      return axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          if (Math.floor(res.status * 0.01) === 2) {
            commit("setPosts", res.data);
            commit("clearErrors");
          }
        })
        .catch(err => {
          commit("setErrors", err);
        })
        .finally(() => commit("changeLoading"));
    }, 3000);
  }
};

export const getters = {
  getPosts(state) {
    return state.posts;
  },
  getErrors(state) {
    return state.errors;
  },
  getLoading(state) {
    return state.loading;
  }
};
