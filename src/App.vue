<template>
  <div class="app">
    <MainComponent 
      :settings="{
        dataObject: {
          isActive: true,
          isManager: true,
          isProductName: true,
          isJiraLink: true,
          isDomain: true
        },
        creatingObject: {
          isActive: true,
          isUser: true,
          isLead: true,
          isType: true,
          isBusiness: true,
          isPercent: true,
          isJob: true,
        }
      }"
    />
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  components: {
    MainComponent
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
    background-color: #e5eaf5;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    color: #463e40;
  }
</style>
