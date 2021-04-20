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
  const currentDate = new Date();
  res.send(`${currentDate.getUTCDate()}.0${currentDate.getUTCMonth()+1}.${currentDate.getUTCFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`)
})

app.listen(port, () => {
  console.log('Starting')
  console.log(`Server is listening on ${port}`)

  intervalObj = setInterval(() => {
    const currentDate = new Date();
    console.log(`${currentDate.getUTCDate()}.0${currentDate.getUTCMonth()+1}.${currentDate.getUTCFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`);
  }, argv.interval);
})