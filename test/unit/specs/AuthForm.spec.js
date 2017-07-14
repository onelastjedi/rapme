/* eslint-disable */
import Vue from 'vue'
import store from '@/store'
import AuthForm from '@/components/AuthForm'

describe('AuthForm.vue', () => {
  it('should sets the correct default data', () => {
    expect(AuthForm.data).to.be.a('function')
    const defaultData = AuthForm.data()
    expect(defaultData.email && defaultData.password).to.equal(null)
  })

  it('should sets the correct methods', () => {
    expect(AuthForm.methods.signin).to.be.a('function')
  })

  it('should correctly signin', () => {

    // build component
    const Constructor = Vue.extend(AuthForm)
    const AuthFormComponent = new Constructor({
      store
    }).$mount()

    // set input values
    AuthFormComponent.email = 'asdasd'
    AuthFormComponent.password = 'asdasd'

    // update will in the dom only after Vue.nextTick()
    Vue.nextTick(() => {

      // simulate click event
      const button = AuthFormComponent.$el.querySelector('button')
      const clickEvent = new window.Event('click')
      button.dispatchEvent(clickEvent)

      // check Vuex state
      expect(AuthFormComponent.$store.state.user.current).to.be.true
    })
  })
})
