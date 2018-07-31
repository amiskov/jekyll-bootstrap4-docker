---
layout: post
title: "Где хранить join?"
tags: ['join', 'python', 'javascript', 'наблюдение']
---

Метод [join](https://docs.python.org/3.6/library/stdtypes.html#str.join) в Питоне принадлежит строкам:

```python
# Не правильно
['one', 'two', 'three'].join(', ')

# Правильно
', '.join(['one', 'two', 'three'])
```

Для глаза, привычного к JS, это выглядит странно, [но потом проясняется](https://stackoverflow.com/a/493842).

На человеческом языке обычно говорят "Please, join a list", а не "Please, a list join". К тому же соединить можно строковые элементы любого итерируемого объекта: списки, словари, строки файла и пр. и результат при этом всегда будет строкой.