import { settings } from './settings/ru'
import { hometask } from './hometask/ru'
import { countdown } from './countdown/ru'

const ruMessages = {
  title: 'School Keep',
  settings: settings,
  common: {
    days: {
      monday: 'Понедельник',
      tuesday: 'Вторник',
      wednesday: 'Среда',
      thursday: 'Четверг',
      friday: 'Пятница',
      saturday: 'Суббота',
      sunday: 'Воскресенье'
    },
    days_short: {
      monday: 'пн',
      tuesday: 'вт',
      wednesday: 'ср',
      thursday: 'чт',
      friday: 'пт',
      saturday: 'сб',
      sunday: 'вс'
    },
    edit: {
      edit: 'Изменить',
      cancel: 'Отменить',
      save: 'Сохранить',
      delete: 'Удалить'
    }
  },

  countdown: countdown,
  hometask: hometask,

  drawer: {
    home: 'Главная',
    countdown: 'Время до...',
    homework: 'Домашнее задание',
    allHomework: 'Все домашнее задание',
    settings: 'Настройки',
    about: 'Что это?',

    login: 'Войти',
    register: 'Зарегистрироваться'
  },

  login: {
    username: 'Электронная почта',
    password: 'Пароль',
    wrongUsername: 'Неверное имя пользователя',
    wrongPassword: 'Неверный пароль'
  }
}

export { ruMessages }
