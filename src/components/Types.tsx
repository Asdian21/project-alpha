import React from 'react';

// 1. Примитивные типы данных: string, number, boolean
const name: string = "John";
const age: number = 30;
const isActive: boolean = true;

// 2. Массивы
const items: string[] = ["item1", "item2", "item3"];
const numbers: number[] = [1, 2, 3];

// 3. Объект с конкретными свойствами
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: "John",
  isActive: true,
};

// 4. Функция с типами параметров и возвращаемого значения
const greet = (name: string): string => {
  return `Hello, ${name}`;
};

// 5. Необязательные свойства
interface Product {
  name: string;
  price?: number;
}

const product: Product = {
  name: "Laptop"
};

// 6. Union (объединение типов)
const value: string | number = "Hello";

// 7. Enum (перечисление)
enum Role {
  Admin,
  User,
  Guest
}

const userRole: Role = Role.Admin;

// 8. Тюпл (кортеж)
const tuple: [string, number] = ["John", 30];

// 9. Any (любой тип)
let anything: any = "Hello";
anything = 42;

// 10. Void (функция, которая ничего не возвращает)
const logMessage = (message: string): void => {
  console.log(message);
};

// React-компонент
const App: React.FC = () => {
  return (
    <div>
      <h1>{greet(name)}</h1>
      <p>Age: {age}</p>
      <p>User active: {isActive ? "Yes" : "No"}</p>

      <h2>Items:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Product Info:</h2>
      <p>{product.name}</p>
      {product.price && <p>Price: ${product.price}</p>}

      <h2>User Role:</h2>
      <p>Role: {Role[userRole]}</p>

      <h2>Tuple Example:</h2>
      <p>{tuple[0]} is {tuple[1]} years old.</p>

      <h2>Log Message:</h2>
      <button onClick={() => logMessage("Button clicked!")}>Click me</button>
    </div>
  );
};

export default App;






// Что здесь происходит:
// Мы определили и типизировали примитивные типы данных (string, number, boolean).
// Используем массивы и типизируем их как массивы строк и чисел.
// Создаем интерфейс для объекта пользователя и типизируем его.
// Типизируем функцию, которая принимает строку и возвращает строку.
// Показываем пример интерфейса с необязательными свойствами.
// Используем union-типы для переменных, которые могут быть разных типов.
// Создаем перечисление (enum) для ролей.
// Пример тюпла (кортежа) с фиксированной длиной и типами.
// Используем тип any (хотя его стоит избегать).
// Типизируем функцию, которая ничего не возвращает (void).
