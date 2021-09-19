import './App.css';
import AddTode from './components/AddTodo';
import ListTodo from './components/ListTodo';


function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTode />
      <ListTodo />
    </div>
  );
}

export default App;
