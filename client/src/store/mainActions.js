import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => ({
    title: 'Регистрация',
    name: null,
    surname: null,
    password: null,
    email: null,
    newsletter: false,
    specialOffers: true,
    text: null,
    address: null,
    date: null,
    month: null,
    year: null,
    emailError: null,
    errors: {}
  }),
  actions: {
    updateField(field, value) {
      this[field] = value
      // Clear error when field is updated
      if (this.errors[field]) {
        delete this.errors[field]
      }
    },
    toggleNewsletter() {
      this.newsletter = true
    },
    toggleSpecialOffers() {
      this.specialOffers = !this.specialOffers
    },
    validateEmail() {
      if (!this.email) {
        this.errors.email = 'Это поле обязательно'
        return false
      }

      // Проверка на наличие @
      if (!this.email.includes('@')) {
        this.errors.email = 'Email должен содержать @'
        return false
      }

      // Проверка на несколько @
      if (this.email.split('@').length > 2) {
        this.errors.email = 'Email может содержать только один символ @'
        return false
      }

      // Проверка на пустую часть перед @
      if (this.email.split('@')[0].trim() === '') {
        this.errors.email = 'Введите часть email перед @'
        return false
      }

      // Намеренно не проверяем часть после @ (это наш дефект)
      // test@ пройдет валидацию

      this.errors.email = null
      return true
    },
    validatePassword() {
      if (!this.password) {
        this.errors.password = 'Это поле обязательно'
        return false
      }

      // Проверка длины
      if (this.password.length < 5) {
        this.errors.password = 'Пароль должен содержать не менее 5 символов'
        return false
      }
      this.errors.password = null
      return true
    },
    validate() {
      this.errors = {}
      let isValid = true

      // Проверка обязательных полей
      const requiredFields = ['name', 'surname', 'password']
      requiredFields.forEach(field => {
        if (!this[field]) {
          this.errors[field] = 'Это поле обязательно'
          isValid = false
        }
      })
      this.errors.address = ' '

      // Проверка email
      if (!this.validateEmail()) {
        isValid = false
      }
      // Проверка email
      if (!this.validatePassword()) {
        isValid = false
      }

      return isValid
    },
    save() {
      if (this.validate()) {
        this.text = 'Ваша учетная запись успешно созадна!'
        return true
      }
      return false
    }
  }
})
