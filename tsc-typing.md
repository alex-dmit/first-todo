# Основы типизации TypeScript

```ts
// Создание переменной 
let a: number | string
a = 1 
const str: string = 'Hello'

// Преобразование типов
// nextElementSibling имеет тип по умолчанию Element | null
const statusElem = checkbox.nextElementSibling as HTMLDivElement
// или так
const statusElem = <HTMLDivElement>checkbox.nextElementSibling

// Типизация параметров функции
function toggleTextDecor(checkbox: HTMLInputElement) {}
```