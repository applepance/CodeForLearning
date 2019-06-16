const fs = require('fs');
const promisify = (func) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      try {
        func(...args, (err, data) => {
          if (err)
            reject(err)
          else
            resolve(data)
        })
      }
      catch (err) {
        reject(err)
      }
    })
  }
}
// fs.readFile('./promisify.html', { encoding: 'utf8' }, (err, data) => {
//   if (!err) {
//     console.log(data)
//   }
// })
const promiseReadFile = promisify(fs.readFile)
promiseReadFile('./promisify.html', { encoding: 'utf8' })
  .then((data) => {
    console.log(data)
  })