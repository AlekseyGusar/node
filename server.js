const express = require('express')
const app = express()
const port = 3000
const yargs = require('yargs');
let intervalObj;

const argv = yargs
    .option('interval', {
        alias: 'i',
        description: 'console output recurrence interval',
        type: 'number',
    })
    .option('time', {
        alias: 't',
        description: 'Time after which the web client message will be displayed',
        type: 'number',
    })
    .argv;

app.get('/', (req, res) => {
  clearInterval(intervalObj);
  res.send(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''))
})

app.listen(port, () => {
  console.log('Starting')
  console.log(`Server is listening on ${port}`)

  intervalObj = setInterval(() => {
    console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''));
  }, argv.interval);
  
  
  console.log(argv.time)
})