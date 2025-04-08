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
      <label for="password" class="required" @input="inputValue({password: $event.target.value})">Пароль</label>
      <input :value="password">
    </div>


    <div class="input_button">
      <input class="input_button_text" type="button" value="Зарегистрироваться">
    </div>
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
    newsletter: false,
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
