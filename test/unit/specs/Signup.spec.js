/* eslint-disable */
import Vue from 'vue'
import Signup from '@/pages/Signup'

describe('Signup.vue', () => {
  it('should render correct content', () => {
    const Constructor = Vue.extend(Signup)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.signup-page h1').textContent)
      .to.equal('Signup')
  })
})
