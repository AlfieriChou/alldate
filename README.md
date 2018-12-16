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

const time = new AllDate()
```

* get Date now
```javascript
console.log(time.date()) // 2018-12-16T14:03:10.314Z
```

* get timestamp
```javascript
console.log(time.timestamp()) // 1529992541992
```

* get year
```javascript
console.log(time.year()) // 2018
```

* get month
```javascript
console.log(time.month()) // 6
```

* get day
```javascript
console.log(time.day()) // 26
```

* get chinese week
```javascript
console.log(time.chWeek()) // 星期六
```

* get english week
```javascript
console.log(time.enWeek()) // saturday
```

* get hour
```javascript
console.log(time.hour()) // 13
```

* get minutes
```javascript
console.log(time.minutes()) // 59
```

* get second
```javascript
console.log(time.second()) // 27
```

* get MD
```javascript
console.log(time.MD()) // 06-30
```

* get YMD
```javascript
console.log(time.YMD()) // 2018-06-26
```

* get YMDhms
```javascript
console.log(time.YMDhms()) // 2018-06-26 13:59:27
```