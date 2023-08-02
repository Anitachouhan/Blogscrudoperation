export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
      const userData = localStorage.getItem("userData")
      if (!userData) {
        return navigateTo('/Signup')
      }
    }
  })