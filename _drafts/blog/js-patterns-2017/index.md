# JavaScript Patterns for 2017 - Scott Allen
<iframe width="560" height="315" src="https://www.youtube.com/embed/hO7mzO83N1Q" frameborder="0" allowfullscreen></iframe>

The JavaScript language and ecosystem have seen dramatic changes in the last 2 years.

In this sessions we'll look at patterns for organizing code using modules, talk about some of the pros and cons of new language features, and look at the current state of build tools and build patterns. 

## Дополнительно, не из доклада
https://jakearchibald.com/2017/es-modules-in-browsers/

### Импорт модулей в браузере
`import some from './some.js` — обязательно указывать `.js`.

```html
<script type="module">
    // Обязательно указывать type="module"
</script>
```

Чтоб примеры работали в ФФ, надо включить: `dom.moduleScripts.enabled` в `about:config`.

## Modules
Было, [IIFE](https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/IIFE):


```js
(function() {
    "use strict";
})();
```

Теперь не актуально, есть `import` и `export`, а `"use strict"` включается автоматом, если есть код ES6.

### Exports
При импорте никто не будет иметь доступа к тому, что не экспортится.

```js
// person.js
function work(name) {
    return `${name} is working`;
}

class Person {
    constructor(name) {
        this.name = name;
    }
    doWork() {
        return work(this.name);
    }
}

export {work, Person}
export default Person
```

Импорты:

```js
// app.js
import {Person, Animal} from "./lib"   // импортит только эти классы
import HumanPerson from "./lib/humans" // импортит то, что в `export default`
import * as lib from "./lib"           // импортит все, сохраняет все в объект `lib`
```

### Immutable Bindings
Напрямую мутировать (изменять) данные в импортируемом модуле нельзя. Только функционал из самого модуля может менять его состояние (изменять переменные, свойства объекта и пр.).

Например, есть счетчик:

```js
// counter.js
export let counter = 0;

export function increment() {
    return counter += 1;
}
```

Импортируя переменную (или другие структуры данных) из модуля, мы не можем изменять ее напрямую:

```js
// app.js
import {counter} from './counter'

counter += 1; // TypeError: "counter" is read-only
```

Но мы можем мипортировать из модуля функцию, которая сможет это сделать:

```js
// app.js
import {counter, increment} from './counter'

console.log(counter); // 0
increment();
console.log(counter); // 1, все ок
```

Переменная `counter` будет изменяться во всех модулях, которые импортируют ее или то, что ее возвращает.

## Building Boundaries with Modules [8:49](https://youtu.be/hO7mzO83N1Q?t=529)
Файл `index.js` может быть точкой входа в модуле, который лежит в директории с кучей файлов. В нем мы можем подготовить public API.

## Webpack
С 16-й мин.

## Arrow Syntax [56:00](https://youtu.be/hO7mzO83N1Q?t=1300)
Удобный синтаксис для лямбда-функций (которые нужно передать куда-то).

Удобно юзать в колбэках.

Возможный косяк (частый кейс в Реакте):

```js
const numbers = [1, 2, 3];
const result = numbers.map(n => {value: n}); // [undefined, undefined, undefined], тут скобки для JS — это блок кода, а не объект.
const result = numbers.map(n => ({value: n})); // тут норм
```

## Tools
## Language Features
## Builds