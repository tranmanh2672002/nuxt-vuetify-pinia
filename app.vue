<template>
  <div id="app">
    <Header />
    <TodoInput />
    <div class="todo-list">
      <TodoItem v-for="todo in todoList" :key="todo.id" :todo-item="todo" />
    </div>
    <DemoVuetify />
  </div>
</template>

<script setup>
import { useTodoStore } from "./store/todoStore";
import TodoInput from "./components/TodoInput";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import DemoVuetify from "./components/DemoVuetify";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();

const { todoList } = storeToRefs(todoStore);
</script>

<style scoped>
#app {
  width: 800px;
  margin: 40px auto 0;
  background-color: #e7e5e5;
}
.todo-list {
  padding: 20px;
}
</style>
