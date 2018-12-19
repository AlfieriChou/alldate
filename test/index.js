const AllDate = require('../')
require('should')
const describe = require('mocha').describe
const it = require('mocha').it
const moment = require('moment')

const time = new AllDate()

describe('test AllDate!!!', () => {
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

  it('test get hour!!', () => {
    const hour = time.hour()
    const dateHour = new Date().getHours()
    hour.should.match(dateHour)
  })

  it('test get minutes!!', () => {
    const minutes = time.minutes()
    const dateMinutes = new Date().getMinutes()
    minutes.should.match(dateMinutes)
  })

  it('test get second!!', () => {
    const second = time.second()
    const dateSecond = new Date().getSeconds()
    second.should.match(dateSecond)
  })

  it('test get MD!!', () => {
    const MD = time.MD()
    const dateMD = moment(new Date()).format('MM-DD')
    MD.should.match(dateMD)
  })

  it('test get YMD!!', () => {
    const YMD = time.YMD()
    const dateYMD = moment(new Date()).format('YYYY-MM-DD')
    YMD.should.match(dateYMD)
  })
})
