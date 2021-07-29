import './App.css';
import { useState } from 'react';
import CreateItem from './components/CreateItem';
import Itemlist from './components/Itemlist';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (name, calorie) => {
    setItems([...items, {name: name, calorie: calorie}]);
}
 function updateItem(prevName, newName,calorie){
   const index=items.findIndex((item)=> item.name=== prevName);
   items[index].name=newName;
   items[index].calorie=calorie;
   setItems(items);
 }
 function deleteItem(name){
   setItems(items.filter((item)=>item.name!== name));
 }
  return (
    <div className="App">
      <h1>Calorie Tracker</h1>
      <div className="container">
        <CreateItem addItem={addItem}/>
        <Itemlist items={items} updateItem={updateItem} deleteItem={deleteItem}/>
      </div>
    </div>
  );
}

export default App;
