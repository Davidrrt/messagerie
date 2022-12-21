
const baseUrl = 'https://576cc2bd-e943-49e1-8075-1f9a1ede52a8.mock.pstmn.io'


export const useAuthStore = defineStore('auth',{
  state: () => ({
    user: '',
    token: '',
  }),
  actions: {
    async login(loginForm: any) {
      await $fetch(`${baseUrl}/login`, {
        method: 'POST',
        body: loginForm
      })
        .then((response: any) => {
          this.user = response
          this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
          localStorage.setItem('user', JSON.stringify(this.user))
          localStorage.setItem('token', JSON.stringify(this.token))
        })
        .catch(error => { 
          throw error;
        })
    },
    logout() {
      this.user = ''
      this.token = ''
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
  }
});