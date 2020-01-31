<template>
  <div class="post">
    <transition-group
      v-if="posts.length && !loading"
      tag="ul"
      class="post__list"
      name="fade"
      appear
    >
      <li class="post__item" v-for="post in posts" :key="post.id">
        <div class="post__header">
          <h3 class="post__title">{{ post.title }}</h3>
          <div class="spacer"></div>
          <button type="button" class="btn btn_close" @click.stop="delPost(post.id)">&times;</button>
        </div>
        <div class="post__body">
          <div class="post__descr">{{ post.body }}</div>
        </div>
      </li>
    </transition-group>
    <div class="alert" v-else-if="errors">Ошибка: {{errors}}</div>

    <div class="spiner" v-else>Posts Loading...</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    errors: {
      type: String
    }
  },
  methods: {
    delPost(id) {
      this.$store.commit("delPost", id);
    }
  }
};
</script>

<style scoped>
.post {
  padding: 10px;
}
.post__header {
  display: flex;
  flex-wrap: nowrap;
}
.post__list {
  list-style-type: none;
  padding: 0;
}
.post__item {
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.1);
}

.post__title {
  overflow: hidden;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.spiner {
  text-align: center;
}
.alert {
  padding: 1rem;
  background-color: #ff5722;
  color: white;
  border-radius: 5px;
}
.spacer {
  flex: 1;
  min-width: 50px;
}
.btn {
  border: none;
  background: transparent;
  color: #000;
  cursor: pointer;
}

.btn:focus {
  outline: none;
  background-color: rgb(192, 192, 192);
}
.btn_close {
  line-height: 1;
  font-size: 1.2em;
  font-weight: bold;
}

.fade-enter,
.fade-leave-to {
  opacity: 0 !important;
  transform: translateX(-15px) !important;
}

@media (min-width: 1024px) {
  .btn_close {
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }
  .btn:hover {
    background-color: rgb(224, 224, 224);
  }
  .post__item:hover {
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    transform: translateY(-1px);
  }
  .post__item:hover .btn_close {
    opacity: 1;
  }
}
</style>

