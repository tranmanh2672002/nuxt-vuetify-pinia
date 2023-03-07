<template>
  <div class="todo-input">
    <v-text-field
      class="todo-input-input"
      label="Nhập việc cần làm"
      hide-details="auto"
      v-model="inputValue"
    ></v-text-field>
    <v-btn @click="handleClickAdd" class="todo-btn">Add</v-btn>
  </div>
</template>

<script setup>
import { useTodoStore } from "../store/todoStore";
import { v4 as uuidv4 } from "uuid";

const todoStore = useTodoStore();
const { addTodo } = todoStore;
const inputValue = ref("");
const handleClickAdd = () => {
  if (inputValue.value != "") {
    addTodo({
      id: uuidv4(),
      title: inputValue.value,
    });
    inputValue.value = "";
  }
};
</script>

<style lang="scss" scoped>
.todo-input {
  display: flex;
  align-items: center;
  padding: 10px 20px 0;
}

.todo-input-input {
  background-color: rgb(196, 197, 197);
}
.todo-btn {
  background-color: rgb(25, 126, 243);
  color: #fff;
  height: 56px;
  font-size: 1rem;
}
</style>
