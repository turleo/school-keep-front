import { settings } from './settings/en'
import { hometask } from './hometask/en'

const enMessages = {
  title: 'School',
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

  hometask: hometask,

  drawer: {
    home: 'Home',
    countdown: 'Countdown',
    homework: 'Hometask',
    settings: 'Settings',
    about: 'About',

    login: 'Login'
  },

  login: {
    username: 'Username',
    password: 'Password',
    wrongUsername: 'Wrong username',
    wrongPassword: 'Wrong password'
  }
}

export { enMessages }
