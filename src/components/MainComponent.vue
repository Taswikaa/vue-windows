<template>
  <div class="widget">
    <DataForm :settings="settings.dataObject" />
    <CreateForm :settings="settings.creatingObject" />
  </div>
</template>

<script>
import DataForm from './DataForm.vue';
import CreateForm from './CreateForm.vue';

export default {
  name: 'MainComponent',
  components: {
    DataForm,
    CreateForm
  },
  props: ['settings']
}
</script>

<style>
  .widget {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
  }

  .text-input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #463e40;
    color: #463e40;
    font-size: 14px;
    padding: 0 7px 7px 0;
    width: 282px;
  }

  .text-input:focus {
    outline: none;
    border-bottom: 1px solid #9e9eed;
  }

  .text-input::placeholder {
    color: #817f7f;
  }

  .form {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    border: 1px solid #9e9eed;
    padding: 10px;
    border-radius: 10px;
    background-color: #fce6e6;
  }

  .form__button {
    background-color: #9e9eed;
    border: none;
    border-radius: 10px;
    padding: 10px;
    color: #fce6e6;
    font-size: 16px;
    cursor: pointer;
  }

  .form__button_type_cancel {
   background-color: rgb(202, 112, 112); 
  }

  .form__buttons {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-top: 10px;
  }

  .form__heading {
    text-align: center;
  }

  .select {
    appearance: none;
    -ms-progress-appearance: none;
    border: none;
    background-color: transparent;
    color: #463e40;
    outline: none;
    border-radius: 3px;
    padding: 7px 7px 7px 0;
    width: 282px;
    cursor: pointer;
  }

  .select:focus {
    outline: none;
    box-shadow: 0 0 0 1px #9e9eed;
  }

  .select-wrapper {
    border-bottom: 1px solid #463e40;
    position: relative;
  }

  .select-wrapper::after {
    content: '';
    position: absolute;
    top: 10%;
    right: 5px;
    display: block;
    width: 9px;
    height: 9px;
    border: 1px solid #333;
    transform: rotate(45deg);
    border-top: none;
    border-left: none;
    pointer-events: none;
  }

  @media screen and (min-width: 1024px) {
    .widget {
      flex-direction: row;
      row-gap: 0;
      column-gap: 100px;
      font-size: 24px;
    }

    .form__heading {
      font-size: 26px;
    }
  }
</style>
