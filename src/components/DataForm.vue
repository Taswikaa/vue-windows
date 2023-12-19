<template>
  <form class="form" action="">
    <h2 class="form__heading">Создание</h2>
    <div class="select-wrapper">
      <select class="select" v-model="data.user">
        <option selected disabled>
          Выберете менеджера
        </option>
        <option
          v-for="(manager, i) in managersList"
          :value="manager.value"
          :key="i"
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
    <div class="select-wrapper">
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
  </form>
</template>

<script>

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
        {
          label: 'Иванов',
          value: 'Иванов'
        },
        {
          label: 'Петров',
          value: 'Петров'
        },
        {
          label: 'Юров',
          value: 'Юров'
        },
      ],
      domainsList: [
        {
          label: 'Бэк-офис',
          value: 'Бэк-офис'
        },
        {
          label: 'Техплатформа,',
          value: 'Техплатформа,'
        },
        {
          label: 'Офис больших данных',
          value: 'Офис больших данных 1'
        },
        {
          label: 'Цифровой опыт поставщика',
          value: 'Цифровой опыт поставщика'
        },
      ],
    }
  }
}
</script>

<style>

</style>