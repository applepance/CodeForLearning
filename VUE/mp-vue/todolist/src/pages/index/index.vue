<template>
  <div>
    <swiper :indicator-dots="false" :autoplay="false">
      <block v-for="(imgUrl, i) in imgUrls" :key="i">
        <swiper-item>
          <img :src="imgUrl" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>

    <p class="title">{{ title }}</p>
    <input type="text" placeholder="input todo" v-model="todoContent">
    <button @click="addTodo">添加一条</button>
    <button @click="clearTodo">清除</button>
    <ul class="todos">
      <li
        v-for="(todo, i) in todos"
        :key="i"
        :class="{'done': todo.done}"
        @click="toggle(i)"
      >{{ todo.text }}</li>
      <li>
        {{ todoCount }}
        /
        {{ todos.length }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoContent: "",
      title: "hellp mpvue",
      todos: [
        { text: "吃饭", done: false },
        { text: "睡觉", done: false },
        { text: "学习", done: false }
      ],
      imgUrls: [
        "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
        "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
      ]
    };
  },
  computed: {
    todoCount() {
      return this.todos.filter(todo => !todo.done).length;
    }
  },
  methods: {
    toggle(i) {
      // 设计哲学：不可变数据
      const todos = this.todos.slice(0);
      todos[i].done = !this.todos[i].done;
      this.todos = todos;
      // this.todos[i].done = !this.todos[i].done
    },
    addTodo() {
      this.todos.push({
        text: this.todoContent,
        done: false
      });
      this.todoContent = "";
    },
    clearTodo() {
      this.todos = this.todos.filter(todo => !todo.done);
    }
  },
  watch: {
    todos(todos) {
      console.log("set storage");
      wx.setStorageSync("todos", todos);
    }
  },
  created() {
    this.todos = wx.getStorageSync("todos");
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
