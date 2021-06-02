import React from 'react';
import './App.css';
import Input from './components/input';
import TodoItem from './components/TodoItem';

import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'

function App() {

  const todoList = useSelector(selectTodoList)

  return (
    <div className="app">
      {/* todo list -> top*/}
      {/* done or some check mark thing*/}
      {/* input box -> below (to add new items ) 1 */}

      <div className="app__container">
        <div className="app__todoContainer">
          {
            todoList.map(item => (
              //todo Component
              <TodoItem
                name={item.item}
                done={item.done}
                id={item.id}              
              />
            ))
          }
        </div>

        <Input />
      </div>
    </div>
  );
}

export default App;
