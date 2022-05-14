import { useState, useEffect } from 'react';
import Nav from './componets/Nav'
import About from './componets/About'
import './App.css';

function App() {

  const [link] = useState([
    'About',
    'Work',
    'Contact'
  ])

  // Array destructuring a react HOOK. 'choice' representing the current array
  // of information while 'setChoice' is the function that will effect 'choice'
  const [choice, setChoice] = useState(link[0]);

  useEffect(() => {
    document.title = `ME - ${choice}`;
  })
  
  const navChoices = (page) => setChoice(page)

  useState(() => {
    navChoices('About')
  })

  return (
    <>
    <Nav navChoices={navChoices} choice={choice} setChoice={setChoice}>
      choice={choice}
    </Nav>

    {choice === 'About' && (<About />)}
    
    {/* {currentNavItem === 'contact' && (<Gallery />)}
    {currentNavItem === 'contact' && (<Gallery />)} */}
    
    </>
  );
}

export default App;
