<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-6">
          <v-card-title class="text-h4 mb-6">
            <strong>{{ title }}</strong>
          </v-card-title>

          <v-form @submit.prevent="clickSave">
            <v-card-subtitle class="pl-0 required">Имя</v-card-subtitle>
            <v-text-field
              v-model="name"
              label="Имя"
              required
              :error-messages="errors.name"
              @input="updateField('name', $event.target.value)"
            ></v-text-field>

            <v-card-subtitle class="pl-0 required">Фамилия</v-card-subtitle>
            <v-text-field
              v-model="surname"
              label="Фамилия"
              required
              :error-messages="errors.surname"
              @input="updateField('surname', $event.target.value)"
            ></v-text-field>

            <v-card-subtitle class="pl-0 required">Пароль</v-card-subtitle>
            <v-text-field
              v-model="password"
              label="Пароль"
              type="password"
              required
              :error-messages="errors.password"
              @input="updateField('password', $event.target.value)"
            ></v-text-field>

            <v-card-subtitle class="pl-0 required">Email</v-card-subtitle>
            <v-text-field
              v-model="email"
              label="E-mail"
              type="email"
              required
              :error-messages="errors.email"
              @input="updateField('email', $event.target.value)"
            ></v-text-field>

            <v-card-subtitle class="pl-0 required">Дата рождения</v-card-subtitle>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ props }">
                <v-text-field
                  v-model="date"
                  label="ДД.ММ.ГГГГ"
                  placeholder="ДД.ММ.ГГГГ"
                  v-bind="props"
                  @input="updateField('date', $event.target.value)"
                  :error-messages="errors.date"
                  ref="dateInput"
                  v-mask="'##.##.####'"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="pickerDate"
                @update:modelValue="handleDatePicker"
                no-title
                scrollable
              ></v-date-picker>
            </v-menu>


            <v-text-field
              v-model="address"
              label="Адрес"
              type="address"
              :error-messages="errors.address"
              @input="updateField('address', $event.target.value)"
            ></v-text-field>

            <v-card-subtitle class="pl-0">Подписаться на рассылку:</v-card-subtitle>
            <v-checkbox
              v-model="newsletter"
              label="Новости и акции"
              @click="toggleNewsletter"
            ></v-checkbox>
            <v-checkbox
              v-model="specialOffers"
              label="Специальные предложения"
              @click="toggleSpecialOffers"
            ></v-checkbox>

            <v-btn
              color="primary"
              type="submit"
              block
              size="large"
            >
              Зарегистрироваться
            </v-btn>

            <v-dialog
              v-model="dialog"
            >
              <v-card
                max-width="500"
                :title="text"
              >
                <template v-slot:actions>
                  <v-btn
                    class="ms-auto"
                    text="Ok"
                    @click="close"
                  ></v-btn>
                </template>
              </v-card>
            </v-dialog>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <img class="image_class" src="@/assets/img.png" alt="">
  </v-container>
</template>

<script>
import {mask} from 'vue-the-mask'
import { mainStore } from '@/store/mainActions.js'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'MainPage',
  directives: { mask },
  data() {
    return {
      menu: false,
      pickerDate: null,
      dialog: false,
    }
  },
  computed: {
    ...mapState(mainStore, [
      'title',
      'name',
      'surname',
      'password',
      'email',
      'newsletter',
      'specialOffers',
      'text',
      'address',
      'date',
      'month',
      'year',
      'errors',
      'emailError',
    ])
  },
  methods: {
    ...mapActions(mainStore, [
      'updateField',
      'toggleNewsletter',
      'toggleSpecialOffers',
      'validate',
      'save'
    ]),
    handleDatePicker(date) {
      if (date) {
        const d = new Date(date)
        const pick = [
          d.getDate().toString().padStart(2, '0'),
          (d.getMonth() + 1).toString().padStart(2, '0'),
          d.getFullYear()
        ].join('.')
        this.updateField('date', pick);
        this.menu = false
      }
    },
    clickSave() {
      this.save();
      if (this.text) {
        this.dialog = true;
      }
    },
    close() {
      this.dialog = false;
    }
  }
}
</script>

<style scoped lang="sass">
.required
  &::after
    content: "*"
    color: red
    font-size: 18px
    line-height: 0
    position: relative
    top: 0


.image_class
  position: fixed
  height: 400px
  right: 0
  bottom: 0

</style>
