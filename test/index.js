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

  it('test get year!!', () => {
    const year = time.year()
    const dateYear = new Date().getFullYear()
    year.should.match(dateYear)
  })

  it('test get month!!', () => {
    const month = time.month()
    const dateMonth = new Date().getMonth()
    month.should.match(dateMonth)
  })

  it('test get day!!', () => {
    const day = time.day()
    const dateDay = new Date().getDate()
    day.should.match(dateDay)
  })
})
