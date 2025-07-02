import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

// Register error handler BEFORE emitting errors
myEmitter.on('error', (err) => {
  console.log('An Error Occurred:', err.message);
});

function greetHandler(name) {
  console.log('Hello ' + name);
}

function goodbyeHandler(name) {
  console.log('Goodbye ' + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
myEmitter.emit('greet', 'PhucT');
myEmitter.emit('goodbye', 'PhucT');

// Emit error
myEmitter.emit('error', new Error('Something went wrong'));
