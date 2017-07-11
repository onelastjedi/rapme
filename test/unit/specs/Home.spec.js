import Vue from 'vue'
import Home from '@/pages/Home'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.home-page h1').textContent)
      .to.equal('Home')
  })
})
