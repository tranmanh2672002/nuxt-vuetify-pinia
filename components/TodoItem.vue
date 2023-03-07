<template>
  <div class="todo-item">
    <span class="todo-item-title">{{ todo.title }}</span>
    <v-btn @click="handleClickDelete" color="red">delete</v-btn>
  </div>
</template>

<script setup>
import { useTodoStore } from "~~/store/todoStore";
const props = defineProps({
  todoItem: {
    type: Object,
  },
});

const todoStore = useTodoStore();
const { deleteTodo } = todoStore;
const todo = props.todoItem;

const handleClickDelete = () => {
  deleteTodo(todo.id);
};
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(190, 47, 226);
  margin: 10px 0;
  padding: 8px;
  border-radius: 8px;
}

.todo-item-title {
  font-size: 1.4rem;
}
</style>
