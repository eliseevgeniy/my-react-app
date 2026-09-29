import React from "react";
// Импортируем библиотеку React

import Counter from "./components/Counter";
// Компонент Counter — счётчик для увеличения/уменьшения числа

import Timer from "./components/Timer";
// Компонент Timer — таймер (отсчитывает время в мс)

const App = () => {
  // Функциональный компонент App возвращает JSX-разметку

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {/* Корневой контейнер: текст по центру, отступы 20px */}
      <h1>React State App</h1>
      {/* Заголовок приложения */}
      <Counter />
      {/* Вставляем компонент Counter */}
      <Timer />
      {/* Вставляем компонент Timer */}
    </div>
  );
};

export default App;
// Экспортируем App по умолчанию