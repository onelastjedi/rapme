/* eslint-disable */
import Vue from 'vue'
import store from '@/store'
import AuthForm from '@/components/AuthForm'

const Constructor = Vue.extend(AuthForm)
const vm = new Constructor({
  store
})

describe('AuthForm.vue', () => {
  it('should sets the correct default data', () => {
    expect(AuthForm.data).to.be.a('function')
    const defaultData = AuthForm.data()
    expect(defaultData.email && defaultData.password).to.equal('')
  })

  it('should sets the correct methods', () => {
    expect(AuthForm.methods.signin).to.be.a('function')
  })

  it('should correctly signin with any data', () => {
    vm.$store.commit({
      type: 'authUser',
      email: 'asdasd',
      password: 'asdasd',
    })
    expect(vm.$store.state.user.current).to.be.true
  })
})
