<template>
  <div class="app">
    <CreatingForm />
  </div>
</template>

<script>
import CreatingForm from './components/CreatingForm.vue';

export default {
  name: 'App',
  components: {
    CreatingForm
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .app {
    background-color: #252525;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    color: #fff;
  }
</style>
