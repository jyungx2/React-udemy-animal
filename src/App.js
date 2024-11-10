import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

// State: 유저가 앱과의 상호작용을 하면서 변하는 데이터
// 이 데이터(state)가 바뀌는 순간, 리액트는 화면에 있는 요소를 자동으로 업데이트 한다. 여기서 useState 함수를 사용하는데, 이는 리액트가 보여줄 컨텐츠를 바꿀 수 있는 하나의 유일한 방법이다.
// -> If you want to change what is visible on screen in reaction to a use event, you want to use state.

function App() {
  /*
  const [count, setCount] = useState(0);
  // 0: starting default data
  // count: 💥The piece of state!💥 (starts as 0..changes over time) -> num/str/arr/obj....whatever data!
  // setCount: setter function (used to update our piece of state) ...✨only way we can update our state✨

  const handleClick = () => {
    // When user does something, update the piece of state. Causes React to rerender the component.
    // 🎉Oh, you updated a piece of state! It's time to Rerender your component🎉
    setCount(count + 1);
  };
  */
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // This will modify a piece of state!!
    // animals.push(getRandomAnimal());
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;

// Event Name(mainly used): onClick / onChange
// 1) onClick: A user clicks on something
// 2) onChange: A user types in a text input

// Using Events
// 1. 보통 이벤트 처리 함수(이벤트 실행시 자동으로 호출되는 함수)를 event handler or callback function이라고 부른다.

// 2. 네이밍: handle + EventName (👍 Not a requirement, Community convention..) ex) handleButtonClick

// 3. prop: 함수를 마치 Prop처럼 넘겨라!
// ex) onClick = {handleClick}

// 4. 유효한 이벤트 이름을 사용하여 함수를 넘기도록 하자!
// ex) onMouseEnter, onDoubleClick, on MouseOver...

// 5. 함수를 prop처럼 요소에 넘겨줄 때, 괄호를() 붙이지 말자! (Don't call it just pass a reference to the function!!)
// Give the button the whole function so the btn can call the function in the future when the buttin is clicked. Otherwise, immediately calls onButtonClick and gives the button the return value..
