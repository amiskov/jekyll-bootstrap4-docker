---
layout: post
title: Лямбда-исчисление
tags: математика программирование λ
---

## Вычислимость
С давних времен математиков интересовал вопрос, можно ли понять, решаема задача или нет. В математике есть разные [задачи разрешимости](https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B0_%D1%80%D0%B0%D0%B7%D1%80%D0%B5%D1%88%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8) — задачи, требующие ответа "да" или "нет". Например, делится ли x на у нацело. Если мы за конечное количество шагов можем выдать ответ "да, делится" или "нет, не делится", то задача является разрешимой.

В 1928-м году Давид Гильберт сформулировал [проблему разрешения](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0_%D1%80%D0%B0%D0%B7%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F) (Entscheidungsproblem). По-простому она звучит примерно так:

> Есть задача разрешимости, требующая ответа "да" или "нет". Задача описана на формальном языке, имеются все необходимые данные. Перед тем, как приступить к ее решению, можно ли понять, существует ли это решение в принципе?

То есть суть задачи в том, чтобы понять, существует ли некий алгоритм, который бы принимал на вход описание любой задачи разрешимости и выдавал бы ответ "да" или "нет" в зависимости от того, есть ли у этой задачи решение. На вход мы подаем формальный язык, утверждение на этом языке и какая-то штука должна нам сказать, ложно это утверждение или истинно.

В то время не было понятия "алгоритм", поэтому изначальная формулировка была другая.

Применительно к компьютерам, можно сказать, что решение этой задачи помогло бы понять, что смогут и чего не смогут делать машины.

Этот вопрос исследовал Черч и, в последствии, Алан Тьюринг. Тьюринг был студентом Черча, но оба они смотрели на проблему по-разному. В процессе работы обоим нужно было придумать формальный аппарат для доказательств. У Черча родилось лямбда-исчисление, у Тьюринга — Тьюринг-машина.

Черч и Тьюринг доказали, что не существует алгоритма, который могу бы ответить, решаема задача или нет. Сначала это сделал Черч, а потом Тьюринг. Тьюринг в приложении к своей работе показал, что с помощью лямбда-исчисления можно делать то же самое, что с помощью машины Тьюринга.

Так родились два подхода, ставшие основой для декларативного и императивного программирования.

### Тезис Чёрча—Тьюринга
Универсальный вычислительный аппарат (машина Тьюринга или лямбда-исчисление) может решать любые задачи, решение которых может быть выражено в виде алгоритма.

Под алгоритмом мы понимаем совокупность шагов или правил, приводящих к определенному результату или решению задачи. Следовательно, для компьютера синонимом алгоритма является решение задачи.

### Материалы
- [Милый видос](https://youtu.be/92WHN-pAFCs), который доступно объясняет доказательство Тьюринга. К нему есть [FAQ](http://www.zutopedia.com/halting_problem.html#faq):
- [Lambda Calculus by Dustin Mulcahey](https://www.slideshare.net/g33ktalk/lambda-calculus-by-dustin)
- [How can the Halting Problem be explained to a layman?](https://www.quora.com/How-can-the-Halting-Problem-be-explained-to-a-layman)
- [Тьюринг, Алан Матисон](http://www.krugosvet.ru/enc/gumanitarnye_nauki/lingvistika/TYURING_ALAN_MATISON.html)
- [Размышления о думающих машинах. Тьюринг. Компьютерное исчисление](https://coollib.com/b/338137/read)
- [Владимир Успенский, Предисловие к математике](https://books.google.ru/books?id=1oyCCwAAQBAJ&pg=PA127&lpg=PA127&dq=%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80+%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B+%D1%80%D0%B0%D0%B7%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F+Entscheidungsproblem&source=bl&ots=QWr10tFlfv&sig=qXfheeKlQ3HglEte5Le8N6t2_6g&hl=ru&sa=X&ved=0ahUKEwiMhqnYz7baAhXGApoKHUISB2oQ6AEIMjAC#v=onepage&q=%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B%20%D1%80%D0%B0%D0%B7%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F%20Entscheidungsproblem&f=false)
- Ч. Петцольд "Читаем Тьюринга"

## Lambda Calculus
https://youtu.be/eis11j_iGMs

Разберем 3 аспекта:

1. Что это такое?
2. Почему это полезно?
3. Откуда это появилось?

## Откуда это появилось?
Алонзо Черч был математиков в Принстоне. Он исследовал понятие функции в контексте вычислимости. И благодаря исследованиям появилось лямбда-исчисление.

Черч был в комиссии, которая проверяла работы Алана Тьюринга. Тьюринг придумал Тьюринг-машину (про это есть несколько [видосов на канале](https://www.youtube.com/results?search_query=Computerphile+turing)).

Тьюринг-машина описывает вычислительную модель, основанную на состоянии (state-based). В лямбда-исчислении эта же задача решается по-другому, математически, на основе функций.

Говорят о [тезисе Чёрча—Тьюринга](https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D0%B7%D0%B8%D1%81_%D0%A7%D1%91%D1%80%D1%87%D0%B0_%E2%80%94_%D0%A2%D1%8C%D1%8E%D1%80%D0%B8%D0%BD%D0%B3%D0%B0), так как Чёрч и Тьюринг объяснили по-разному одно и то же.

## Как это работает
Для Черча функция — черный ящик, который принимает что-то на вход, производит с этим действия и отдает результат:

```
x -> [funciton] -> x+1

x ->
    [function] -> x+y
y ->
```

Мы можем отдать в функцию аргументы и получить на выходе результат ее действия, мы не можем видеть, что внутри.

Эти функции — чистые: у них нет внутреннего состояния, одни и те же вводные всегда дают одинаковый результат. Ничего не хранится внутри функции, в отличие от Машины Тьюринга.

## Определение функций в лямбда-исчислении
Если один аргумент:

```
λx.x+1
```

Если два аргумента:

```
λx.λy.x+y
```

Применение с конкретным значением. Процесс подстановки, икс заменяем на 5:

```
(λx.x+1) 5
= 5+1
= 6
```

Итого в лямбда исчислении у нас есть всего 3 вещи:

- переменные: x, y, z и т. д.
- формальный способ объявить функцию (символ λ)
- способ применить функцию (подставлять значение вместо переменных)

## Пример подстановки
Разберем пример: `λx.λy.x+y 2 3`. Сокращенно записывают так: `λxy.x+y 2 3`.

Лямбда-функция может принимать только один аргумент.
Лямбда-функция связывает переменную, которую получает на входе. `λx` свяжет `x` и вернет функцию `λy`, для которой `x` будет уже свободной переменной.

Работает каррирование: преобразование функции от многих аргументов в набор функций, каждая из которых является функцией от одного аргумента.

```
F(x, y) эквивалентно (f(x))(y)
```

`λy` будет иметь доступ к переменной `x` и получит на вход переменную `y` и сможет их сложить.

На JS это можно было бы записать так:

```js
console.log(
    // λx.λy.x+y 2 3
    (x => y => x + y)(2)(3)
); // 5
```

Работает, потому что переменная x замыкается в функции, которая возвращается из `(x)`, то есть в `(y)`
        // (скобки тут указывают на то, что это анонимная функция, принимающая аргумент)

        // ES5
        console.log(
            (function(x) {
                return function(y) {
                    return x + y
                }
            })(2)(3)
        );

См. еще [тут](https://plato.stanford.edu/entries/lambda-calculus/#MulArgOpe) пример с вычислением длины гипотенузы.

## Цель лямбда-исчисления
Зачем нам это знать? Есть 3 ответа:

С помощью лямбда-исчисления можно записать любое вычисление. Любая программа на любом языке программирования который был, есть или будет может быть записана через лямбда-исчисление. То же самое можно сделать и в Машине Тьюринга. То есть **лямбда-исчисление — по-максимуму упрощенный язык, с помощью которого можно записать любой алгоритм**.

Лямбда-исчисление — основа для всех функциональных языков программирования. Например, код на Хаскеле очень похож на нотацию лямбда-исчисления.

Элементы функционального программирования сейчас есть во многих популярных языках программирования.

Church confessed that he didn't know anything about computers, but that he once had a student who did. (Читая Тьюринга, стр. 281)

## Примеры использования
Сложить 2 и 3:

```
{ Apafx.p(f, a(f,x)) }(Aab.a(a(b)), Acd.c(c(c(d))))
```
Например, можно закодировать логические значения True и False через лямбда-исчисление.

True будет принимать два аргумента и возвращать первый:

```
True = λx.λy.x
```

False будет принимать два аргумента и возвращать второй.

```
False = λx.λy.y
```

Теперь с помощью них закодим логический оператор Not, который принимая True возвращает False и наоборот. Not будет принимать логическое значение `b` (Boolean, True или False)

```
Not = λb.b False True
```

Функция Not принимает булево значение, применяет его к False и потом применяет его к True.

Передадим значение True в функцию Not:

```
Not True
=
((λb.b False) True) True
=
(True False) True
=
((λx.λy.x) False) True
=
False
```

Задача для самостоятельного решения: закодить And и Or.

## Еще пример
Рекурсия в лямбда-исчислении:

```
Y = λf. (λx.f(xx)) (λx.f(xx))
```

Это выражение называют Y-комбинатор. Его придумал Хаскель Карри.

# Лисп-машины
Архитектура заточена под Лисп, потому что в семидесятых было очень сложно выполнять программы на Лиспе на ЭВМ с обычной архитектурой.

Но потом, по закону Мура, компы стали гораздо мощнее и пропал экономический смысл выпускать отдельные машины для Лиспа.


---
# Лисп
В традиционных языках программирования имеется чет- кое различие между программой (т. е. операторами, начинаю- щимися с какого-либо ключевого слова — Set, For, If и т. д.) и данными (т. е. константами и переменными). Корни этого раз- личия, несомненно, лежат в архитектуре неймановского ком- пьютера, в котором нет ничего, кроме машинного кода и дан- ных, на которые этот код воздействует. (Код, стр. 470)

Все языки типа АЛГОЛа, т. е. большинство распространен- ных языков, предназначены для компьютеров с архитектурой Неймана. Вырваться из пут неймановской модели при разра- ботке языка нелегко, но еще сложнее убедить других людей им пользоваться. Один из таких «не-неймановских» языков — LISP (LIst Processing, обработка списков), созданный в конце 1950-х Джоном Маккарти (John MacCarthy) — используется при работах в области искусственного интеллекта. Не менее экзотичен, чем LISP, хотя и не похож на него, APL (A Programming Language), созданный также в конце 1950-х Кеннетом
Айверсоном (Kenneth Iverson). (Код, стр. 457)
 

---
JS is a premature lovechild of Scheme and Self, with Java looks (https://auth0.com/blog/a-brief-history-of-javascript/)

Функции в лямбда-исчислении априори являются данными. Фон-Неймановская архитектура (и машина Тьюринга) предполагает, что данные хранятся отдельно от обработчиков. Это характерно для любого императивного языка.

Функции тут априори объекты первого класса. Брендан решил взять это из Лиспа.



---

### λ-функции
https://www.leadingagile.com/2018/02/when-functional-programming-isnt-functional/

Лямбда-исчисление — это формальный аппарат, способный определить в своих терминах любую языковую конструкцию или алгоритм.
https://medium.com/@luijar/understanding-lambda-expressions-4fb7ed216bc5

Интересный выкладки: https://crypto.stanford.edu/~blynn/lambda/ Там есть WebAssembly зачем-то...

[Лямбда-функции](https://ru.stackoverflow.com/questions/111697/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D0%BB%D1%8F%D0%BC%D0%B1%D0%B4%D0%B0-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F) — это функции, у которых фактически нет имени. Таким образом математики упростили до невозможности формат записи функции, а вообще лямбда-исчислениями пытались формализовать вычисления:

```
λx.x
```

Все функции являются [функциями одного аргумента](http://anton-k.github.io/ru-haskell-book/book/14.html), но они могут принимать и возвращать функции. Поэтому применение трёх аргументов к функции Fun будет выглядеть так:

```
(((Fun Arg1) Arg2) Arg3)
```

λ — означает, что это лямбда-функция. Всё что после неё — список аргументов, в идеале абсолютно любого типа, в том числе может быть и другая лямбда-функция. После точки идёт "тело функции", а уже потом, собственно, идёт аргумент, который будет передан. Т. о.

```
λx.x+2 2 // вернёт 4 
```

В JS мы можно написать так:

```js
(x => x + 2) // 4
new Function('x', 'return x + 2')(2)
```

Пример посложнее:

```
λx.x 2 λy.y+1 // результат 3
```

`λx.x` — функция, 2 — аргумент. `λy.y+1` — функция, является так же аргументом. Можно расставить скобки:

```
((λx.x 2) λy.y+1) // F(2)(F)
```

На Лиспе это будет почти так же, только со скобками:

```scheme
(
  (λ(x) (x 2))     ; Функция принимает параметр `x`,
                   ; которому передает 2.
    (λ(y) (+ y 1)) ; В `x` приходит функция, которая выполняется с двойкой
)
```

```js
(x => x(2))(y => y + 1) // 3

// или через конструктор
new Function('x', 'return x(2)')(new Function('y', 'return y + 1'))

// Или на ES5
(function (x) {
    return x(2)
})(function (y) {
    return y + 1
}); // 3
```

Здесь в качестве параметра x выступает другая лямбда-функция λy.y + 1, в которую передаётся параметр 2. То есть любая лямбда функция является функцией высшего порядка, может принимать в качестве аргумента другую функцию и возвращать функцию:

```
λx.λy.y+x+3 2 // вернёт λy.y+5, т.к. x был равен двум.
λx.λy.y+x+3 2 3 // вернёт 8. Фактически это каррирование: сначала функция принимает аргумент 2 и возвращает функцию, которая принимает ещё один аргумент и возвращает результат.
```

(λx. (λy. y+x+3 2) 3)