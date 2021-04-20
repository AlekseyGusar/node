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
  const timeoutObj = setTimeout(() => {
    clearInterval(intervalObj);
    res.send(formatCurrentData())
  }, argv.time);
})

app.listen(port, () => {
  console.log('Starting')
  console.log(`Server is listening on ${port}`)

  intervalObj = setInterval(() => {
    console.log(formatCurrentData());
  }, argv.interval);
})

function formatCurrentData() {
  const currentDate = new Date();
  return `${currentDate.getUTCDate()}.0${currentDate.getUTCMonth() + 1}.${currentDate.getUTCFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
};