// Works in Node with experimental module loader: node --experimental-modules app.mjs
import {counter, increment} from './counter'

// Wrong
console.log(counter++);

// Right
console.log(counter); // 0
increment();
console.log(counter); // 1, все ок
