import AddTodos from "./components/addTodos";
import AddTodoList from './components/addTodoList';
import { useSelector } from "react-redux";
import './todo.css';


function App () {
  const taskObj = useSelector((state)=>state.Todos.data);
  return <div className="appbody">
    <h1>Todo List</h1>
    <AddTodos />
    <AddTodoList />
    <h2> Total tasks remained: {taskObj.length}</h2>
    
  </div>;
};

export default App;
