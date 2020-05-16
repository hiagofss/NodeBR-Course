const EventEmitter = require('events');

class Emitter extends EventEmitter {}

const myEmitter = new Emitter();

const nameEvent = 'user:click';

myEmitter.on(nameEvent, (click) => {
    console.log('Click user', click);
});

const stdin = process.openStdin();
stdin.addListener('data', (value) => {
    console.log(`Writing: ${value.toString().trim()}`);
});

// let count = 0;
// myEmitter.emit(nameEvent, 'Click in roller bar');
// myEmitter.emit(nameEvent, 'Ok');

// setInterval(() => {
//     myEmitter.emit(nameEvent, 'Ok' + count++);
// }, 1000);
