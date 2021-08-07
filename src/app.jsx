import React from 'react';
import Todo from './components/todo';
import CounterContainer from './containers/countercontainer';

const App = (props) => {
  return(
    <div>
      <CounterContainer />
      <hr />
      <Todo />
    </div>
  )
}

export default App;