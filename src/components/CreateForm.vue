<template>
  <form class="form" action="">
    <h2 class="form__heading">Создать сотрудника</h2>
    <div class="select-wrapper">
      <select class="select" v-model="data.user">
        <option selected disabled>
          Сотрудник
        </option>
      </select>
    </div>
    <div class="select-wrapper">
      <select class="select" v-model="data.lead">
        <option selected disabled>
          Руководитель сотрудника
        </option>
      </select>
    </div>
    <div class="select-wrapper">
      <select class="select" v-model="data.type">
        <option selected disabled>
          Тип ставки
        </option>
      </select>
    </div>
    <div class="select-wrapper">
      <select class="select" v-model="data.business">
        <option selected disabled>
          Бизнес-единица
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
  </form>
</template>

<script>
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
    }
  }
}
</script>

<style>

</style>