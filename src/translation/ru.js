import { settings } from './settings/ru'
import { hometask } from './hometask/ru'

const ruMessages = {
  title: 'Школа',
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
    edit: {
      edit: 'Изменить',
      cancel: 'Отменить',
      save: 'Сохранить',
      delete: 'Удалить'
    }
  },

  hometask: hometask,

  drawer: {
    home: 'Главная',
    countdown: 'Время до...',
    homework: 'Домашнее задание',
    settings: 'Настройки',
    about: 'Что это?',

    login: 'Войти'
  },

  login: {
    username: 'Имя пользователя',
    password: 'Пароль',
    wrongUsername: 'Неверное имя пользователя',
    wrongPassword: 'Неверный пароль'
  }
}

export { ruMessages }
