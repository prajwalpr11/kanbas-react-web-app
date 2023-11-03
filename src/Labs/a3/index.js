import Classes from "./Classes";
import DynamicStyling from "./DynamicStyling";

import PathParameters from "./PathParameters";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import JavaScriptFunc from "./JavaScriptFunc";
import { useSelector } from "react-redux";



function Assignment3(){
    const { todos } = useSelector((state) => state.todosReducer);

    return(
        <div className="container">
            <h1>Assignment 3</h1>
            <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
            <TodoItem/>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <JavaScriptFunc/>
            <PathParameters/>
            <DynamicStyling/>
            
            
        </div>
    );
}
export default Assignment3;