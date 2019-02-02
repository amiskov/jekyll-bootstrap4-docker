---
layout: post
title: "Функции: терминология"
tags: функции js объяснялочка
---

### Объекты первого класса
Объекты первого класса являются таковыми, если их можно:

- передавать в качестве аргументов в функции;
- возвращать как результат из функций;
- сохранять в переменных или структурах данных.

История: статья про то, что в Алголе процедуры подобны второсортным гражданам, которых не везде пускают.

### Функции первого класса
Язык программирования имеет функции первого класса, если он рассматривает функции как объекты первого класса. То есть функции можно передавать в качестве аргументов, присваивать переменным, возвращать из других функций.

Например:

```js
const bark = function (dogName) {
  return `${dogName} says "Woof!"`
}
console.info(
  bark('Sharik')
) // Sharik says "Woof!"
```

Тут мы присваиваем функцию в переменную `bark`. Точнее, мы сохраняем ссылку на анонимную функцию в идентификатор `bark`.

<blockquote class="blockquote">
Переменная — это место в памяти, помеченное идентификатором, в котором хранится значение.
</blockquote>

В данном случае идентификатором `bark` мы пометили место в памяти, в котором сохранили функцию, которая принимает имя пёсика и возвращает строку, в которой он говорит "Гав!".

[Функция-стрелка](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions) позволяет записать это в одну строку:

```js
cosnt bark = dogName => `${dogName} says "Woof!"`
console.info(
  bark('Sharik')
)
```

`return` тут подразумевается, а единственный аргумент `dogName` можно передавать без скобок.

### Функция высшего порядка
Функция высшего порядка — это функция, принимающая в качестве аргументов функции или возвращающая функцию в качестве результата.

Пример — любой перебирающий метод массива:

```js
const names = ['HTML', 'CSS', 'JavaScript']
console.info(
  names.map(name => name.length)
) // [ 4, 3, 10 ]
```

Метод `map` принимает функцию-обработчик в качестве аргумента.



### Замыкание
Замыкание (англ. closure) — функция, в теле которой присутствуют ссылки на переменные, объявленные вне тела этой функции и не являющиеся её параметрами. Говоря другим языком, замыкание — функция, которая ссылается на [свободные переменные](https://ru.wikipedia.org/wiki/Свободная_переменная) в своём контексте.

```js
const TEN = 10
const timesTen = n => n * TEN

console.info(
  timesTen(8)
) // 80
```






------------
# Переопределение
Нельзя переопределять функции в PHP.

# Аргументы
```php
// значение по умолчанию для $count
function drop($array, $count = 1) {
    // ...
}
```

Формальные параметры — это то, что будет передано в ф-ю. Фактические — те, которые передаются при вызове:

```php
function ($a, $b) { // $a и $b — формальные параметры
    // ...
}
function(3, 5); // 3 и 5 — фактические параметры или аргументы
```

## Переменное число аргументов
`func_get_args()` вернет массив переданных аргументов:

```php
function sumArgs() {
    return array_sum(func_get_args());
}
```

Лучше:

```php
// spread-оператор, вернет то же, что func_get_args()
function sumArgs(...$numbers) {
    return array_sum($numbers);
}
```

Можно и так:

```php
// Один обязательный оргумент и неопределенное количество необязательных:
function sumArgs($arg, ...$numbers) {
    return $arg - array_sum($numbers);
}
```

# Функции (объекты) первого класса
Язык программирования имеет функции первого класса, если он рассматривает функции как объекты первого класса.

Объекты первого класса являются таковыми, елси их можно:
* передавать в качестве аргументов другим функциям,
* возвращать их как результат других функций,
* присваивать их переменным или сохранять в структурах данных.

# Функция высшего порядка
Функция высшего порядка — это функция, принимающая в качестве аргументов другие функции или возвращающая другую функцию в качестве результата.

Пример — любой перебирающий метод массива. При этом метод так же будет функцией первого класса (т. к. является методом оъекта `Array`):

```js
var names = ['HTML', 'CSS', 'JavaScript'];

var nameLengths = names.map(function(name) {
  return name.length;
});

// получили массив с длинами
alert( nameLengths ); // 4,3,10
```

?? При возврате функции на самом деле происходит возврат её замыкания. ??

# λ-функция
λ-функция — это анонимная функция первого класса (можно передавать аргументом и пр.).

# Окружение
Это место, где хранятся связи между названиями переменных и их значениями.

# Замыкание
Механизм, позволяющий взять переменную снаружи и использовать ее внутри ф-и:

```php
$square = function ($num) {
    return $num ** 2;
};

// В PHP нужно явно указывать, что берется из глобальной области.
// Для этого используется use:
$sumOfSquares = function ($num1, $num2) use ($square) { // так $square мы берем из замыкания
    // $square — свободная переменная (определена вне ф-и, но ф-я имеет к ней доступ)
    // $num1 и $num2 — связанные переменные. Они связывают передаваемые аргументы с именами, которые использует ф-я
    return $square($num1) + $square($num2);
};

echo $sumOfSquares(3, 4);
```

# Чистые функции

# Энергичный язык
Позволяет передавать выражения как параметр и оно будет вычислено перед вызовом функции:

```php
$sumOfSquares($square(3), 5); // Сначала вычислится $square(3)
```

Это называется аппликативный порядок вычисления.

Есть еще нормальный порядок вычисления, при котором аргументы не вычисляются до тех пор, пока они не понадобятся (Haskell).
