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
    days_short: {
      monday: 'mo',
      tuesday: 'tu',
      wednesday: 'we',
      thursday: 'th',
      friday: 'fr',
      saturday: 'sa',
      sunday: 'su'
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
  },

  about: {
    subtitle: 'School helper',
    description: 'Website for convenient storing homework and checking out is everything is done for school.',
    presentation: 'Presentation',
    presentation_url: 'https://www.canva.com/design/DAE97TPBdLM/view?utm_content=DAE97TPBdLM&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
    feedback: 'Feedback form',
    feedback_url: 'https://forms.gle/zWiLyAbFWPig3YAq9'
  }
}

export { enMessages }
