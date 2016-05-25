var inputs = []
var outputs = []

inputs.push([
  {
    title: 'This is a task',
    day: 1,
    sent: false
  }
]);
inputs.push([
  {
    title: 'This is a task',
    day: 1,
    sent: false
  },
  {
    title: 'This is yet another task',
    day: 2,
    sent: false
  },
  {
    title: 'Aaaaaand another task!',
    day: 3,
    sent: false
  }
]);
inputs.push([
  {
    title: 'This is a task',
    day: 1,
    sent: false
  },
  {
    title: 'This is another task',
    day: 2,
    sent: false
  },
  {
    title: 'This is yet another task',
    day: 2,
    sent: false
  },
  {
    title: 'Aaaaaand another task!',
    day: 3,
    sent: false
  }
]);

outputs.push([
  {
    title: 'This is a task',
    day: 1,
    sent: false,
    time: '2016-05-24T10:00:00-04:00' }
]);
outputs.push([
  {
    title: 'This is a task',
    day: 1,
    sent: false,
    time: '2016-05-24T10:00:00-04:00' },
  {
    title: 'This is yet another task',
    day: 2,
    sent: false,
    time: '2016-05-25T10:00:00-04:00' },
  {
    title: 'Aaaaaand another task!',
    day: 3,
    sent: false,
    time: '2016-05-26T10:00:00-04:00' }
]);
outputs.push([
  {
    title: 'This is a task',
    day: 1,
    sent: false,
    time: '2016-05-24T10:00:00-04:00' },
  {
    title: 'This is another task',
    day: 2,
    sent: false,
    time: '2016-05-25T11:00:00-04:00' },
  {
    title: 'This is yet another task',
    day: 2,
    sent: false,
    time: '2016-05-25T15:00:00-04:00' },
  {
    title: 'Aaaaaand another task!',
    day: 3,
    sent: false,
    time: '2016-05-26T10:00:00-04:00' }
]);

module.exports = {
  inputs: inputs,
  outputs: outputs
}
