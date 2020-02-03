import axios from "axios";

const host = "https://jsonplaceholder.typicode.com";

export const state = () => ({
  posts: [],
  errors: "",
  loading: false
});

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SET_ERRORS(state, errors) {
    state.errors = errors.message;
  },
  CLEAR_ERRORS(state) {
    state.errors = "";
  },
  DEL_POST(state, id) {
    state.posts.splice(
      state.posts.findIndex(item => item.id === id),
      1
    );
  },
  CHANGE_LOADING(state) {
    state.loading = !state.loading;
  }
};

export const actions = {
  nuxtServerInit({ commit }) {
    commit("CHANGE_LOADING");
    return axios
      .get(host + "/posts")
      .then(res => {
        if (Math.floor(res.status * 0.01) === 2) {
          commit("SET_POSTS", res.data);
          commit("CLEAR_ERRORS");
        }
      })
      .catch(err => {
        commit("SET_ERRORS", err);
      })
      .finally(() => commit("CHANGE_LOADING"));
  },
  delPost({ commit }, id) {
    return axios.delete(host + "/posts/" + id).then(res => {
      if (Math.floor(res.status * 0.01) === 2) {
        commit("DEL_POST", id);
      }
    });
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
