export const globalStore = defineStore({
  id: 'global',
  actions: {
    async homeData() {
      if (this.home) {
        return this.home
      }
      const home = await $fetch(
        'https://api.fragment-studios.com/items/home?fields=*.*',
      )
      this.home = home.data
      return this.home
    },
    async portfolioData() {
      if (this.portfolio) {
        return this.portfolio
      }
      const portfolio = await $fetch(
        'https://api.fragment-studios.com/items/portfolio?fields=*.*',
      )
      this.portfolio = portfolio.data
      return this.portfolio
    },
    async servicesData() {
      if (this.services) {
        return this.services
      }
      const services = await $fetch(
        'https://api.fragment-studios.com/items/services?fields=*.*',
      )
      this.services = services.data
      return this.services
    },
    async aboutData() {
      if (this.about) {
        return this.about
      }
      const about = await $fetch(
        'https://api.fragment-studios.com/items/about?fields=*.*',
      )
      this.about = about.data
      return this.about
    },
    async settingsData() {
      if (this.settings) {
        return this.settings
      }
      const settings = await $fetch(
        'https://api.fragment-studios.com/items/settings?fields=*.*',
      )
      this.settings = settings.data
      return this.settings
    },
    async careerData() {
      if (this.career) {
        return this.career
      }
      const career = await $fetch(
        'https://api.fragment-studios.com/items/career?fields=*.*',
      )
      this.career = career.data
      return this.career
    },
  },
  state: () => ({
    home: null,
    about: null,
    career: null,
    portfolio: null,
    settings: null,
    services: null,
    menu: false,
  }),
})
