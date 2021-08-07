import React from 'react';
import TodoContainer from './containers/todocontainer';
import CounterContainer from './containers/countercontainer';

const App = (props) => {
  return(
    <div>
      <CounterContainer />
      <hr />
      <TodoContainer />
    </div>
  )
}

export default App;