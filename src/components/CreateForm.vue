<template>
  <form class="form" @submit.prevent="onSubmit">
    <h2 class="form__heading">Создать сотрудника</h2>
    <div class="select-wrapper" v-if="usersList.length">
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
    <div class="select-wrapper" v-if="leadsList.length">
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
    <div class="select-wrapper" v-if="typesList.length">
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
    <div class="select-wrapper" v-if="businesesList.length">
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
    >
    <input
      class="text-input"
      type="text"
      placeholder="Должность"
    >
    <button class="form__button">Создать</button>
  </form>
</template>

<script>
import api from '../utils/api.js';

export default {
  name: 'CreateForm',
  data() {
    return {
      data: {
        user: 'Сотрудник',
        lead: 'Руководитель сотрудника',
        type: 'Тип ставки',
        business: 'Бизнес-единица',
        percent: 0,
        job: 'Должность'
      },
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
      console.log(this.data);
      // Запрос на второй эндпоинт
      // api.sendSecondApi(this.data);
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