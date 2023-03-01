import React from 'react';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status'
import Heading from './components/Heading'
import NestedChildren from './components/NestedChildren'
import {Button} from './components/Button'
import {Input} from './components/Input'
import { Container } from './components/Container';
import State from './components/state/State'
import Counter from './components/state/Counter'
import Box from './components/context/Box'
import ThemeContext from './components/context/ThemeContext';
import { theme } from './components/context/theme';
import DomRef from './components/ref/DomRef';
import CounterComp from './components/class/CounterComp'
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import ListComp from './components/genericProps/ListComp'

function App() {
  const PersonName = {
    firstname:"Rasika",
    lastname:"D"
  }

  const NameList = [
    {
      first:"Rasika",
      last : "D"
    },
    {
      first:"Rutika",
      last : "D"
    },
    {
      first:"Rutika",
      last : "D"
    }
  ]


  
  const List = [
   "Rasika","fhjdfjdf","jhfjdfhd"
  ] 
  return (
    <div className="App">
      <Greet name="Rasika" isLoggedIn={false}/>
      <Person name={PersonName}/>
      <PersonList names={NameList} list={List}/>
      <Status status="loading" />
      <Heading>I will win</Heading>
      <NestedChildren >
      <Heading>This is Nested scenario</Heading>
      </NestedChildren>
      <Button handleClick={()=>{console.log("Button Clicked")}}/>
      <Input value = "" handleChange = {(event)=>{console.log(event)}} />
      <Container styles={{padding:'1px',border:'1px solid black'}} />
      <State />
      <Counter />
      <ThemeContext.Provider value={theme}>
      <Box />
      </ThemeContext.Provider>
      <DomRef/>
      <CounterComp message='The count value is'/>
      <Private isLoggedIn={true} Component = {Profile} />
      <ListComp items={["Rasika","Rutika"]}  onClick = {(item)=>console.log(item)}/>
    </div>
  );
}

export default App;
