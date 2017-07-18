/* eslint-disable */
// https://scotch.io/tutorials/how-to-write-a-unit-test-for-vuejs
// https://gist.github.com/yoavniran/1e3b0162e1545055429e
// http://ricostacruz.com/cheatsheets/chai.html

import Vue from 'vue'
import Router from 'vue-router'
import router from '@/router'
import Header from '@/components/Header'

describe('Header.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor({
      router
    }).$mount()
    expect(vm.$el.querySelectorAll('a')).to.have.lengthOf(3)
  })
})
