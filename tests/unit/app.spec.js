
import { shallowMount } from '@vue/test-utils'
import assert from 'assert'
import App from '../../src/App.vue'

describe('App.vue', () => {
  it('renders without error', () => {
    const wrapper = shallowMount(App)
    assert.ok(wrapper.text())
  })

  describe('Value fetching', () => {
    it('does not search with less than 3 characters', async () => {
      const wrapper = shallowMount(App)
      let called = false
      await wrapper.vm.fetchOptions('he', () => called = true)
      assert.equal(called, false)
    })

    it('fetches results', async () => {
      const wrapper = shallowMount(App)
      let called = false
      await wrapper.vm.fetchOptions('ler', () => called = true)
      assert.equal(called, true)
      assert.ok(wrapper.vm.options.length > 0)
    })
  })

})
