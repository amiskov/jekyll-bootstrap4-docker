---
layout: post
title: Анонимные функции и замыкания
tags: стоицизм философия люди
---

Смотрел Ларакасты, Джефри постоянно называет анонимную фнукцию Closure. Дейл Риз в своих книгах про Ларавель тоже так говорил. Тейлор Отвел так пишет в Твиттере. Полез смотреть.

```php
Route::get('foo', function () { // этот колбэк называют Closure
    return 'Hello World';
});
```

Оказывается в PHP анонимная функция — это объект класса `Closure`. И называть ее Closure вполне правильно с точки зрения устройства языка. Ну, думаю, ладно, PHP is a fractoal of bad design, хуле с него взять. Анонимная функция ничего же не замыкает, тем более в PHP, где замыкание можно сделать только через `use`.

Замыкания в PHP vs замыкания в JS

https://codeinphp.github.io/post/closures-php-vs-javascript/
https://stackoverflow.com/questions/7417430/javascript-closures-vs-php-closures-whats-the-difference
http://php.net/manual/ru/functions.anonymous.php
http://culttt.com/2013/03/25/what-are-php-lambdas-and-closures/
http://php.net/manual/ru/class.closure.php

Потом выяснилось, что в Swift [точно так же](https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/Closures.html):

>  Closures are self-contained blocks of functionality that can be passed around and used in your code. Closures in Swift are similar to blocks in C and Objective-C and to lambdas in other programming languages. 

Полагаю, моя фрустрация исходит из привычки рассматривать функции с точки зрения функциональных языков. А тут объектный подход. Функция — блок кода, который можно реиспользовать.

[Лямбды в Руби](http://blog.honeybadger.io/using-lambdas-in-ruby/)

