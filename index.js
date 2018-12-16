function AllDate () {

}

AllDate.prototype.date = () => {
  const time = new Date()
  return time
}

AllDate.prototype.timestamp = () => {
  const time = new Date()
  // const result = Date.parse(time)
  const result = time.valueOf()
  // const result = time.getTime()
  return result
}

AllDate.prototype.year = () => {
  const time = new Date()
  const result = time.getFullYear()
  return result
}

AllDate.prototype.month = () => {
  const time = new Date()
  const result = time.getMonth()
  return result
}

AllDate.prototype.day = () => {
  const time = new Date()
  const result = time.getDate()
  return result
}

AllDate.prototype.chWeek = () => {
  const weekList = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  const time = new Date()
  const result = time.getDay()
  return weekList[result]
}

AllDate.prototype.enWeek = () => {
  const weekList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const time = new Date()
  const result = time.getDay()
  return weekList[result]
}

AllDate.prototype.hour = () => {
  const time = new Date()
  const result = time.getHours()
  return result
}

AllDate.prototype.minutes = () => {
  const time = new Date()
  const result = time.getMinutes()
  return result
}

AllDate.prototype.second = () => {
  const time = new Date()
  const result = time.getSeconds()
  return result
}

AllDate.prototype.MD = () => {
  const time = new Date()
  let month = time.getMonth() + 1
  month = month < 10 ? '0' + month : month
  let day = time.getDate()
  day = day < 10 ? '0' + day : day
  return month + '-' + day
}

AllDate.prototype.YMD = () => {
  const time = new Date()
  const year = time.getFullYear()
  let month = time.getMonth() + 1
  month = month < 10 ? '0' + month : month
  let day = time.getDate()
  day = day < 10 ? '0' + day : day
  return year + '-' + month + '-' + day
}

AllDate.prototype.YMDhms = () => {
  const time = new Date()
  const year = time.getFullYear()
  let month = time.getMonth() + 1
  month = month < 10 ? '0' + month : month
  let day = time.getDate()
  day = day < 10 ? '0' + day : day
  let hour = time.getHours()
  hour = hour < 10 ? '0' + hour : hour
  let minutes = time.getMinutes()
  minutes = minutes < 10 ? '0' + minutes : minutes
  let second = time.getSeconds()
  second = second < 10 ? '0' + minutes : minutes
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + second
}

export default AllDate
