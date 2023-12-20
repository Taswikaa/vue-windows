<template>
  <form class="form" @submit.prevent="onSubmit">
    <h2 class="form__heading">Создание</h2>
    <div class="select-wrapper" v-if="managersList.length">
      <select class="select" v-model="data.user">
        <option selected disabled>
          Выберете менеджера
        </option>
        <option
          v-for="manager in managersList"
          :value="manager.value"
          :key="manager.id"
        >
          {{ manager.label }}
        </option>
      </select>
    </div>
    <input
      class="text-input"
      type="text"
      placeholder="Название продукта"
      v-model.trim="data.name"
    >
    <input
      class="text-input"
      type="text"
      placeholder="Ссылка в Jira"
      v-model.trim="data.link"
    >
    <div class="select-wrapper" v-if="domainsList.length">
      <select class="select" v-model="data.domain">
        <option selected disabled>
          Укажите домен
        </option>
        <option
          v-for="(domain, i) in domainsList"
          :value="domain.value"
          :key="i"
        >
          {{ domain.label }}
        </option>
      </select>
    </div>
    <button class="form__button">Создать</button>
  </form>
</template>

<script>
import api from '../utils/api.js';

export default {
  name: 'DataForm',
  components: {
  },
  data() {
    return {
      data: {
        user: 'Выберете менеджера',
        name: '',
        link: '',
        domain: 'Укажите домен'
      },
      managersList: [

      ],
      domainsList: [

      ],
    }
  },
  methods: {
    onSubmit() {
      console.log(this.data);
      // Запрос на первый эндпоинт
      // api.sendToFirstApi(this.data);
    }
  },
  mounted() {
    api.getData()
    .then(data => {
      const managers = data.data.managers;
      const domains = data.data.domains;

      managers && managers.forEach(manager => {
        this.managersList.push({
          label: manager.name,
          value: manager.name,
          id: manager.id
        })
      })

      domains && domains.forEach(domen => {
        this.domainsList.push({
          label: domen,
          value: domen,
        })
      })
    })
  },
}
</script>

<style>

</style>