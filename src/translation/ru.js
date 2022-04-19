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
  },

  about: {
    subtitle: 'Школьный помошник',
    description: 'Сайт для удобной записи свогео домашнего задания и возможности оотслеживания процесса его выполнения.',
    presentation: 'Презентация',
    presentation_url: 'https://www.canva.com/design/DAE97TPBdLM/view?utm_content=DAE97TPBdLM&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
    feedback: 'Форма обратной связи',
    feedback_link: 'https://docs.google.com/forms/d/e/1FAIpQLSemhlcxf4bIKpIg7HaeXadWZjEe0WZMkwDVCTy6KzlmV7RytQ/viewform?usp=sf_link',
    source_backend: 'Исходный код серверной части',
    source_frontend: 'Исходный код сайта'
  }
}

export { ruMessages }
