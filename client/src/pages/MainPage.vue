<template>
  <b>
    {{ title }}
  </b>

  <div>
    <div class="input input_name">
      <label for="name" class="required">Имя</label>
      <input type="text" :value="name" @input="inputName($event)" @blur="blurName">
    </div>

    <div class="input input_surname">
      <label for="surname" class="required_surname">Фамилия</label>
      <input type="text" :value="surname" @input="inputValue({surname: $event.target.value})">
    </div>

    <div class="input input_password">
      <label for="password" class="required">Пароль</label>
      <input type="text" :value="password" @input="inputValue({password: $event.target.value})">
    </div>

    <div class="input input_password">
      <label for="email" class="required">E-mail</label>
      <input type="text" :value="email" @input="inputValue({email: $event.target.value})">
    </div>

    <div class="input input_password">
      <label for="birthDate">Дата рождения</label>
      <div class="input_date">
        <div class="input_date_item">
          День
          <input type="number" :value="date" min="0" max="31" @input="inputValue({date: $event.target.value})">
        </div>
        <div class="input_date_item">
          Месяц
          <input type="number" :value="month" min="0" max="12" @input="inputValue({month: $event.target.value})">
        </div>
        <div class="input_date_item">
          Год
          <input type="number" :value="year" min="0" @input="inputValue({year: $event.target.value})">
        </div>
      </div>
    </div>


    <div class="input_button">
      <input class="input_button_text" type="button" value="Зарегистрироваться" @click="save">
    </div>
    <span style="color: green">
      {{text}}
    </span>
  </div>

  <div class="checkbox-group">
    <p>Подписаться на рассылку:</p>
    <label class="checkbox-label">
      <input type="checkbox" name="newsletter" id="newsletter" @click="clickCheck"> Новости и акции
    </label>
    <label class="checkbox-label">
      <input type="checkbox" name="specialOffers" checked  @click="clickCheck"> Специальные предложения
    </label>
  </div>
  <img class="image_class" src="@/assets/img.png" alt="">
</template>


<script>
export default {
  name: 'MainPage',
  data: () => ({
    title: 'Регистрация',
    name: null,
    surname: null,
    password: null,
    email: null,
    newsletter: false,
    text: null,
    date: null,
    month: null,
    year: null,
  }),
  methods: {
    clickCheck() {
      this.newsletter = true;
      document.getElementById('newsletter').checked = this.newsletter;
    },
    inputName(value) {
      this.name = value;
    },
    inputValue(value) {
      Object.keys(value).forEach((key) => {
        this[key] = value[key]
      })
    },
    blurName() {
      this.name = null;
    },
    save() {
      this.text = 'Ваша учетная запсиь успешно создлана!'
    }
  }
}
</script>

<style scoped lang="sass">
.input
  padding-top: 14px
  &_name
    display: flex
    gap: 13px
  &_surname
    display: flex
    flex-direction: column
  &_password
    display: flex
    flex-direction: column
    width: 500px
  &_button
    width: 100%
    display: flex
    justify-content: end
    align-items: end
    margin-top: 15px
    &_text
      font-size: 18px
  &_date
    display: flex
    flex-direction: row
    &_item
      display: flex
      flex-direction: column
      gap: 5px

.required
  &::after
    content: "*"
    color: red
    font-size: 18px
    line-height: 0
    position: relative
    top: 0
  &_surname::after
    position: relative
    top: -23px
    content: "*"
    color: red
    font-size: 18px
    line-height: 0

.checkbox-group
  position: absolute
  bottom: 20px

.image_class
  position: absolute
  height: 300px
  right: 0
  bottom: 0
</style>
