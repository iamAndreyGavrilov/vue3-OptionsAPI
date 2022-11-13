<template>
  <div class="options">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>Your have {{ todosCount }} Todo!</h3>
    <!-- <input
      type="name"
      placeholder="add todo"
      v-model="newTodoName"
      @keyup.enter="addTodo"
    /> -->
    <input
      type="name"
      placeholder="add todo"
      v-model="data.newTodoName"
      @keyup.enter="addTodo"
    />
    <div>
      <ul>
        <!-- <li v-for="todo in todos" :key="todo.id">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(todo.id)">x</button>
        </li> -->
        <li v-for="todo in data.todos" :key="todo.id">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(todo.id)">x</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, reactive } from "vue";

export default {
  name: "OptionsView",
  setup() {
    let newTodoName = ref("");
    let todos = ref([
      { id: 1, name: "one" },
      { id: 2, name: "two" },
      { id: 3, name: "three" },
    ]);

    let data = reactive({
      newTodoName: "",
      todos: [
        { id: 1, name: "one" },
        { id: 2, name: "two" },
        { id: 3, name: "three" },
      ],
    });

    const badWords = ["loh", "fuck"];

    // let todosCount = computed(() => todos.value.length);
    let todosCount = computed(() => data.todos.length);

    // watch(newTodoName, (newValue) => {
    //   if (badWords.includes(newValue.toLowerCase())) {
    // alert("Bad word! " + newTodoName.value + "!!!");
    //     newTodoName.value = "";
    //   }
    // });

    watch(data, (newValue) => {
      if (badWords.includes(newValue.newTodoName.toLowerCase())) {
        alert("Bad word! " + newValue.newTodoName + "!!!");
        data.newTodoName = "";
      }
    });

    function addTodo() {
      let newTodo = {
        id: Date.now(),
        // name: newTodoName.value,
        name: data.newTodoName,
      };

      // todos.value.push(newTodo);
      data.todos.push(newTodo);
      // newTodoName.value = "";
      data.newTodoName = "";
    }

    function deleteTodo(id) {
      // todos.value = todos.value.filter((todo) => todo.id !== id);
      data.todos = data.todos.filter((todo) => todo.id !== id);
    }

    return {
      // возвращать нужно то, что будет использоваться в шаблоне
      newTodoName,
      todos,
      data,

      todosCount,

      addTodo,
      deleteTodo,
    };
  },

  // data() {
  //   return {
  //     newTodoName: "",
  //     todos: [
  //       { id: 1, name: "one" },
  //       { id: 2, name: "two" },
  //       { id: 3, name: "three" },
  //     ],
  //     badWords: ["loh", "fuck"],
  //   };
  // },
  // methods: {
  //   addTodo() {
  //     let newTodo = {
  //       id: Date.now(),
  //       name: this.newTodoName,
  //     };

  //     this.todos.push(newTodo);
  //     this.newTodoName = "";
  //   },

  //   deleteTodo(id) {
  //     this.todos = this.todos.filter((todo) => todo.id !== id);
  //   },
  // },
  // watch: {
  //   newTodoName(value) {
  //     if (this.badWords.includes(value.toLowerCase())) {
  //       this.newTodoName = "";
  //       alert("Bad word!");
  //     }
  //   },
  // },
  // computed: {
  //   todosCount() {
  //     return this.todos.length;
  //   },
  // },
  // components: {},
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
