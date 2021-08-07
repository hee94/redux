import React from 'react';
import Counter from './components/counter'
import Todo from './components/todo';

const App = (props) => {
  return(
    <div>
      <Counter number={0}></Counter>
      <hr />
      <Todo />
    </div>
  )
}

export default App;