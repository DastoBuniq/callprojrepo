import React from 'react';
import './App.css';
import Search from './Search'
import Contact from './Contact';
import AddContact from './AddContact';
import { useState } from 'react';

function App() {

  const elements = [
    {
      name: 'Damiano Stopo',
      phone: 3427529311,
      mail: 'damy32dc@gmail.com'
    },
    {
      name: 'Giorgio Stopo',
      phone: 3427529311,
      mail: 'damy32dc@gmail.com'
    },
    {
      name: 'Federica Stopo',
      phone: 3427529311,
      mail: 'damy32dc@gmail.com'
    }];

    const [adding, setAdding] = useState(false)
    function onPlus(){
      setAdding(!adding)
    }

  return (
    <div className="mainPane">
      <Search func={onPlus} add={adding}/>
      {adding ? <AddContact func={onPlus}/> : <></>}
      {elements.map((value, index)=>{
        return <Contact key={index} value={value}/>
      })}
    </div>
  );
}


export default App;
