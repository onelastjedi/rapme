/* eslint-disable */
import router from '@/router'

describe('Router', () => {
  it('should sets the correct routes', () => {
    const routes = router.options.routes
    expect(routes).to.be.a('array')
    expect(routes).to.have.lengthOf(3)
  })
})
