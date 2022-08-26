
# Weapon of character

Функция с аргументом-деструктором, которая извлекает массив с нужными полями (id, name, description, icon) из объекта, а если значения для поля description нет - устанавливает default'ное значение в 'Описание недоступно'. Функция возвращает извлечённый массив из объектов с четыремя полями.

***

Function which returns array of objects with keys (id, name, description, icon) from passed object. If there is not value of description key then set default value 'Описание недоступно'.

Passed character example:

```js
const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон',
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
        },
    ]
}
```

Example of func call:

```js
getSpecialAttack(character);
```

Example of output:

```js
[
    {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
    },
    {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
    },
]
```
