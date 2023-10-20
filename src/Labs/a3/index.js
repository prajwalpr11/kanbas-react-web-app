import Classes from "./Classes";
import DynamicStyling from "./DynamicStyling";

import PathParameters from "./PathParameters";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import JavaScriptFunc from "./JavaScriptFunc";


function Assignment3(){
    return(
        <div className="container">
            <h1>Assignment 3</h1>
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