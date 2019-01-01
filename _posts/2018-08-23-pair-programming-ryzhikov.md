---
title: "Парное программирование"
layout: post
tags: ["программирование", "экстремальное программирование", "парное программирование"]
---

Заметки по [докладу](http://msk14.agiledays.ru/members/profile/412/#report-112) Николая Рыжикова с AgileDays 2014.

Парное программирование придумал [Кент Бэк](https://ru.wikipedia.org/wiki/Бек,_Кент) в рамках методологии «[Экстремальное программирование](https://ru.wikipedia.org/wiki/Экстремальное_программирование)». Экстремальное потому, что он рассуждал примерно так:

> Есть практики, которые приводят к хорошему результату. А давайте выкрутим ручку на максимум в этих практиках:
> 
> - Раз обсуждение задачи дает хороший результат, значит надо работать в паре. Пусть обсуждение задачи идет постоянно.
> - Владение кодом должно быть общим — давайте писать его не в одиночестве.
> - И т.д.

В экстремальном программировании есть несколько методик, в этом посте только о парном программировании. На данный момент мне оно интересно как средство передачи опыта и культуры начинающим.

<!--more-->

<iframe src="https://player.vimeo.com/video/90645464?byline=0&portrait=0" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Кент Бэк — идейный вдохновитель, много всего придумал. Книгу [Extreme Programming Explained](https://www.ozon.ru/context/detail/id/3668767/) надо прочитать.

В команде докладчика ПП практиковали, потом забили.

Код-ревью у них не прижился, отвлекал сильных разработчиков. И вообще, при код-ревью проблему нужно исправляется постфактум, люди _уже_ допустили ошибки. Во время код-ревью хочется посадить человека рядом и все объяснить, это удобнее и доходчивее каментов в пул-реквесте.

Через время опять вспомнили про ПП. У всех остались приятные впечатления, никто по началу не вспомнил, почему прекратили его использовать.

А потом вспомнили: первое время ПП очень изматывает. По началу за 4—5 часов работы ПП выжимает все из программиста.

Но к ПП привыкаешь. Аналог: начинающий спортсмен и опытный. Начинающий делает слишком много усилий, напрягает слишком много второстепенных мышц. А опытный напрягает только то, что нужно и только тогда, когда нужно. Так и с ПП.

## Производительность пары
Исследования показывают, что время на реализацию задачи парой и одним программистом такое же. Эффективность примерно такая же. По началу пара медленнее, но под конец раскочегаривается.

Зато в паре получается существенный бонус:

- **Качество** — решения, принимаемые в паре, и код более качественные. В процессе общения, переводя проблему в слова, перекидывая ее из правого полушария в левое, человек ее лучше понимает и вероятность скорого решения возрастает.
- **Владение кодом** — знание о работе системы размешивается между программистами. [Бас-фактор](https://ru.wikipedia.org/wiki/Фактор_автобуса) уменьшается, люди лучше узнают проект.
- **Удовлетворение** — исследования показали большую степень удовлетворения и лучший эмоциональный фон. На работе много стресса. Не в последнюю очередь потому, что ты делаешь задачу один, а команда ждет. Появляется напряжение, качество работы уменьшается. Когда работаешь в паре такой напряг заметно меньше. Докладчик говорит, что на работе сильно снижается стресс, если использовать ПП.

## Практические рекомендации
> Как долго существует пара?

В компании докладчика сложные задачи, пара меняется раз в неделю. Если задачи попроще, то можно чаще.

> Кто в паре?

Есть устоявшиеся пары (связка), которые хорошо чувствуют друг-друга. Пары пробивные, которе хорошо решают сложные задачи. Пары на полировку, которые допидоривают задачу и т.д. Похоже на связку в спорте. Например, два нападающих в футболе, которые усиливают друг-друга. Периодически пары перемешиваются, но связки могут использоваться, когда требуется.

Пара наставник-начинающий. Режим обучения. Очень хорошо работает. Месяц работы в паре и новичок и культуру впитывает, и развивается.

> ПП удаленно.

Можно, практикуют. Google Hangouts + SSH, Tmux, Vim. Есть специализированные инструменты.

> Weak pairint, не все задачи хороши для пары.

Гуглить, читать доки, решать простые задачи в паре излишне. Тем не менее, всегда решение идет от пары. Пара по своему желанию может разбиться и собраться снова, когда посчитает нужным. Например, есть пара стабилизации релиза. Они всегда пара, но часто им проще работать порознь. Когда надо, они опять соединяются.

## Стопперы
По началу очень некомфортно. Такая человеческая природа.

Если есть в команде проблемы в общих ценностях, в общем видении, то пара это выявит очень быстро (один считает так, другой иначе и оба они лидеры в команде). Такие пары едва ли состоятся, но противоречие нужно будет решить, чтобы не вставала проблема в дальнейшем. Ор, мат, злость — все возможно.

Пара — это прежде всего коммуникация. Они все время общаются, а **communication is a blood of a team.**

