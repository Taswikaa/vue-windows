<template>
  <form class="form" @submit.prevent="onSubmit" v-if="isActive">
    <h2 class="form__heading">Создать сотрудника</h2>
    <div class="select-wrapper" v-if="settings.isUser && usersList.length">
      <select class="select" v-model="data.user">
        <option selected disabled>
          Сотрудник
        </option>
        <option
          v-for="user in usersList"
          :value="user.value"
          :key="user.id"
        >
          {{ user.label }}
        </option>
      </select>
    </div>
    <div class="select-wrapper" v-if="settings.isLead && leadsList.length">
      <select class="select" v-model="data.lead">
        <option selected disabled>
          Руководитель сотрудника
        </option>
        <option
          v-for="lead in leadsList"
          :value="lead.value"
          :key="lead.id"
        >
          {{ lead.label }}
        </option>
      </select>
    </div>
    <div class="select-wrapper" v-if="settings.isType && typesList.length">
      <select class="select" v-model="data.type">
        <option selected disabled>
          Тип ставки
        </option>
        <option
          v-for="(type, i) in typesList"
          :value="type.value"
          :key="i"
        >
          {{ type.label }}
        </option>
      </select>
    </div>
    <div class="select-wrapper" v-if="settings.isBusiness && businesesList.length">
      <select class="select" v-model="data.business">
        <option selected disabled>
          Бизнес-единица
        </option>
        <option
          v-for="(busineses, i) in businesesList"
          :value="busineses.value"
          :key="i"
        >
          {{ busineses.label }}
        </option>
      </select>
    </div>
    <input
      class="text-input"
      type="number"
      placeholder="Процент капитализации"
      max="100"
      min="0"
      v-model.trim="data.percent"
      v-if="settings.isPercent"
    >
    <input
      class="text-input"
      type="text"
      placeholder="Должность"
      v-model.trim="data.job"
      v-if="settings.isJob"
    >
    <div class="form__buttons">
      <button class="form__button form__button_type_cancel" type="button" @click="onClose">Отмена</button>
      <button class="form__button">Создать</button>
    </div>
  </form>
</template>

<script>
import api from '../utils/api.js';

export default {
  name: 'CreateForm',
  props: ['settings'],
  data() {
    return {
      data: {
        user: 'Сотрудник',
        lead: 'Руководитель сотрудника',
        type: 'Тип ставки',
        business: 'Бизнес-единица',
        percent: 0,
        job: ''
      },
      isActive: this.settings.isActive,
      usersList: [

      ],
      leadsList: [

      ],
      typesList: [

      ],
      businesesList: [

      ],
    }
  },
  methods: {
    onSubmit() {
      if (this.isActive) {
        const sendingData = {

        };
        if (this.settings.isUser) {
          sendingData['user'] = this.data.user;
        }
        if (this.settings.isLead) {
          sendingData['lead'] = this.data.lead;
        }
        if (this.settings.isType) {
          sendingData['type'] = this.data.type;
        }
        if (this.settings.isBusiness) {
          sendingData['business'] = this.data.business;
        }
        if (this.settings.isPercent) {
          sendingData['percent'] = this.data.percent;
        }
        if (this.settings.isJob) {
          sendingData['job'] = this.data.job;
        }
        console.log(sendingData);
        // Запрос на второй эндпоинт
        // api.sendSecondApi(this.data);
      }
    },
    onClose() {
      this.isActive = false;
    }
  },
  mounted() {
    api.getAdditionalData()
    .then(data => {
      const leads = data.data.leads;
      const users = data.data.users;
      const types = data.data.types;
      const business = data.data.business;

      leads && leads.forEach(lead => {
        this.leadsList.push({
          label: lead.name,
          value: lead.name,
          id: lead.id
        })
      })

      users && users.forEach(user => {
        this.usersList.push({
          label: user.name,
          value: user.name,
          id: user.id
        })
      })

      types && types.forEach(type => {
        this.typesList.push({
          label: type,
          value: type,
        })
      })

      business && business.forEach(business => {
        this.businesesList.push({
          label: business,
          value: business,
        })
      })
    })
  },
}
</script>

<style>

</style>