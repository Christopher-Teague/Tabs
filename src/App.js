import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Display from './components/Display';


function App() {

  const [tabs, setTabs] = useState([
    { name: "Tab 1",message: "Tab 1 Reportinng for duty!" }, 
    { name: "Tab 2",message: "Tab 2 is here for YOU!" }, 
    { name: "Tab 3",message: "Tab 3 can't see me!" }, 
    { name: "Tab 4",message: "Tab 4 on the floor!" } 
  ]);
console.log(tabs)

  // const message = () => 
  //   <p>{msg}</p>;
  

  // const setMsg = (index) => {
  //   return value;
  // }
// console.log(setMsg)

   

  return (
    <div className="App">
      <Tabs tabs={tabs} />
      <Display />
      {/* <Display msg={msg}/> */}
    </div>
  );
}

export default App;
