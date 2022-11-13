<template>
  <div class="options">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>Your have XXX Todo!</h3>
    <input
      type="name"
      placeholder="add todo"
      v-model="newTodoName"
      @keyup.enter="addTodo"
    />
    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(todo.id)">x</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionsView",
  data() {
    return {
      newTodoName: "",
      todos: [
        { id: 1, name: "one" },
        { id: 2, name: "two" },
        { id: 3, name: "three" },
      ],
    };
  },
  methods: {
    addTodo() {
      let newTodo = {
        id: Date.now(),
        name: this.newTodoName,
      };

      this.todos.push(newTodo);
      this.newTodoName = "";
    },

    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  components: {},
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  width: 200px;
  margin: 20px auto 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
li span {
  flex: 1;
}
</style>
