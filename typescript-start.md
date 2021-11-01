## Шаг 1 - Установка NodeJS

`$ node -v`

## Шаг 2 - инициализируем npm проект (создает package.json)

`$ npm init -y`

## Шаг 3 - установка typescript

`$ npm i -D typescript`

## Шаг 4 - инициализация tsconfig.json (настройка компиляции typescript)

`$ npx tsc --init`

## Шаг 5 - создать задачу (скрипт) в package.json для запука typescipt в watch режиме

```json
...
"scripts": {
    "tsc": "tsc --watch"
},
...
```

## Шаг 6 - запуск компиляции:

`$ npm run tsc`