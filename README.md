# alldate
Get all kind of date.

### Installation

```
npm install alldate
```

### In node.js
```javascript
// es5
const AllDate = require('alldate')

// es6
import AllDate from 'alldate'
```

* get Date now
```javascript
const time = new AllDate()
console.log(time.date()) // Tue Jun 26 2018 13:55:41 GMT+0800
```

* get timestamp
```javascript
const time = new AllDate()
console.log(time.timestamp()) // 1529992541992
```

* get year
```javascript
const time = new AllDate()
console.log(time.year()) // 2018
```

* get month
```javascript
const time = new AllDate()
console.log(time.month()) // 6
```

* get day
```javascript
const time = new AllDate()
console.log(time.day()) // 26
```

* get chinese week
```javascript
const time = new AllDate()
console.log(time.chWeek()) // 星期六
```

* get english week
```javascript
const time = new AllDate()
console.log(time.enWeek()) // saturday
```

* get hour
```javascript
const time = new AllDate()
console.log(time.hour()) // 13
```

* get minutes
```javascript
const time = new AllDate()
console.log(time.minutes()) // 59
```

* get second
```javascript
const time = new AllDate()
console.log(time.second()) // 27
```

* get MD
```javascript
const time = new AllDate()
console.log(time.MD()) // 06-30
```

* get YMD
```javascript
const time = new AllDate()
console.log(time.YMD()) // 2018-06-26
```

* get YMDhms
```javascript
const time = new AllDate()
console.log(time.YMDhms()) // 2018-06-26 13:59:27
```