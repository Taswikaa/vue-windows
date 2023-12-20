<template>
  <form class="form" @submit.prevent="onSubmit" v-if="isActive">
    <h2 class="form__heading">Создание</h2>
    <div class="select-wrapper" v-if="settings.isManager &&managersList.length">
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
      v-model.trim="data.name" v-if="settings.isProductName"
    >
    <input
      class="text-input"
      type="text"
      placeholder="Ссылка в Jira"
      v-model.trim="data.link" v-if="settings.isJiraLink"
    >
    <div class="select-wrapper" v-if="settings.isDomain && domainsList.length">
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
    <div class="form__buttons">
      <button class="form__button form__button_type_cancel" type="button" @click="onClose">Отмена</button>
      <button class="form__button">Создать</button>
    </div>
  </form>
</template>

<script>
import api from '../utils/api.js';

export default {
  name: 'DataForm',
  components: {
  },
  props: ['settings'],
  data() {
    return {
      data: {
        user: 'Выберете менеджера',
        name: '',
        link: '',
        domain: 'Укажите домен'
      },
      isActive: this.settings.isActive,
      managersList: [

      ],
      domainsList: [

      ],
    }
  },
  methods: {
    onSubmit() {
      if (this.isActive) {
        const sendingData = {

        };
        if (this.settings.isManager) {
          sendingData['manager'] = this.data.user;
        }
        if (this.settings.isProductName) {
          sendingData['productName'] = this.data.name;
        }
        if (this.settings.isJiraLink) {
          sendingData['jiraLink'] = this.data.link;
        }
        if (this.settings.isDomain) {
          sendingData['domain'] = this.data.domain;
        }
        console.log(sendingData);
        // Запрос на первый эндпоинт
        // api.sendToFirstApi(this.data);
      }
    },
    onClose() {
      this.isActive = false;
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