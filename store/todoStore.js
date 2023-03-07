import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo-list", () => {
  const todoList = ref([
    {
      id: "1",
      title: "quét nhà",
    },
    {
      id: "2",
      title: "lau nhà",
    },
    {
      id: "3",
      title: "giặt quần áo",
    },
    {
      id: "4",
      title: "rửa bát",
    },
  ])

  const addTodo = (todo) => {
    todoList.value.push(todo);
  }

  const deleteTodo = (id) => {
    todoList.value = todoList.value.filter((todo) => {
      return todo.id.toString() !== id.toString();
    });
  }

  return {
    todoList, addTodo, deleteTodo
  }

});
