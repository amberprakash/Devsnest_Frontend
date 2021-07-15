import React from 'react';
import './App.css';
import Card from './components/Card';
import MainContainer from './components/MainContainer';




function App() {
  return(
    <div className="App"> 
       {/* <Card img="/img/wp3334706.jpg" title="Wallpaper 1" />
      <Card img="/img/11.jpg" title="Wallpaper 2"/>
      <Card img="/img/bravo.jpg" title="Wallpaper 3"/>
      <Card img="/img/bravo2.jpg" title="Wallpaper 4"/>
      <Card img="/img/sharingan.png" title="Wallpaper 5"/>  */}
      <MainContainer />
    </div>
  )
    
}

export default App;
