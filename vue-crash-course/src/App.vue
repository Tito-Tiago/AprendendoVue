<script setup>
  import { ref } from 'vue';

  const name = "Vue" //composition
  const count = ref(0)
  const tasks = ref(['One', 'Two', 'Three'])
  const link = "https://tiagotito.dev"
  const newTask = ref('task')

  const addTask = () => {
    if (newTask.value.trim() !== '') {
      tasks.value.push(newTask.value)
      newTask.value = 'task'
    }
  }
  
  // export default { options api
  //   data() {
  //     return {
  //       name: "Vue",
  //       count: 0,
  //       tasks: ['One', 'two', 'three'],
  //       link: "https://tiagotito.dev"
  //     }
  //   }
  // }
</script>

<template>
  <h1>Hello world! I´m {{ name }}</h1>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">submit</button>
  </form>

  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <button @click="count++" v-if="count === 0"> mais</button>
  <button @click="count--" v-else>menos</button> <br>
  <!-- <a v-bind:href="link" target="_blank">meu site</a>  -->
  <a :href="link" target="_blank">meu site</a>   <!-- dinâmico -->
  <!-- tb tem o v-on / @ -->
</template>

<style scoped></style>
