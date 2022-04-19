import { settings } from './settings/en'
import { hometask } from './hometask/en'
import { countdown } from './countdown/en'

const enMessages = {
  title: 'School Keep',
  settings: settings,
  common: {
    days: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday'
    },
    edit: {
      edit: 'Edit',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete'
    }
  },

  countdown: countdown,
  hometask: hometask,

  drawer: {
    home: 'Home',
    countdown: 'Countdown',
    homework: 'Hometask',
    allHomework: 'All hometasks',
    settings: 'Settings',
    about: 'About',

    login: 'Login',
    register: 'Register'
  },

  login: {
    username: 'E-mail',
    password: 'Password',
    wrongUsername: 'Wrong username',
    wrongPassword: 'Wrong password'
  }
}

export { enMessages }
