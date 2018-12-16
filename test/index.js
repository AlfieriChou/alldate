const AllDate = require('../')
require('should')
const describe = require('mocha').describe
const it = require('mocha').it

const time = new AllDate()

describe('test AllDate!!!', () => {
  it('test get Date now!!', () => {
    const date = time.date()
    JSON.stringify(date).should.match(JSON.stringify(new Date()))
  })

  it('test get timestamp!!', () => {
    const date = time.timestamp()
    date.should.be.a.Number()
  })
})
