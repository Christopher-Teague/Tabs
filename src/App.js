import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Display from './components/Display';


function App() {

  ///// define tabs \\\\\
  const tabs = ([
    { name: "Tab 1",message: "Tab 1 is SUPER FUN!" }, 
    { name: "Tab 2",message: "Tab 2 is here for YOU!" }, 
    { name: "Tab 3",message: "Tab 3 can't see me!" }, 
    { name: "Tab 4",message: "Tab 4 on the floor!" },
    { name : "🦄" , message : "🌈🌠🌈🌠🌈🌠🌈🌠🌈"},
    { name : "🐵", message: "🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌" } 
  ]);
// console.log(tabs)

  ///// default message to send as props \\\\\
  const [message, setMessage] = useState([
    ("nothing to see here...")
  ]);
    
  ///// set new message to display \\\\\
  ///// takes in an index from clicking a tab \\\\\ 
  const currentMessage = (idx) => {
    // console.log(idx)
    setMessage(tabs[idx].message)
  }
  
  // console.log("***** Message ***** " + message)
  
  ///// passes tabs and currentMessage to Tabs component as props \\\\\
  ///// passes message to Display component as props \\\\\
  return (
    <div className="App">
      <Tabs tabs={tabs} currentMessage={currentMessage}/>
      <Display message={message} />

    </div>
  );
}

export default App;
